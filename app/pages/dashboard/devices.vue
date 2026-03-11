<template>
   <div class="devices-page">
      <!-- No Devices Empty State -->
      <DeviceEmptyState @add-device="handleAddDevice" />

      <!-- How to Connect -->
      <DeviceHowToConnect />

      <!-- Setup Guide + Need Help -->
      <DeviceHelpCards @view-guide="navigateTo('/dashboard/help')" @contact-support="navigateTo('/dashboard/help')" />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Device Management | Haze Clue'
})

const handleAddDevice = () => {
   // TODO: open add device modal / wizard
   console.log('Add device')
}
</script>

<style scoped>
.devices-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

@media (max-width: 768px) {
   .devices-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
