<template>
   <div class="dashboard-page">
      <!-- Welcome Banner -->
      <WelcomeBanner @create-session="navigateTo('/dashboard/sessions/create')"
         @view-guide="navigateTo('/dashboard/help')" />

      <!-- Stats Grid -->
      <div v-if="pending" class="dashboard-page__stats">
         <USkeleton v-for="i in 4" :key="i" class="h-[124px] w-full rounded-[12px]" />
      </div>
      <div v-else class="dashboard-page__stats">
         <StatCard v-for="stat in stats" :key="stat.labelKey" :icon="stat.icon" :icon-bg="stat.iconBg"
            :icon-color="stat.iconColor" :label="$t(stat.labelKey)" :value="stat.value" :hint="$t(stat.hintKey)" />
      </div>

      <!-- Charts -->
      <div class="dashboard-page__charts">
         <ChartCard :title="$t('dashboard.charts.attentionTrends')"
            :subtitle="$t('dashboard.charts.attentionTrendsSubtitle')" empty-icon="lucide:trending-up"
            :empty-title="$t('dashboard.charts.noData')" :empty-description="$t('dashboard.charts.startToSeeTrends')">
            <div v-if="pending" class="w-full flex-1 flex flex-col gap-4 p-4">
               <USkeleton class="h-4 w-1/3" />
               <USkeleton class="h-full w-full" />
            </div>
            <div v-else-if="statsData?.attentionTrends?.length" class="w-full h-[250px] flex items-end gap-2 p-4">
               <!-- Basic CSS-based bar chart for simplicity since we don't have vue-chartjs wrapper setup here -->
               <div v-for="(point, i) in statsData.attentionTrends" :key="i" class="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div class="w-full rounded-t-md bg-[#6C4EFD] transition-all" :style="{ height: `${point.avgAttention}%` }" />
                  <span class="text-xs text-gray-500">{{ point.date.substring(5) }}</span>
               </div>
            </div>
         </ChartCard>

         <ChartCard :title="$t('dashboard.charts.attentionDistribution')"
            :subtitle="$t('dashboard.charts.attentionDistributionSubtitle')" empty-icon="lucide:pie-chart"
            :empty-title="$t('dashboard.charts.noData')"
            :empty-description="$t('dashboard.charts.startToSeeDistribution')">
            <div v-if="pending" class="w-full h-[250px] flex items-center justify-center p-4">
               <USkeleton class="h-[180px] w-[180px] rounded-full" />
            </div>
            <div v-else-if="statsData?.attentionDistribution" class="w-full flex flex-col gap-4 p-6">
               <div class="flex items-center gap-4">
                  <div class="w-24 font-medium text-sm">High ({{ statsData.attentionDistribution.high }}%)</div>
                  <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                     <div class="h-full bg-green-500" :style="{ width: `${statsData.attentionDistribution.high}%` }" />
                  </div>
               </div>
               <div class="flex items-center gap-4">
                  <div class="w-24 font-medium text-sm">Medium ({{ statsData.attentionDistribution.medium }}%)</div>
                  <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                     <div class="h-full bg-orange-400" :style="{ width: `${statsData.attentionDistribution.medium}%` }" />
                  </div>
               </div>
               <div class="flex items-center gap-4">
                  <div class="w-24 font-medium text-sm">Low ({{ statsData.attentionDistribution.low }}%)</div>
                  <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                     <div class="h-full bg-red-500" :style="{ width: `${statsData.attentionDistribution.low}%` }" />
                  </div>
               </div>
            </div>
         </ChartCard>
      </div>

      <!-- Quick Actions -->
      <section class="dashboard-page__section">
         <h3 class="dashboard-page__section-title">{{ $t('dashboard.quickActions.title') }}</h3>
         <div class="dashboard-page__actions">
            <QuickActionCard v-for="action in quickActions" :key="action.titleKey" :icon="action.icon"
               :icon-bg="action.iconBg" :icon-color="action.iconColor" :title="$t(action.titleKey)"
               :description="$t(action.descKey)" :link-text="$t(action.linkKey)" :to="action.to" />
         </div>
      </section>

      <!-- Recent Activity -->
      <RecentActivity>
         <div v-if="pending" class="w-full flex flex-col gap-4">
            <USkeleton class="h-16 w-full rounded-lg" v-for="i in 3" :key="i" />
         </div>
         <div v-else-if="statsData?.recentActivity?.length" class="w-full flex flex-col gap-3">
            <div v-for="activity in statsData.recentActivity" :key="activity.id" class="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#252836] rounded-xl border border-gray-100 dark:border-[#2d3040]">
               <div class="flex gap-4 items-center">
                  <div class="w-10 h-10 rounded-full bg-[#E0E7FF] dark:bg-[#312e81] flex items-center justify-center text-[#4F46E5] dark:text-[#818cf8]">
                     <UIcon name="lucide:activity" class="w-5 h-5" />
                  </div>
                  <div class="flex flex-col">
                     <span class="font-semibold text-[15px] dark:text-gray-100">{{ activity.title }}</span>
                     <span class="text-sm text-gray-500">{{ activity.description }}</span>
                  </div>
               </div>
               <span class="text-xs text-gray-400">{{ new Date(activity.createdAt).toLocaleDateString() }}</span>
            </div>
         </div>
      </RecentActivity>
   </div>
</template>

<script setup lang="ts">
import { dashboardApi } from '~/services/dashboard'

definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Dashboard | Haze Clue'
})

