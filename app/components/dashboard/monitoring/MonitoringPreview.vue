<template>
   <section class="preview">
      <div class="preview__header">
         <div>
            <h3 class="preview__title">{{ $t('dashboard.liveMonitoring.preview.title') }}</h3>
            <p class="preview__subtitle">{{ $t('dashboard.liveMonitoring.preview.subtitle') }}</p>
         </div>
      </div>

      <!-- Stats Row -->
      <div class="preview__stats">
         <div v-for="stat in stats" :key="stat.labelKey" class="preview__stat-card">
            <div class="preview__stat-header">
               <span class="preview__stat-label">{{ $t(stat.labelKey) }}</span>
               <UIcon :name="stat.icon" class="preview__stat-icon" />
            </div>
            <p class="preview__stat-value">{{ stat.value }}</p>
            <p class="preview__stat-hint">{{ $t(stat.hintKey) }}</p>
         </div>
      </div>

      <!-- Chart Placeholder -->
      <div class="preview__chart">
         <div class="preview__chart-content">
            <UIcon name="lucide:trending-up" class="preview__chart-icon" />
            <p class="preview__chart-title">{{ $t('dashboard.liveMonitoring.preview.chartTitle') }}</p>
            <p class="preview__chart-hint">{{ $t('dashboard.liveMonitoring.preview.chartHint') }}</p>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
interface PreviewStat {
   labelKey: string
   value: string
   hintKey: string
   icon: string
}

const stats: PreviewStat[] = [
   {
      labelKey: 'dashboard.liveMonitoring.preview.classAvg',
      value: '--%',
      hintKey: 'dashboard.liveMonitoring.preview.noData',
      icon: 'lucide:brain'
   },
   {
      labelKey: 'dashboard.liveMonitoring.preview.activeDevices',
      value: '0',
      hintKey: 'dashboard.liveMonitoring.preview.outOfRegistered',
      icon: 'lucide:cpu'
   },
   {
      labelKey: 'dashboard.liveMonitoring.preview.sessionDuration',
      value: '00:00',
      hintKey: 'dashboard.liveMonitoring.preview.notStarted',
      icon: 'lucide:clock'
   },
   {
      labelKey: 'dashboard.liveMonitoring.preview.engagementLevel',
      value: '--',
      hintKey: 'dashboard.liveMonitoring.preview.noInteractions',
      icon: 'lucide:bar-chart-3'
   }
]
</script>

<style scoped>
.preview {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .preview {
   background: #1a1d27;
   border-color: #2d3040;
}

.preview__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .preview__title {
   color: #F3F4F6;
}

.preview__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .preview__subtitle {
   color: #9CA3AF;
}

/* ─── Stats ──────────────────────────────────────── */
.preview__stats {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 24px;
}

.preview__stat-card {
   background: #F9FAFB;
   border: 2px dashed #E5E7EB;
   border-radius: 8px;
   padding: 18px;
   display: flex;
   flex-direction: column;
   gap: 4px;
}

:root.dark .preview__stat-card {
   background: #1f2231;
   border-color: #2d3040;
}

.preview__stat-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.preview__stat-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
}

:root.dark .preview__stat-label {
   color: #9CA3AF;
}

.preview__stat-icon {
   width: 16px;
   height: 16px;
   color: #D1D5DB;
}

:root.dark .preview__stat-icon {
   color: #4B5563;
}

.preview__stat-value {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .preview__stat-value {
   color: #6B7280;
}

.preview__stat-hint {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .preview__stat-hint {
   color: #4B5563;
}

/* ─── Chart ──────────────────────────────────────── */
.preview__chart {
   background: #F9FAFB;
   border: 2px dashed #E5E7EB;
   border-radius: 8px;
   padding: 24px;
}

:root.dark .preview__chart {
   background: #1f2231;
   border-color: #2d3040;
}

.preview__chart-content {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 8px;
   padding: 20px;
}

.preview__chart-icon {
   width: 36px;
   height: 36px;
   color: #D1D5DB;
}

:root.dark .preview__chart-icon {
   color: #4B5563;
}

.preview__chart-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0;
}

:root.dark .preview__chart-title {
   color: #9CA3AF;
}

.preview__chart-hint {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .preview__chart-hint {
   color: #6B7280;
}

/* ─── Responsive ─────────────────────────────────── */
@media (max-width: 1200px) {
   .preview__stats {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 768px) {
   .preview__stats {
      grid-template-columns: 1fr;
   }
}
</style>
