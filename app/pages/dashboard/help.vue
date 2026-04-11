<template>
   <div class="help-page">
      <!-- Contact Cards -->
      <HelpContactCards @email="handleEmail" @phone="handlePhone" @chat="handleChat" />

      <!-- Form + FAQ/Resources row -->
      <div class="help-page__row">
         <HelpContactForm @submit="handleSubmit" :loading="isSubmitting" />
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

import { supportApi } from '~/services/support'

const isSubmitting = ref(false)

const handleEmail = () => {
   window.open('mailto:support@attentionai.com')
}

const handlePhone = () => {
   window.open('tel:+15551234567')
}

const handleChat = () => {
   console.log('Open live chat')
}

const handleSubmit = async (form: any) => {
   if (isSubmitting.value) return
   isSubmitting.value = true
   try {
      await supportApi.submitContactForm(form)
      useToast().add({ title: 'Message sent successfully. We will be in touch!', color: 'success' })
   } catch {
      useToast().add({ title: 'Failed to send message. Please try again later.', color: 'error' })
   } finally {
      isSubmitting.value = false
   }
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
