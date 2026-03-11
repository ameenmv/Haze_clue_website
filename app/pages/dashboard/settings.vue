<template>
   <div class="settings-page">
      <!-- Personal Information -->
      <SettingsPersonalInfo />

      <!-- Account Settings -->
      <SettingsAccountToggles />

      <!-- Password & Security -->
      <SettingsPassword @update-password="handleUpdatePassword" />

      <!-- Danger Zone -->
      <SettingsDangerZone @delete-account="handleDeleteAccount" />
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

// ─── Handlers ──────────────────────────────────────
const handleUpdatePassword = () => {
   console.log('Update password')
}

const handleDeleteAccount = () => {
   // TODO: show confirmation modal
   console.log('Delete account')
}
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
