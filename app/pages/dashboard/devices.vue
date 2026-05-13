<template>
   <div class="devices-page">
      <!-- Header -->
      <div class="flex justify-between items-center w-full mb-4">
        <h1 class="text-2xl font-bold">{{ $t('dashboard.devices.myDevices') }}</h1>
        <UButton v-if="devices.length > 0" icon="i-lucide-plus" color="primary" @click="isAddModalOpen = true">
          {{ $t('dashboard.devices.addDevice') }}
        </UButton>
      </div>

      <!-- Device List / Grid -->
      <div v-if="pending" class="flex justify-center p-8">
        <UIcon name="i-lucide-loader-2" class="w-8 h-8 animate-spin" />
      </div>

      <div v-else-if="devices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="device in devices" :key="device.id" class="hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:bg-[#1f2230] border-transparent dark:border-[#2d3040]">
          <div class="flex justify-between items-start mb-4 gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary shrink-0">
                <UIcon name="i-lucide-cpu" class="w-6 h-6" />
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-lg dark:text-gray-100 truncate" :title="device.name">{{ device.name }}</h3>
                <span class="text-sm font-medium text-gray-500">{{ device.type }}</span>
              </div>
            </div>
            <UBadge :color="device.status === 'connected' ? 'green' : 'red'" variant="soft" class="capitalize font-semibold tracking-wide shrink-0">
              {{ device.status }}
            </UBadge>
          </div>
          
          <div class="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-[#1a1d27] rounded-lg border border-gray-100 dark:border-[#2d3040] mb-6">
            <UIcon name="i-lucide-hash" class="w-4 h-4 text-gray-400" />
            <span class="text-sm font-mono text-gray-600 dark:text-gray-300">{{ device.serialNumber }}</span>
          </div>

          <template #footer>
            <div class="flex justify-end w-full">
              <UButton color="red" variant="soft" icon="i-lucide-trash-2" size="sm" @click="handleRemove(device.id)">
                {{ $t('dashboard.devices.remove') }}
              </UButton>
            </div>
          </template>
        </UCard>
      </div>

      <!-- No Devices Empty State -->
      <DeviceEmptyState v-else @add-device="isAddModalOpen = true" />

      <!-- How to Connect -->
      <DeviceHowToConnect v-if="devices.length === 0" />

      <!-- Setup Guide + Need Help -->
      <DeviceHelpCards @view-guide="navigateTo('/dashboard/help')" @contact-support="navigateTo('/dashboard/help')" />

      <UModal v-model:open="isAddModalOpen">
        <template #content>
          <UCard class="w-full max-w-md mx-auto overflow-hidden bg-white/95 dark:bg-[#1a1d27]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-2xl">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ $t('dashboard.devices.modal.title') }}</h3>
                <UButton color="gray" variant="ghost" icon="i-lucide-x" class="-my-1" @click="isAddModalOpen = false" />
              </div>
              <p class="text-sm text-gray-500 mt-1">{{ $t('dashboard.devices.modal.description') }}</p>
            </template>

            <form @submit.prevent="submitAddDevice" class="flex flex-col gap-5 p-2">
              <UFormField :label="$t('dashboard.devices.modal.deviceName')" name="name" required class="w-full">
                <UInput v-model="newDevice.name" :placeholder="$t('dashboard.devices.modal.deviceNamePlaceholder')" icon="i-lucide-cpu" class="w-full" size="lg" />
              </UFormField>
              
              <UFormField :label="$t('dashboard.devices.modal.deviceType')" name="type" required class="w-full">
                <USelect v-model="newDevice.type" :options="['EEG', 'BCI']" icon="i-lucide-activity" class="w-full" size="lg" />
              </UFormField>
              
              <UFormField :label="$t('dashboard.devices.modal.serialNumber')" name="serialNumber" required class="w-full">
                <UInput v-model="newDevice.serialNumber" :placeholder="$t('dashboard.devices.modal.serialNumberPlaceholder')" icon="i-lucide-key" class="w-full" size="lg" />
              </UFormField>

              <div class="flex justify-end gap-3 mt-6">
                <UButton color="gray" variant="soft" size="lg" @click="isAddModalOpen = false">{{ $t('dashboard.devices.modal.cancel') }}</UButton>
                <UButton type="submit" color="primary" size="lg" :loading="isSubmitting" icon="i-lucide-plus">{{ $t('dashboard.devices.modal.addBtn') }}</UButton>
              </div>
            </form>
          </UCard>
        </template>
      </UModal>
   </div>
</template>

<script setup lang="ts">
import { devicesApi } from '~/services/devices'
import Swal from 'sweetalert2'

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
  const isDark = document.documentElement.classList.contains('dark')
  const result = await Swal.fire({
     title: 'Are you sure?',
     text: "You want to remove this device?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#DC2626',
     cancelButtonColor: '#6B7280',
     confirmButtonText: 'Yes, remove it!',
     background: isDark ? '#1a1d27' : '#fff',
     color: isDark ? '#fff' : '#000',
  })

  if (!result.isConfirmed) return

  try {
    await devicesApi.remove(id)
    Swal.fire({
       title: 'Removed!',
       text: 'The device has been removed.',
       icon: 'success',
       confirmButtonColor: '#6C4EFD',
       background: isDark ? '#1a1d27' : '#fff',
       color: isDark ? '#fff' : '#000',
    })
    await refresh()
  } catch (err: any) {
    Swal.fire({
       title: 'Error!',
       text: err.message || 'Failed to remove device.',
       icon: 'error',
       confirmButtonColor: '#6C4EFD',
       background: isDark ? '#1a1d27' : '#fff',
       color: isDark ? '#fff' : '#000',
    })
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
