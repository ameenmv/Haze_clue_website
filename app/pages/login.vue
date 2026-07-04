<template>
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Login | Haze Clue'
})
</script>


