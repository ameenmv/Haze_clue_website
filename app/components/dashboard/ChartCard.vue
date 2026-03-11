<template>
   <div class="chart-card">
      <div class="chart-card__header">
         <div>
            <h3 class="chart-card__title">{{ title }}</h3>
            <p class="chart-card__subtitle">{{ subtitle }}</p>
         </div>
         <slot name="actions" />
      </div>
      <div class="chart-card__body">
         <slot>
            <EmptyState :icon="emptyIcon" :title="emptyTitle" :description="emptyDescription" />
         </slot>
      </div>
   </div>
</template>

<script setup lang="ts">
interface Props {
   title: string
   subtitle: string
   emptyIcon?: string
   emptyTitle?: string
   emptyDescription?: string
}

withDefaults(defineProps<Props>(), {
   emptyIcon: 'lucide:bar-chart-3',
   emptyTitle: 'No data available',
   emptyDescription: 'Start a session to see data'
})
</script>

<style scoped>
.chart-card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   flex: 1;
   min-width: 0;
}

:root.dark .chart-card {
   background: #1a1d27;
   border-color: #2d3040;
}

.chart-card__header {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
}

.chart-card__title {
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .chart-card__title {
   color: #F3F4F6;
}

.chart-card__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .chart-card__subtitle {
   color: #9CA3AF;
}

.chart-card__body {
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 300px;
}
</style>
