<template>
   <section class="recent-activity">
      <div class="recent-activity__header">
         <div>
            <h3 class="recent-activity__title">{{ $t('dashboard.recentActivity.title') }}</h3>
            <p class="recent-activity__subtitle">{{ $t('dashboard.recentActivity.subtitle') }}</p>
         </div>
      </div>
      <div class="recent-activity__body">
         <slot>
            <EmptyState icon="lucide:inbox" :title="$t('dashboard.recentActivity.empty')"
               :description="$t('dashboard.recentActivity.emptyHint')" />
         </slot>
      </div>
   </section>
</template>

<style scoped>
.recent-activity {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .recent-activity {
   background: #1a1d27;
   border-color: #2d3040;
}

.recent-activity__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .recent-activity__title {
   color: #F3F4F6;
}

.recent-activity__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .recent-activity__subtitle {
   color: #9CA3AF;
}

.recent-activity__body {
   min-height: 200px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
