<template>
   <div class="create-session-page">
      <!-- Main Card -->
      <div class="create-session-page__card">
         <!-- Session Details Form Fields -->
         <CreateSessionDetails />

         <!-- Monitoring Settings Toggles -->
         <CreateSessionMonitoring />

         <!-- Device Assignment Warning -->
         <CreateSessionDevices @add-devices="handleAddDevices" />

         <!-- Notes + Action Buttons -->
         <CreateSessionActions @save-draft="handleSaveDraft" @cancel="handleCancel" @create="handleCreate" />
      </div>
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Create New Session | Haze Clue'
})

const router = useRouter()

// ─── Handlers ──────────────────────────────────────
const handleAddDevices = () => {
   navigateTo('/dashboard/devices')
}

const handleSaveDraft = () => {
   console.log('Save as draft')
}

const handleCancel = () => {
   router.back()
}

const handleCreate = () => {
   console.log('Create session')
}
</script>

<style scoped>
.create-session-page {
   padding: 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
}

.create-session-page__card {
   box-sizing: border-box;
   width: 100%;
   max-width: 896px;
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px 32px 48px;
   display: flex;
   flex-direction: column;
   gap: 32px;
}

:root.dark .create-session-page__card {
   background: #1a1d27;
   border-color: #2d3040;
}

@media (max-width: 768px) {
   .create-session-page {
      padding: 16px;
   }

   .create-session-page__card {
      padding: 20px 16px 32px;
      gap: 24px;
   }
}
</style>
