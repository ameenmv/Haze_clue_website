<template>
  <div class="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
    <!-- Header -->
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-3xl font-bold text-[#171A1F] dark:text-white font-poppins tracking-tight">
        {{ $t('auth.forgotPassword.title') }}
      </h1>
      <p class="text-base text-[#565D6D] dark:text-gray-400 font-poppins text-center">
        {{ $t('auth.forgotPassword.description') }}
      </p>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-6">
      <BaseInput
        v-model="email"
        :label="$t('auth.labels.email')"
        type="email"
        :placeholder="$t('auth.forgotPassword.emailPlaceholder')"
        :error="error"
        class="text-sm"
      />

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full py-2.5 text-white font-medium rounded-md bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm font-poppins"
      >
        <span v-if="isLoading">{{ $t('auth.login.signingIn') }}</span> <!-- Reusing generic spinner text or add new key if needed, but 'Signing In' isn't quite right. Let's stick to button text or a generic 'Sending...' -->
        <span v-else>{{ $t('auth.forgotPassword.submit') }}</span>
      </button>

      <NuxtLink 
        to="/login"
        class="text-sm font-medium text-center font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] hover:opacity-80 transition-opacity"
      >
        {{ $t('auth.forgotPassword.backToLogin') }}
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import { forgotPasswordSchema } from '~/schema/auth'

const { t } = useI18n()
const { forgotPassword, isLoading } = useAuth()

const email = ref('')
const error = ref('')

const handleSubmit = async () => {
  error.value = ''
  
  const validationResult = forgotPasswordSchema.safeParse({ email: email.value })
  
  if (!validationResult.success) {
    error.value = validationResult.error.issues[0].message
    return
  }
  
  const result = await forgotPassword(email.value)
  
  if (!result.success && result.error) {
     error.value = result.error
  } else {
     // Success - show toast/alert and maybe redirect
     alert(t('auth.forgotPassword.successDescription'))
     navigateTo('/login')
  }
}
</script>


