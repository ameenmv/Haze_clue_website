<template>
   <div class="reports-page">
      <!-- No Reports Empty State -->
      <ReportsEmptyState @create-session="navigateTo('/dashboard/sessions/create')"
         @learn-more="navigateTo('/dashboard/help')" />

      <!-- Getting Started Banner -->
      <ReportsGettingStarted />

      <!-- What You'll Get -->
      <ReportsWhatYouGet />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Reports | Haze Clue'
})
</script>

<style scoped>
.reports-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

@media (max-width: 768px) {
   .reports-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
