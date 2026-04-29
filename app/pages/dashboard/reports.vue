<template>
   <div class="reports-page">
      <div class="flex justify-between items-center w-full mb-4">
         <h1 class="text-2xl font-bold">My Reports</h1>
         <UButton v-if="reports.length > 0" icon="i-lucide-refresh-cw" color="gray" variant="ghost" @click="refresh">
            Refresh
         </UButton>
      </div>

      <div v-if="pending" class="flex justify-center p-8">
         <UIcon name="i-lucide-loader-2" class="w-8 h-8 animate-spin" />
      </div>

      <div v-else-if="reports.length > 0" class="reports-container">
         <UTable :rows="reports" :columns="columns" class="w-full bg-white dark:bg-[#1a1d27] border border-gray-200 dark:border-[#2d3040] rounded-xl shadow-sm">
            <template #sessionName-data="{ row }">
               <span class="font-medium">{{ row.sessionName || 'Unknown Session' }}</span>
            </template>
            <template #type-data="{ row }">
               <UBadge color="blue" variant="subtle">{{ row.type.replace('_', ' ').toUpperCase() }}</UBadge>
            </template>
            <template #createdAt-data="{ row }">
               {{ new Date(row.createdAt).toLocaleDateString() }}
            </template>
            <template #actions-data="{ row }">
               <UButton color="primary" variant="soft" size="sm" icon="i-lucide-download" @click="downloadReport(row.id)">
                  Download
               </UButton>
            </template>
         </UTable>
      </div>

      <template v-else>
         <!-- No Reports Empty State -->
         <ReportsEmptyState @create-session="navigateTo('/dashboard/sessions/create')"
            @learn-more="navigateTo('/dashboard/help')" />

         <!-- Getting Started Banner -->
         <ReportsGettingStarted />

         <!-- What You'll Get -->
         <ReportsWhatYouGet />
      </template>
   </div>
</template>

<script setup lang="ts">
import { reportsApi } from '~/services/reports'

definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Reports | Haze Clue'
})

const { data: reportsData, pending, refresh } = useAsyncData('reportsList', () => reportsApi.list(1, 50))
const reports = computed(() => reportsData.value?.data || [])

const columns = [
   { key: 'sessionName', label: 'Session Name' },
   { key: 'type', label: 'Report Type' },
   { key: 'createdAt', label: 'Date Generated' },
   { key: 'actions', label: 'Actions' }
]

const toast = useToast()
const downloadReport = async (id: string) => {
   try {
      // It returns JSON mock right now, ideally returns Blob
      const res = await reportsApi.export(id)
      toast.add({ title: 'Report download started', description: res.message || 'Downloading...', color: 'green' })
   } catch (e: any) {
      toast.add({ title: 'Failed to download report', color: 'red' })
   }
}
</script>

<style scoped>
.reports-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

@media (max-width: 768px) {
   .reports-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
