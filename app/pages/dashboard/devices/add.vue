<template>
  <div class="add-device-page">
    <div class="flex items-center justify-between mb-8">
      <div>
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-arrow-left"
          class="-ml-2 mb-2"
          @click="navigateTo('/dashboard/devices')"
        >
          {{ $t('dashboard.devices.addDevice') }}
        </UButton>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Add New Device</h1>
        <p class="text-gray-500 mt-1">Scan your local Wi-Fi network to find nearby EEG devices.</p>
      </div>
    </div>

    <!-- Main Container -->
    <UCard class="w-full max-w-3xl mx-auto overflow-hidden bg-white/95 dark:bg-[#1a1d27]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-2xl min-h-[500px] flex flex-col items-center justify-center relative">
      
      <!-- STATE 0: Idle -->
      <div v-if="scanState === 0" class="flex flex-col items-center text-center animate-fade-in z-10 w-full max-w-sm mx-auto my-auto py-12">
        <div class="w-24 h-24 bg-primary-50 dark:bg-primary-500/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <UIcon name="i-lucide-wifi" class="w-12 h-12 text-primary-600 dark:text-primary-400" />
        </div>
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Ready to Scan</h2>
        <p class="text-gray-500 mb-8">Ensure your EEG headset is powered on and connected to the same Wi-Fi network.</p>
        <UButton color="primary" size="xl" icon="i-lucide-radar" class="w-full justify-center shadow-lg hover:scale-105 transition-transform" @click="startScan">
          Start Scanning
        </UButton>
        <UButton color="neutral" variant="ghost" size="sm" class="mt-4" @click="isManualModalOpen = true">
          Add Manually via Serial Number
        </UButton>
      </div>

      <!-- STATE 1: Scanning -->
      <div v-else-if="scanState === 1" class="flex flex-col items-center justify-center z-10 w-full py-12">
        <!-- Radar Animation -->
        <div class="relative w-64 h-64 flex items-center justify-center mb-8">
          <div class="absolute inset-0 border-2 border-primary-500/20 rounded-full animate-ping" style="animation-duration: 2s;"></div>
          <div class="absolute inset-4 border-2 border-primary-500/30 rounded-full animate-ping" style="animation-duration: 2s; animation-delay: 0.5s;"></div>
          <div class="absolute inset-8 border-2 border-primary-500/40 rounded-full animate-ping" style="animation-duration: 2s; animation-delay: 1s;"></div>
          
          <div class="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
            <div class="w-1/2 h-full bg-gradient-to-r from-transparent to-primary-500/30 origin-right animate-spin" style="animation-duration: 3s; filter: blur(4px); transform-origin: center right; margin-right: 50%;"></div>
          </div>
          
          <div class="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl">
            <UIcon name="i-lucide-radar" class="w-10 h-10 text-primary-500 animate-pulse" />
          </div>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white animate-pulse">Scanning Network...</h2>
        <p class="text-sm text-gray-500 mt-2 font-mono">Subnet: 192.168.1.x</p>
      </div>

      <!-- STATE 2 & 3: Found & Connecting -->
      <div v-else-if="scanState >= 2" class="flex flex-col items-center w-full animate-fade-in z-10 py-12">
        <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
          <UIcon name="i-lucide-check-circle-2" class="w-8 h-8" />
        </div>
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Device Found!</h2>
        <p class="text-gray-500 mb-8">1 device is available for pairing.</p>

        <!-- Device Card -->
        <div class="w-full max-w-md p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between transition-all hover:border-primary-500 dark:hover:border-primary-500 group shadow-sm">
          <div class="flex items-center gap-4">
            <div class="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
              <UIcon name="i-lucide-cpu" class="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ mockDevice.name }}</h4>
              <div class="flex items-center gap-2 text-xs text-gray-500 font-mono mt-1">
                <span>IP: {{ mockDevice.ip }}</span>
                <span>&bull;</span>
                <span class="flex items-center gap-1 text-green-500"><UIcon name="i-lucide-signal" class="w-3 h-3" /> Strong</span>
              </div>
            </div>
          </div>
          
          <UButton 
            v-if="scanState === 2"
            color="primary" 
            variant="solid" 
            @click="connectDevice"
          >
            Connect
          </UButton>
          <UButton 
            v-else-if="scanState === 3"
            color="primary" 
            variant="soft" 
            loading
          >
            Connecting...
          </UButton>
        </div>
      </div>
      
      <!-- Ambient Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 blur-[100px] pointer-events-none rounded-full" />
    </UCard>

    <!-- Manual Entry Modal -->
    <UModal v-model:open="isManualModalOpen">
      <template #content>
        <UCard class="bg-white/95 dark:bg-[#1a1d27]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-2xl">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Add Device Manually</h3>
              <UButton color="neutral" variant="ghost" icon="i-lucide-x" class="-my-1" @click="isManualModalOpen = false" />
            </div>
          </template>
          
          <form @submit.prevent="submitManualDevice" class="flex flex-col gap-5 p-2">
            <UFormField label="Device Name" name="name" required class="w-full">
              <UInput v-model="manualDevice.name" placeholder="e.g. My NeuroSky MindWave" icon="i-lucide-cpu" class="w-full" size="lg" />
            </UFormField>
            
            <UFormField label="Device Type" name="type" required class="w-full">
              <USelect v-model="manualDevice.type" :options="['EEG', 'BCI']" icon="i-lucide-activity" class="w-full" size="lg" />
            </UFormField>
            
            <UFormField label="Serial Number" name="serialNumber" required class="w-full">
              <UInput v-model="manualDevice.serialNumber" placeholder="e.g. SN-123456789" icon="i-lucide-key" class="w-full" size="lg" />
            </UFormField>

            <div class="flex justify-end gap-3 mt-6">
              <UButton color="neutral" variant="soft" size="lg" @click="isManualModalOpen = false">Cancel</UButton>
              <UButton type="submit" color="primary" size="lg" :loading="isSubmittingManual" icon="i-lucide-plus">Add Device</UButton>
            </div>
          </form>
        </UCard>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { devicesApi } from '~/services/devices'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useHead({
  title: 'Add Device | Haze Clue'
})

