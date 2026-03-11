<template>
   <section class="what-you-get">
      <h3 class="what-you-get__title">{{ $t('dashboard.reports.whatYouGet.title') }}</h3>

      <div class="what-you-get__grid">
         <div v-for="card in cards" :key="card.titleKey" class="what-you-get__card">
            <div class="what-you-get__card-header">
               <div class="what-you-get__card-icon" :style="{ background: card.iconBg }">
                  <UIcon :name="card.icon" class="w-5 h-5" :style="{ color: card.iconColor }" />
               </div>
               <h4 class="what-you-get__card-title">{{ $t(card.titleKey) }}</h4>
            </div>
            <p class="what-you-get__card-desc">{{ $t(card.descKey) }}</p>
            <div class="what-you-get__card-preview">
               <UIcon :name="card.previewIcon" class="what-you-get__card-preview-icon" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const cards = [
   {
      icon: 'lucide:trending-up',
      iconBg: 'rgba(36, 107, 253, 0.1)',
      iconColor: '#6C4EFD',
      titleKey: 'dashboard.reports.whatYouGet.attentionTrends.title',
      descKey: 'dashboard.reports.whatYouGet.attentionTrends.description',
      previewIcon: 'lucide:bar-chart-3'
   },
   {
      icon: 'lucide:users',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      titleKey: 'dashboard.reports.whatYouGet.studentPerformance.title',
      descKey: 'dashboard.reports.whatYouGet.studentPerformance.description',
      previewIcon: 'lucide:brain'
   },
   {
      icon: 'lucide:lightbulb',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      titleKey: 'dashboard.reports.whatYouGet.insights.title',
      descKey: 'dashboard.reports.whatYouGet.insights.description',
      previewIcon: 'lucide:sparkles'
   },
   {
      icon: 'lucide:timer',
      iconBg: '#FFEDD5',
      iconColor: '#EA580C',
      titleKey: 'dashboard.reports.whatYouGet.sessionTimeline.title',
      descKey: 'dashboard.reports.whatYouGet.sessionTimeline.description',
      previewIcon: 'lucide:align-justify'
   }
]
</script>

<style scoped>
.what-you-get__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0 0 16px;
}

:root.dark .what-you-get__title {
   color: #F3F4F6;
}

.what-you-get__grid {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 24px;
}

.what-you-get__card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 16px;
}

:root.dark .what-you-get__card {
   background: #1a1d27;
   border-color: #2d3040;
}

.what-you-get__card-header {
   display: flex;
   align-items: center;
   gap: 12px;
}

.what-you-get__card-icon {
   width: 40px;
   height: 40px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
}

.what-you-get__card-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .what-you-get__card-title {
   color: #F3F4F6;
}

.what-you-get__card-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #4B5563;
   margin: 0;
}

:root.dark .what-you-get__card-desc {
   color: #9CA3AF;
}

.what-you-get__card-preview {
   background: #F9FAFB;
   border-radius: 8px;
   padding: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
}

:root.dark .what-you-get__card-preview {
   background: #1f2231;
}

.what-you-get__card-preview-icon {
   width: 60px;
   height: 60px;
   color: #D1D5DB;
}

:root.dark .what-you-get__card-preview-icon {
   color: #4B5563;
}

@media (max-width: 768px) {
   .what-you-get__grid {
      grid-template-columns: 1fr;
   }
}
</style>
