<template>
   <div class="dashboard-page">
      <!-- Welcome Banner -->
      <WelcomeBanner @create-session="navigateTo('/dashboard/sessions/create')"
         @view-guide="navigateTo('/dashboard/help')" />

      <!-- Stats Grid -->
      <div class="dashboard-page__stats">
         <StatCard v-for="stat in stats" :key="stat.labelKey" :icon="stat.icon" :icon-bg="stat.iconBg"
            :icon-color="stat.iconColor" :label="$t(stat.labelKey)" :value="stat.value" :hint="$t(stat.hintKey)" />
      </div>

      <!-- Charts -->
      <div class="dashboard-page__charts">
         <ChartCard :title="$t('dashboard.charts.attentionTrends')"
            :subtitle="$t('dashboard.charts.attentionTrendsSubtitle')" empty-icon="lucide:trending-up"
            :empty-title="$t('dashboard.charts.noData')" :empty-description="$t('dashboard.charts.startToSeeTrends')" />
         <ChartCard :title="$t('dashboard.charts.attentionDistribution')"
            :subtitle="$t('dashboard.charts.attentionDistributionSubtitle')" empty-icon="lucide:pie-chart"
            :empty-title="$t('dashboard.charts.noData')"
            :empty-description="$t('dashboard.charts.startToSeeDistribution')" />
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
      <RecentActivity />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Dashboard | Haze Clue'
})

// ─── Stats Data (i18n keys) ────────────────────────
const stats = [
   {
      icon: 'lucide:cpu',
      iconBg: '#DBDBFE',
      iconColor: '#6C4EFD',
      labelKey: 'dashboard.stats.connectedDevices',
      value: 0,
      hintKey: 'dashboard.stats.noDevices'
   },
   {
      icon: 'lucide:play-circle',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      labelKey: 'dashboard.stats.activeSessions',
      value: 0,
      hintKey: 'dashboard.stats.startSession'
   },
   {
      icon: 'lucide:brain',
      iconBg: '#DBDBFE',
      iconColor: '#6C4EFD',
      labelKey: 'dashboard.stats.avgAttention',
      value: '--',
      hintKey: 'dashboard.stats.dataNotAvailable'
   },
   {
      icon: 'lucide:bar-chart-3',
      iconBg: '#FFEDD5',
      iconColor: '#EA580C',
      labelKey: 'dashboard.stats.reportsGenerated',
      value: 0,
      hintKey: 'dashboard.stats.noReports'
   }
]

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
