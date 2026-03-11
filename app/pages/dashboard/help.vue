<template>
   <div class="help-page">
      <!-- Contact Cards -->
      <HelpContactCards @email="handleEmail" @phone="handlePhone" @chat="handleChat" />

      <!-- Form + FAQ/Resources row -->
      <div class="help-page__row">
         <HelpContactForm @submit="handleSubmit" />
         <HelpFaqResources />
      </div>

      <!-- Support Hours Banner -->
      <HelpSupportHours />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Help & Support | Haze Clue'
})

// ─── Handlers ──────────────────────────────────────
const handleEmail = () => {
   window.open('mailto:support@attentionai.com')
}

const handlePhone = () => {
   window.open('tel:+15551234567')
}

const handleChat = () => {
   console.log('Open live chat')
}

const handleSubmit = (form: Record<string, unknown>) => {
   console.log('Submit support form:', form)
}
</script>

<style scoped>
.help-page {
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

.help-page__row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 32px;
}

@media (max-width: 900px) {
   .help-page {
      padding: 16px;
      gap: 24px;
   }

   .help-page__row {
      grid-template-columns: 1fr;
   }
}
</style>
