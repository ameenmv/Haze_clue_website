<template>
   <div class="devices-page">
      <!-- Header -->
      <div class="flex justify-between items-center w-full mb-4">
        <h1 class="text-2xl font-bold">My Devices</h1>
        <UButton v-if="devices.length > 0" icon="i-lucide-plus" color="primary" @click="isAddModalOpen = true">
          Add Device
        </UButton>
      </div>

      <!-- Device List / Grid -->
      <div v-if="pending" class="flex justify-center p-8">
        <UIcon name="i-lucide-loader-2" class="w-8 h-8 animate-spin" />
      </div>

      <div v-else-if="devices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="device in devices" :key="device.id" class="device-card p-6 bg-white dark:bg-[#1a1d27] border border-gray-200 dark:border-[#2d3040] rounded-xl shadow-sm flex flex-col gap-4">
          <div class="flex justify-between items-start">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary">
                <UIcon name="i-lucide-cpu" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">{{ device.name }}</h3>
                <span class="text-sm text-gray-500">{{ device.type }}</span>
              </div>
            </div>
            <UBadge :color="device.status === 'connected' ? 'green' : 'gray'" variant="subtle">
              {{ device.status }}
            </UBadge>
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <strong>SN:</strong> {{ device.serialNumber }}
          </div>
          <div class="mt-auto pt-4 border-t border-gray-100 dark:border-[#2d3040] flex justify-end">
            <UButton color="red" variant="ghost" icon="i-lucide-trash-2" size="sm" @click="handleRemove(device.id)">
              Remove
            </UButton>
          </div>
        </div>
      </div>

      <!-- No Devices Empty State -->
      <DeviceEmptyState v-else @add-device="isAddModalOpen = true" />

      <!-- How to Connect -->
      <DeviceHowToConnect v-if="devices.length === 0" />

      <!-- Setup Guide + Need Help -->
      <DeviceHelpCards @view-guide="navigateTo('/dashboard/help')" @contact-support="navigateTo('/dashboard/help')" />

      <!-- Add Device Modal -->
      <UModal v-model="isAddModalOpen">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <h3 class="text-lg font-semibold">Add New Device</h3>
          </template>

          <form @submit.prevent="submitAddDevice" class="flex flex-col gap-4">
            <UFormGroup label="Device Name" name="name" required>
              <UInput v-model="newDevice.name" placeholder="e.g. My NeuroSky MindWave" />
            </UFormGroup>
            
            <UFormGroup label="Device Type" name="type" required>
              <USelect v-model="newDevice.type" :options="['EEG', 'BCI']" />
            </UFormGroup>
            
            <UFormGroup label="Serial Number" name="serialNumber" required>
              <UInput v-model="newDevice.serialNumber" placeholder="e.g. SN-123456789" />
            </UFormGroup>

            <div class="flex justify-end gap-3 mt-4">
              <UButton color="gray" variant="ghost" @click="isAddModalOpen = false">Cancel</UButton>
              <UButton type="submit" color="primary" :loading="isSubmitting">Add Device</UButton>
            </div>
          </form>
        </UCard>
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
   title: 'Device Management | Haze Clue'
})

const toast = useToast()

const { data: devicesData, pending, refresh } = useAsyncData('devices', () => devicesApi.list(), { default: () => [] })

const devices = computed(() => devicesData.value || [])

// Modal state
const isAddModalOpen = ref(false)
const isSubmitting = ref(false)
const newDevice = reactive({
  name: '',
  type: 'EEG' as 'EEG' | 'BCI',
  serialNumber: ''
})

const submitAddDevice = async () => {
  if (!newDevice.name || !newDevice.serialNumber) {
    toast.add({ title: 'Validation Error', description: 'Name and Serial Number are required', color: 'red' })
    return
  }
  isSubmitting.value = true
  try {
    await devicesApi.create({ ...newDevice })
    toast.add({ title: 'Device added successfully', color: 'green' })
    isAddModalOpen.value = false
    newDevice.name = ''
    newDevice.serialNumber = ''
    newDevice.type = 'EEG'
    await refresh()
  } catch (err: any) {
    toast.add({ title: 'Error adding device', description: err.message || 'Unknown error', color: 'red' })
  } finally {
    isSubmitting.value = false
  }
}

const handleRemove = async (id: string) => {
  if (!confirm('Are you sure you want to remove this device?')) return
  try {
    await devicesApi.remove(id)
    toast.add({ title: 'Device removed', color: 'green' })
    await refresh()
  } catch (err: any) {
    toast.add({ title: 'Error removing device', description: err.message || 'Unknown error', color: 'red' })
  }
}
</script>

<style scoped>
.devices-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

@media (max-width: 768px) {
   .devices-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
