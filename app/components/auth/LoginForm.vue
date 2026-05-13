<template>
  <div class="w-full max-w-[547px] flex flex-col gap-8">
    <!-- Header -->
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-4xl font-bold text-[#1E293B] dark:text-white font-poppins">
        {{ $t('auth.login.welcome') }}
      </h1>
      <p class="text-base text-[#6B7280] dark:text-gray-400 font-poppins">
        {{ $t('auth.login.subtitle') }}
      </p>
    </div>

    <!-- Social Login -->
    <div class="flex flex-col gap-5 mt-2">
      <div class="flex flex-col gap-3">
        <SocialButton provider="google" />
        <SocialButton provider="facebook" />
      </div>

      <div class="relative flex items-center gap-4">
        <div class="h-px bg-[#E5E7EB] dark:bg-gray-700 flex-1"></div>
        <span class="text-sm font-medium text-[#6B7280] dark:text-gray-400">{{ $t('auth.labels.or') }}</span>
        <div class="h-px bg-[#E5E7EB] dark:bg-gray-700 flex-1"></div>
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <BaseInput v-model="form.email" :label="$t('auth.labels.email')" type="email"
        :placeholder="$t('auth.login.emailPlaceholder')" icon="ph:envelope-simple" :error="errors.email" />

      <div class="flex flex-col gap-2">
        <BaseInput v-model="form.password" :label="$t('auth.labels.password')" type="password"
          :placeholder="$t('auth.login.passwordPlaceholder')" icon="ph:lock-key" :error="errors.password" />

        <div class="flex justify-between items-center mt-1">
          <!-- Remember Me -->
          <div class="flex items-center gap-2">
            <input id="remember" v-model="form.rememberMe" type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#6C4EFD] focus:ring-[#6C4EFD] dark:bg-gray-700 dark:border-gray-600" />
            <label for="remember" class="text-sm text-[#4B5563] dark:text-gray-300 font-poppins">
              {{ $t('auth.login.rememberMe') }}
            </label>
          </div>

          <!-- Forgot Password -->
          <NuxtLink to="/forgot-password"
            class="text-sm font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF]">
            {{ $t('auth.login.forgotPassword') }}
          </NuxtLink>
        </div>
      </div>

      <button type="submit" :disabled="isLoading"
        class="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-base font-poppins">
        <span v-if="isLoading">{{ $t('auth.login.signingIn') }}</span>
        <span v-else>{{ $t('auth.login.submit') }}</span>
      </button>
    </form>

    <!-- Footer -->
    <div class="flex flex-col items-center gap-6 mt-2">
      <div class="text-center">
        <span class="text-[#4B5563] dark:text-gray-400 font-poppins">{{ $t('auth.login.noAccount') }} </span>
        <NuxtLink to="/register"
          class="font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF]">
          {{ $t('auth.login.signUp') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginSchema } from '~/schema/auth'

const { t } = useI18n()
const toast = useToast()
const route = useRoute()
const { login, isLoading, error: authError } = useAuth()

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive<Record<string, string>>({})

const handleSubmit = async () => {
  // Clear errors
  Object.keys(errors).forEach(key => delete errors[key])

  const validationResult = loginSchema.safeParse(form)

  if (!validationResult.success) {
    validationResult.error.issues.forEach(issue => {
      const field = issue.path[0] as string
      errors[field] = issue.message
    })
    return
  }

  try {
    const result = await login(validationResult.data)

    if (!result.success && result.error) {
      toast.add({
        title: t('auth.login.error'),
        description: result.error,
        color: 'error'
      })
    } else {
      toast.add({
        title: t('auth.login.success'),
        color: 'success'
      })
      const redirectTo = (route.query.redirect as string) || '/dashboard'
      navigateTo(redirectTo)
    }

  } catch (err) {
    console.error('Login error:', err)
  }
}
</script>
