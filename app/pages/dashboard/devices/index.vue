<template>
   <div class="devices-page">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-center w-full mb-6 gap-4">
        <h1 class="text-2xl font-bold">{{ $t('dashboard.devices.myDevices') }}</h1>
        
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <UInput
            v-model="searchInput"
            icon="i-lucide-search"
            placeholder="Search devices..."
            class="w-full sm:w-64"
          />
          <UButton icon="i-lucide-plus" color="primary" @click="navigateTo('/dashboard/devices/add')">
            {{ $t('dashboard.devices.addDevice') }}
          </UButton>
        </div>
      </div>

      <!-- Device Table -->
      <UCard v-if="devices.length > 0 || searchInput" class="w-full">
        <UTable
          :columns="columns"
          :data="devices"
          :loading="pending"
        >
          <template #status-cell="{ row }">
            <UBadge :color="(row.original || row).status === 'connected' ? 'success' : 'error'" variant="soft" class="capitalize">
              {{ (row.original || row).status }}
            </UBadge>
          </template>
          
          <template #actions-cell="{ row }">
            <div class="flex justify-start">
              <UButton color="error" variant="soft" icon="i-lucide-trash-2" size="sm" @click="handleRemove((row.original || row).id)">
                {{ $t('dashboard.devices.remove') }}
              </UButton>
            </div>
          </template>
        </UTable>
        
        <div class="flex justify-end mt-4 border-t border-gray-200 dark:border-gray-800 pt-4" v-if="total > limit">
          <UPagination
            v-model="page"
            :page-count="limit"
            :total="total"
          />
        </div>
      </UCard>

      <!-- No Devices Empty State -->
      <DeviceEmptyState v-else @add-device="navigateTo('/dashboard/devices/add')" />

      <!-- How to Connect -->
      <DeviceHowToConnect v-if="devices.length === 0" />

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

const page = ref(1)
const limit = ref(10)
const searchInput = ref('')
const debouncedSearch = ref('')

let searchTimeout: any = null
watch(searchInput, (newVal) => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearch.value = newVal
    page.value = 1
  }, 500)
})

const { data: devicesResponse, pending, refresh } = useAsyncData(
  'devices-list',
  () => devicesApi.list(page.value, limit.value, debouncedSearch.value),
  { watch: [page, debouncedSearch] }
)

const devices = computed(() => {
  if (Array.isArray(devicesResponse.value)) return devicesResponse.value
  return devicesResponse.value?.data || []
})
const total = computed(() => {
  if (Array.isArray(devicesResponse.value)) return devicesResponse.value.length
  return devicesResponse.value?.meta?.total || 0
})

const columns = [
  { accessorKey: 'name', header: 'Name', id: 'name' },
  { accessorKey: 'type', header: 'Type', id: 'type' },
  { accessorKey: 'serialNumber', header: 'Serial Number', id: 'serialNumber' },
  { accessorKey: 'status', header: 'Status', id: 'status' },
  { accessorKey: 'actions', header: 'Actions', id: 'actions' }
]

// Removed Modal state and logic
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
