<template>
  <AuthLayout>
    <RegisterForm />
  </AuthLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Register | Haze Clue'
})
</script>


