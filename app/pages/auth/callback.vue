<template>
  <div class="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
    <div class="flex flex-col items-center gap-4">
      <Icon name="ph:spinner-gap-bold" class="w-8 h-8 animate-spin text-[#6C4EFD]" />
      <p class="text-[#4B5563] dark:text-gray-400 font-poppins">Completing authentication...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const route = useRoute()
const authStore = useAuthStore()

onMounted(async () => {
  const token = route.query.token as string
  if (token) {
    try {
      // Fetch user data using the new token via proxied backend API
      const userData = await $fetch<any>('/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      // Persist the session
      authStore.setSession({
        id: userData.id,
        fullName: userData.fullName || (userData.firstName + ' ' + userData.lastName),
        email: userData.email,
        token: token
      })
      
      // Redirect to dashboard
      navigateTo('/dashboard')
    } catch (e) {
      console.error('Failed to complete OAuth login:', e)
      navigateTo('/login?error=oauth_failed')
    }
  } else {
    navigateTo('/login')
  }
})

definePageMeta({
  layout: false
})
</script>
