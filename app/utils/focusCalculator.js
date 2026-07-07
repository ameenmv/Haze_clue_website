export class FocusCalculator {
  constructor() {
    this.sampleRate = 128; // Hz
    this.bufferSize = 256; // 2 seconds

    this.ema = 0.0;
    this.baseline = 1.0;
    this.minEi = Number.MAX_VALUE;
    this.maxEi = -Number.MAX_VALUE;
    
    this.isCalibrating = true;
    this.calibrationBuffer = [];
    this.calibrationSeconds = 0;
    this.maxCalibrationSeconds = 60; // Wait 60s for baseline

    // Smoothing factor for EMA (تنعيم النتائج)
    this.smoothingFactor = 0.2;
  }

  // Simple Radix-2 FFT implementation in Vanilla JS
  // Returns magnitude squared (Power)
  fftPower(realInput) {
    const n = realInput.length;
    // Pad to power of 2 if needed (already 256 here)
    const real = new Float32Array(realInput);
    const imag = new Float32Array(n);

    // Bit-reversal permutation
    let j = 0;
    for (let i = 0; i < n - 1; i++) {
      if (i < j) {
        let tempReal = real[i];
        real[i] = real[j];
        real[j] = tempReal;
      }
      let m = n >> 1;
      while (m <= j) {
        j -= m;
        m >>= 1;
      }
      j += m;
    }

    // Cooley-Tukey decimation-in-time radix-2 FFT
    let l2 = 1;
    for (let l = 0; (1 << l) < n; l++) {
      let l1 = l2;
      l2 <<= 1;
      let u1 = 1.0;
      let u2 = 0.0;
      let w1 = Math.cos(Math.PI / l1);
      let w2 = -Math.sin(Math.PI / l1);
      for (let j = 0; j < l1; j++) {
        for (let i = j; i < n; i += l2) {
          let i1 = i + l1;
          let t1 = u1 * real[i1] - u2 * imag[i1];
          let t2 = u1 * imag[i1] + u2 * real[i1];
          real[i1] = real[i] - t1;
          imag[i1] = imag[i] - t2;
          real[i] += t1;
          imag[i] += t2;
        }
        let z = u1 * w1 - u2 * w2;
        u2 = u1 * w2 + u2 * w1;
        u1 = z;
      }
    }

    const psd = [];
    for (let i = 0; i < n; i++) {
      psd.push((real[i] * real[i] + imag[i] * imag[i]) / n);
    }
    return psd;
  }

  calculatePsd(channelData) {
    // Apply Hann window
    const windowedData = channelData.map((val, i) => {
      return val * 0.5 * (1 - Math.cos(2 * Math.PI * i / (channelData.length - 1)));
    });

    return this.fftPower(windowedData);
  }

  getBandPower(psd, lowFreq, highFreq) {
    let power = 0.0;
    const freqResolution = this.sampleRate / this.bufferSize;
    
    const startIndex = Math.floor(lowFreq / freqResolution);
    const endIndex = Math.ceil(highFreq / freqResolution);
    
    for (let i = startIndex; i <= endIndex && i < psd.length; i++) {
      power += psd[i];
    }
    return power;
  }

  processBuffer(multiChannelData) {
    if (!multiChannelData || multiChannelData.length === 0) return 0.0;

    let totalTheta = 0.0;
    let totalAlpha = 0.0;
    let totalBeta = 0.0;

    for (const channelData of multiChannelData) {
      if (channelData.length !== this.bufferSize) continue;

      const psd = this.calculatePsd(channelData);
      totalTheta += this.getBandPower(psd, 4.0, 8.0);
      totalAlpha += this.getBandPower(psd, 8.0, 13.0);
      totalBeta += this.getBandPower(psd, 13.0, 30.0);
    }

    // Average across channels
    const numChannels = multiChannelData.length;
    const theta = totalTheta / numChannels;
    const alpha = totalAlpha / numChannels;
    const beta = totalBeta / numChannels;

    // Engagement Index (EI)
    let currentEi = 0.0;
    if ((alpha + theta) > 0) {
      currentEi = beta / (alpha + theta);
    }

    // 1. Calibration Phase
    if (this.isCalibrating) {
      this.calibrationBuffer.push(currentEi);
      this.calibrationSeconds++;
      
      if (this.calibrationSeconds >= this.maxCalibrationSeconds) {
        this.isCalibrating = false;
        const sum = this.calibrationBuffer.reduce((a, b) => a + b, 0);
        this.baseline = sum / this.calibrationBuffer.length;
        this.ema = this.baseline;
      }
      return 0.0;
    }

    // 2. Post-Calibration Phase: Apply EMA Smoothing
    this.ema = (currentEi * this.smoothingFactor) + (this.ema * (1 - this.smoothingFactor));

    // 3. Normalize
    const eiNorm = this.ema / this.baseline;

    // 4. Update Min/Max
    if (eiNorm < this.minEi) this.minEi = eiNorm;
    if (eiNorm > this.maxEi) this.maxEi = eiNorm;

    // 5. Scale to 0-100
    if (this.maxEi === this.minEi) return 50.0;
    
    const focusIndex = 100 * ((eiNorm - this.minEi) / (this.maxEi - this.minEi));
    
    return Math.max(0.0, Math.min(100.0, focusIndex));
  }

  reset() {
    this.isCalibrating = true;
    this.calibrationBuffer = [];
    this.calibrationSeconds = 0;
    this.minEi = Number.MAX_VALUE;
    this.maxEi = -Number.MAX_VALUE;
    this.ema = 0.0;
  }
}
