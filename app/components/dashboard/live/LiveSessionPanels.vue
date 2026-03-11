<template>
   <section class="live-panels">
      <!-- Class Attention Meter -->
      <div class="live-panels__card">
         <h4 class="live-panels__title">{{ $t('dashboard.liveSession.meter.title') }}</h4>
         <div class="live-panels__meter-wrap">
            <!-- SVG Circular Gauge -->
            <svg class="live-panels__gauge" viewBox="0 0 128 128">
               <circle cx="64" cy="64" r="52" fill="none" stroke="#E5E7EB" stroke-width="8" />
               <circle cx="64" cy="64" r="52" fill="none" stroke="url(#gaugeGradient)" stroke-width="8"
                  stroke-linecap="round" :stroke-dasharray="`${circumference * 0.82} ${circumference}`"
                  :stroke-dashoffset="0" transform="rotate(-90 64 64)" />
               <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stop-color="#6C4EFD" />
                     <stop offset="100%" stop-color="#246BFD" />
                  </linearGradient>
               </defs>
               <text x="64" y="68" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="24"
                  fill="#1F2937">82%</text>
            </svg>
            <p class="live-panels__status" style="color: #16A34A;">{{ $t('dashboard.liveSession.meter.status') }}</p>
            <p class="live-panels__sub">{{ $t('dashboard.liveSession.meter.classAverage') }}</p>
            <p class="live-panels__desc">{{ $t('dashboard.liveSession.meter.description') }}</p>
         </div>
      </div>

      <!-- Session Actions -->
      <div class="live-panels__card">
         <h4 class="live-panels__title">{{ $t('dashboard.liveSession.actions.title') }}</h4>
         <div class="live-panels__actions">
            <button class="live-panels__action-btn live-panels__action-btn--purple">
               <UIcon name="lucide:bookmark" class="w-3 h-4" style="color: #fff" />
               <span>{{ $t('dashboard.liveSession.actions.addMarker') }}</span>
            </button>
            <button class="live-panels__action-btn live-panels__action-btn--yellow">
               <UIcon name="lucide:pause" class="w-2.5 h-4" style="color: #fff" />
               <span>{{ $t('dashboard.liveSession.actions.pauseMonitoring') }}</span>
            </button>
            <button class="live-panels__action-btn live-panels__action-btn--orange">
               <UIcon name="lucide:bell" class="w-3.5 h-4" style="color: #fff" />
               <span>{{ $t('dashboard.liveSession.actions.sendAlert') }}</span>
            </button>
         </div>
      </div>

      <!-- Session Status -->
      <div class="live-panels__card">
         <h4 class="live-panels__title">{{ $t('dashboard.liveSession.status.title') }}</h4>
         <div class="live-panels__status-list">
            <div class="live-panels__status-row">
               <span class="live-panels__status-label">{{ $t('dashboard.liveSession.status.connectedDevices') }}</span>
               <span class="live-panels__status-value">18/24</span>
            </div>
            <div class="live-panels__status-row">
               <span class="live-panels__status-label">{{ $t('dashboard.liveSession.status.dataQuality') }}</span>
               <span class="live-panels__status-value" style="color: #16A34A;">{{
                  $t('dashboard.liveSession.status.excellent') }}</span>
            </div>
            <div class="live-panels__status-row">
               <span class="live-panels__status-label">{{ $t('dashboard.liveSession.status.lastUpdate') }}</span>
               <span class="live-panels__status-value">2 sec ago</span>
            </div>
            <div class="live-panels__status-row">
               <span class="live-panels__status-label">{{ $t('dashboard.liveSession.status.signalStrength') }}</span>
               <span class="live-panels__status-value" style="color: #16A34A;">{{
                  $t('dashboard.liveSession.status.strong') }}</span>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const circumference = 2 * Math.PI * 52 // ~326.73
</script>

<style scoped>
.live-panels {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px;
}

.live-panels__card {
   box-sizing: border-box;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 16px;
}

:root.dark .live-panels__card {
   background: #1a1d27;
   border-color: #2d3040;
}

.live-panels__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 18px;
   line-height: 28px;
   color: #1F2937;
   margin: 0;
}

:root.dark .live-panels__title {
   color: #F3F4F6;
}

/* ─── Meter ──────────────────────────────────────── */
.live-panels__meter-wrap {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 4px;
}

.live-panels__gauge {
   width: 128px;
   height: 128px;
}

:root.dark .live-panels__gauge text {
   fill: #F3F4F6;
}

.live-panels__status {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   margin: 8px 0 0;
}

.live-panels__sub {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #4B5563;
   margin: 0;
}

:root.dark .live-panels__sub {
   color: #9CA3AF;
}

.live-panels__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #6B7280;
   margin: 0;
   text-align: center;
}

:root.dark .live-panels__desc {
   color: #9CA3AF;
}

/* ─── Actions ────────────────────────────────────── */
.live-panels__actions {
   display: flex;
   flex-direction: column;
   gap: 12px;
}

.live-panels__action-btn {
   display: flex;
   align-items: center;
   gap: 12px;
   padding: 12px 16px;
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
}

.live-panels__action-btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.live-panels__action-btn--purple {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
}

.live-panels__action-btn--yellow {
   background: #EAB308;
}

.live-panels__action-btn--orange {
   background: #F97316;
}

/* ─── Status ─────────────────────────────────────── */
.live-panels__status-list {
   display: flex;
   flex-direction: column;
   gap: 12px;
}

.live-panels__status-row {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.live-panels__status-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
}

:root.dark .live-panels__status-label {
   color: #9CA3AF;
}

.live-panels__status-value {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #1F2937;
}

:root.dark .live-panels__status-value {
   color: #F3F4F6;
}

@media (max-width: 1024px) {
   .live-panels {
      grid-template-columns: 1fr;
   }
}
</style>
