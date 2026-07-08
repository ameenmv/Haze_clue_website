import { describe, it, expect, beforeEach } from 'vitest';
import { FocusCalculator } from './focusCalculator';

describe('FocusCalculator (JS)', () => {
  let calculator;

  beforeEach(() => {
    calculator = new FocusCalculator();
  });

  it('should initialize in calibrating state', () => {
    expect(calculator.isCalibrating).toBe(true);
  });

  it('should return 0.0 during calibration phase', () => {
    const dummyBuffer = Array(14).fill(Array(256).fill(0.0));
    const result = calculator.processBuffer(dummyBuffer);
    expect(result).toBe(0.0);
  });

  it('should finish calibration after maxCalibrationSeconds and output a score', () => {
    // Dummy buffer with non-zero power
    const dummyBuffer = Array(14).fill(
      Array.from({ length: 256 }, (_, i) => i % 10)
    );

    for (let i = 0; i < calculator.maxCalibrationSeconds; i++) {
      expect(calculator.isCalibrating).toBe(true);
      const result = calculator.processBuffer(dummyBuffer);
      expect(result).toBe(0.0);
    }

    // Post calibration
    expect(calculator.isCalibrating).toBe(false);
    const score = calculator.processBuffer(dummyBuffer);
    
    // Check if score is bounded correctly
    expect(score).toBeGreaterThanOrEqual(0.0);
    expect(score).toBeLessThanOrEqual(100.0);
  });

  it('should return correct length PSD array (256 bins for native FFT)', () => {
    const dummyChannel = Array(256).fill(1.0);
    const psd = calculator.calculatePsd(dummyChannel);
    expect(psd.length).toBe(256);
  });

  it('should reset properly', () => {
    calculator.isCalibrating = false;
    calculator.reset();
    expect(calculator.isCalibrating).toBe(true);
  });
});
