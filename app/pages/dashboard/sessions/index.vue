<template>
   <div class="sessions-page">
      <!-- Hero Banner -->
      <SessionHeroBanner @create-session="handleCreate" />

      <!-- Create New Session -->
      <SessionCreateCard @create="handleCreate" />

      <!-- Session Templates -->
      <SessionTemplates @use-template="handleUseTemplate" />

      <!-- Your Sessions -->
      <SessionList @create-first="handleCreate" />

      <!-- Getting Started Tips -->
      <SessionTips @view-guide="navigateTo('/dashboard/help')" />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Session Management | Haze Clue'
})

// ─── Handlers ──────────────────────────────────────
const handleCreate = () => {
   // TODO: navigate to session creation flow
   console.log('Create session')
}

const handleUseTemplate = (templateId: string) => {
   // TODO: pre-fill session form with template
   console.log('Use template:', templateId)
}
</script>

<style scoped>
.sessions-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

@media (max-width: 768px) {
   .sessions-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