const { t } = useI18n()
const toast = useToast()

// 0: Idle, 1: Scanning, 2: Found, 3: Connecting
const scanState = ref(0)

const mockDevice = {
  name: 'NeuroSky MindWave - EEG',
  ip: '192.168.1.45',
  type: 'EEG',
  serialNumber: 'NW-98XF2-4A'
}

const startScan = () => {
  scanState.value = 1
  
  // Simulate network scanning delay
  setTimeout(() => {
    scanState.value = 2
  }, 4000) // 4 seconds of scanning
}

const connectDevice = async () => {
  scanState.value = 3
  
  try {
    // Simulate connection delay then API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    await devicesApi.create({
      name: mockDevice.name,
      type: mockDevice.type as 'EEG' | 'BCI',
      serialNumber: mockDevice.serialNumber
    })
    
    toast.add({
      title: 'Device connected successfully!',
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
    
    // Redirect back to devices page
    navigateTo('/dashboard/devices')
  } catch (error: any) {
    toast.add({
      title: 'Failed to connect device',
      description: error.message || 'Network error',
      color: 'error'
    })
    scanState.value = 2 // Go back to Found state
  }
}

// Manual Entry Logic
const isManualModalOpen = ref(false)
const isSubmittingManual = ref(false)
const manualDevice = reactive({
  name: '',
  type: 'EEG' as 'EEG' | 'BCI',
  serialNumber: ''
})

const submitManualDevice = async () => {
  if (!manualDevice.name || !manualDevice.serialNumber) {
    toast.add({ title: 'Validation Error', description: 'Please fill all fields', color: 'error' })
    return
  }
  
  isSubmittingManual.value = true
  try {
    await devicesApi.create({ ...manualDevice })
    toast.add({ title: 'Device added successfully', color: 'success' })
    navigateTo('/dashboard/devices')
  } catch (err: any) {
    toast.add({ title: 'Error adding device', description: err.message || 'Unknown error', color: 'error' })
  } finally {
    isSubmittingManual.value = false
  }
}
</script>

<style scoped>
.add-device-page {
  padding: 32px;
  width: 100%;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .add-device-page {
    padding: 16px;
  }
}
</style>
