export const useBluetooth = () => {
  const isConnecting = ref(false);
  const isConnected = ref(false);
  const device = ref<BluetoothDevice | null>(null);
  const error = ref<string | null>(null);

  // Use the telemetry endpoint from the backend
  const { $api } = useNuxtApp(); // Assuming an api plugin or we can just use $fetch
  const config = useRuntimeConfig();
  const backendUrl = config.public.apiBase || 'http://localhost:3001';

  // Typical NeuroSky/Muse/Custom EEG Service UUID (placeholder, change based on actual hardware)
  const EEG_SERVICE_UUID = '0000ffe0-0000-1000-8000-00805f9b34fb'; 
  const EEG_CHARACTERISTIC_UUID = '0000ffe1-0000-1000-8000-00805f9b34fb';

  const connect = async () => {
    if (!navigator.bluetooth) {
      error.value = 'Web Bluetooth API is not supported in this browser.';
      return;
    }

    try {
      isConnecting.value = true;
      error.value = null;

      // Request the device
      const btDevice = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [EEG_SERVICE_UUID]
      });

      device.value = btDevice;

      // Connect to GATT Server
      const server = await btDevice.gatt?.connect();
      isConnected.value = true;

      // Listen for disconnection
      btDevice.addEventListener('gattserverdisconnected', onDisconnected);

      // Attempt to start notifications if the service exists
      try {
        const service = await server?.getPrimaryService(EEG_SERVICE_UUID);
        const characteristic = await service?.getCharacteristic(EEG_CHARACTERISTIC_UUID);
        
        await characteristic?.startNotifications();
        characteristic?.addEventListener('characteristicvaluechanged', handleData);
      } catch (e) {
        console.warn('Could not find standard EEG service. Device connected but not streaming automatically.', e);
      }
    } catch (e: any) {
      error.value = e.message || 'Failed to connect to Bluetooth device.';
      isConnected.value = false;
    } finally {
      isConnecting.value = false;
    }
  };

  const onDisconnected = () => {
    isConnected.value = false;
    device.value = null;
    console.log('Bluetooth Device disconnected');
  };

  const disconnect = () => {
    if (device.value && device.value.gatt?.connected) {
      device.value.gatt.disconnect();
    }
  };

  // Handle incoming data from the headset
  const handleData = async (event: any) => {
    const value = event.target.value;
    // Parse the raw bytes into your EEG window structure (14x512)
    // This is hardware-dependent. For now, we simulate a payload:
    
    // Example: parse value to get attention, meditation OR raw window
    // const parsedData = parseHardwareData(value);
    
    // Instead of parsing in JS, send raw payload to NestJS backend Telemetry API
    // We will simulate sending a dummy raw window to trigger the AI backend
    
    sendTelemetry({
      deviceId: device.value?.id || 'WEB_BT_DEVICE',
      attention: 50, // default if raw window fails
      rawEegWindow: generateDummyWindow() // Send raw window to let FastAPI predict
    });
  };

  // Send data to NestJS which forwards to FastAPI
  const sendTelemetry = async (payload: any) => {
    try {
      await $fetch(`${backendUrl}/api/v1/telemetry`, {
        method: 'POST',
        body: payload
      });
    } catch (e) {
      console.error('Failed to send telemetry:', e);
    }
  };

  // Helper to simulate a 14x512 matrix for testing the AI pipeline
  const generateDummyWindow = () => {
    const window = [];
    for (let i = 0; i < 14; i++) {
      const channel = [];
      for (let j = 0; j < 512; j++) {
        channel.push(Math.random());
      }
      window.push(channel);
    }
    return window;
  };

  return {
    isConnecting,
    isConnected,
    device,
    error,
    connect,
    disconnect,
    sendTelemetry // exposed for manual testing
  };
};
