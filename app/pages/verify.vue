<template>
  <AuthLayout>
    <VerificationForm />
  </AuthLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Verify Email | Haze Clue'
})
</script>
