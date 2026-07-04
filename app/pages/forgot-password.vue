<template>
  <AuthLayout>
    <ForgotPasswordForm />
  </AuthLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Forgot Password | Haze Clue'
})
</script>
