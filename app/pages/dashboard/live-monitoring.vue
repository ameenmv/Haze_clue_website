<template>
   <div class="monitoring-page">
      <!-- No Active Session -->
      <MonitoringNoSession @start-session="navigateTo('/dashboard/sessions/create')"
         @setup-devices="navigateTo('/dashboard/devices')" />

      <!-- Quick Setup + Device Status -->
      <div class="monitoring-page__row">
         <MonitoringQuickSetup @submit="handleStartSession" />
         <MonitoringDeviceStatus @add-device="navigateTo('/dashboard/devices')" />
      </div>

      <!-- Dashboard Preview -->
      <MonitoringPreview />

      <!-- Ready Banner -->
      <MonitoringReadyBanner @setup-devices="navigateTo('/dashboard/devices')"
         @view-tutorial="navigateTo('/dashboard/help')" />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Live Monitoring | Haze Clue'
})

// ─── Handlers ──────────────────────────────────────
const handleStartSession = (form: { className: string; subject: string; duration: string; students: string }) => {
   console.log('Starting session:', form)
   // TODO: API call to create & start session
}
</script>

<style scoped>
.monitoring-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

.monitoring-page__row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 32px;
}

@media (max-width: 900px) {
   .monitoring-page__row {
      grid-template-columns: 1fr;
   }
}

@media (max-width: 768px) {
   .monitoring-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
