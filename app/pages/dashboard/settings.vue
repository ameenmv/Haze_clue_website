<template>
   <div class="settings-page">
      <!-- Personal Information -->
      <SettingsPersonalInfo />

      <!-- Account Settings -->
      <SettingsAccountToggles />

      <!-- Password & Security -->
      <SettingsPassword />

      <!-- Danger Zone -->
      <SettingsDangerZone />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Profile Settings | Haze Clue'
})
</script>

<style scoped>
.settings-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 32px;
   width: 100%;
}

.settings-page>* {
   max-width: 896px;
   width: 100%;
}

@media (max-width: 768px) {
   .settings-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
