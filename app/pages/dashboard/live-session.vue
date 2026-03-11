<template>
   <div class="live-session-page">
      <!-- Session Info Bar -->
      <LiveSessionInfo @end-session="handleEndSession" />

      <!-- 4 Stat Cards -->
      <LiveSessionStats />

      <!-- 3-Column Panels: Meter + Actions + Status -->
      <LiveSessionPanels />

      <!-- Chart.js Attention Timeline -->
      <LiveSessionTimeline />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Live Session | Haze Clue'
})

// ─── Handlers ──────────────────────────────────────
const handleEndSession = () => {
   // TODO: confirmation modal + API call
   console.log('End session')
   navigateTo('/dashboard/sessions')
}
</script>

<style scoped>
.live-session-page {
   padding: 24px 32px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   width: 100%;
}

@media (max-width: 768px) {
   .live-session-page {
      padding: 16px;
      gap: 20px;
   }
}
</style>
