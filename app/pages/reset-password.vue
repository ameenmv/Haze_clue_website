<template>
  <AuthLayout>
    <ResetPasswordForm />
  </AuthLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Reset Password | Haze Clue'
})
</script>
