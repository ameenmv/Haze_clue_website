<template>
   <section class="live-stats">
      <div v-for="(card, idx) in cards" :key="idx" class="live-stats__card">
         <div class="live-stats__card-header">
            <span class="live-stats__card-label">{{ $t(card.labelKey) }}</span>
            <UIcon :name="card.icon" class="live-stats__card-icon" />
         </div>
         <span class="live-stats__card-value">{{ card.value }}</span>
         <span class="live-stats__card-sub" :style="{ color: card.subColor }">{{ $t(card.subKey) }}</span>
      </div>
   </section>
</template>

<script setup lang="ts">
const cards = [
   {
      labelKey: 'dashboard.liveSession.stats.attention',
      icon: 'lucide:brain',
      value: '82%',
      subKey: 'dashboard.liveSession.stats.attentionChange',
      subColor: '#16A34A'
   },
   {
      labelKey: 'dashboard.liveSession.stats.devices',
      icon: 'lucide:smartphone',
      value: '18',
      subKey: 'dashboard.liveSession.stats.devicesOf',
      subColor: '#4B5563'
   },
   {
      labelKey: 'dashboard.liveSession.stats.duration',
      icon: 'lucide:clock',
      value: '25:30',
      subKey: 'dashboard.liveSession.stats.remaining',
      subColor: '#4B5563'
   },
   {
      labelKey: 'dashboard.liveSession.stats.engagement',
      icon: 'lucide:trending-up',
      value: 'High',
      subKey: 'dashboard.liveSession.stats.engagementDetail',
      subColor: '#4B5563'
   }
]
</script>

<style scoped>
.live-stats {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 24px;
}

.live-stats__card {
   box-sizing: border-box;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 25px;
   display: flex;
   flex-direction: column;
   gap: 4px;
}

:root.dark .live-stats__card {
   background: #1a1d27;
   border-color: #2d3040;
}

.live-stats__card-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.live-stats__card-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
}

:root.dark .live-stats__card-label {
   color: #9CA3AF;
}

.live-stats__card-icon {
   width: 16px;
   height: 16px;
   color: #6C4EFD;
}

.live-stats__card-value {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 30px;
   line-height: 36px;
   color: #1F2937;
}

:root.dark .live-stats__card-value {
   color: #F3F4F6;
}

.live-stats__card-sub {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
}

@media (max-width: 1024px) {
   .live-stats {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 640px) {
   .live-stats {
      grid-template-columns: 1fr;
   }
}
</style>