// ─── Fetch real stats from API ─────────────────────
const { data: statsData, pending } = await useAppFetch('dashboard-stats', () => dashboardApi.getStats())

// ─── Stats Data (dynamic from API) ─────────────────
const stats = computed(() => {
   const s = statsData.value as any
   return [
      {
         icon: 'lucide:cpu',
         iconBg: '#DBDBFE',
         iconColor: '#6C4EFD',
         labelKey: 'dashboard.stats.connectedDevices',
         value: s?.connectedDevices ?? 0,
         hintKey: s?.connectedDevices ? 'dashboard.stats.connectedDevicesHint' : 'dashboard.stats.noDevices'
      },
      {
         icon: 'lucide:play-circle',
         iconBg: '#DCFCE7',
         iconColor: '#16A34A',
         labelKey: 'dashboard.stats.activeSessions',
         value: s?.activeSessions ?? 0,
         hintKey: s?.activeSessions ? 'dashboard.stats.activeSessionsHint' : 'dashboard.stats.startSession'
      },
      {
         icon: 'lucide:brain',
         iconBg: '#DBDBFE',
         iconColor: '#6C4EFD',
         labelKey: 'dashboard.stats.avgAttention',
         value: s?.avgAttention != null ? `${s.avgAttention}%` : '--',
         hintKey: 'dashboard.stats.dataNotAvailable'
      },
      {
         icon: 'lucide:bar-chart-3',
         iconBg: '#FFEDD5',
         iconColor: '#EA580C',
         labelKey: 'dashboard.stats.reportsGenerated',
         value: s?.reportsGenerated ?? 0,
         hintKey: s?.reportsGenerated ? 'dashboard.stats.reportsHint' : 'dashboard.stats.noReports'
      }
   ]
})

// ─── Quick Actions Data (i18n keys) ────────────────
const quickActions = [
   {
      icon: 'lucide:plus',
      iconBg: '#DBDBFE',
      iconColor: '#6C4EFD',
      titleKey: 'dashboard.quickActions.createSession.title',
      descKey: 'dashboard.quickActions.createSession.description',
      linkKey: 'dashboard.quickActions.createSession.link',
      to: '/dashboard/sessions/create'
   },
   {
      icon: 'lucide:wifi',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      titleKey: 'dashboard.quickActions.addDevices.title',
      descKey: 'dashboard.quickActions.addDevices.description',
      linkKey: 'dashboard.quickActions.addDevices.link',
      to: '/dashboard/devices'
   },
   {
      icon: 'lucide:book-open',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      titleKey: 'dashboard.quickActions.viewTutorial.title',
      descKey: 'dashboard.quickActions.viewTutorial.description',
      linkKey: 'dashboard.quickActions.viewTutorial.link',
      to: '/dashboard/help'
   }
]
</script>

<style scoped>
.dashboard-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

.dashboard-page__stats {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 24px;
}

.dashboard-page__charts {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 32px;
}

.dashboard-page__section {
   display: flex;
   flex-direction: column;
   gap: 16px;
}

.dashboard-page__section-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .dashboard-page__section-title {
   color: #F3F4F6;
}

.dashboard-page__actions {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px;
}

@media (max-width: 1200px) {
   .dashboard-page__stats {
      grid-template-columns: repeat(2, 1fr);
   }

   .dashboard-page__charts {
      grid-template-columns: 1fr;
   }

   .dashboard-page__actions {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 768px) {
   .dashboard-page {
      padding: 16px;
      gap: 24px;
   }

   .dashboard-page__stats {
      grid-template-columns: 1fr;
   }

   .dashboard-page__actions {
      grid-template-columns: 1fr;
   }
}
</style>
