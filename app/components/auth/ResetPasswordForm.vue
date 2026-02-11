<template>
  <div class="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
    <!-- Header -->
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-3xl font-bold text-[#171A1F] dark:text-white font-display tracking-tight">
        {{ $t('auth.resetPassword.title') }}
      </h1>
      <p class="text-base text-[#565D6D] dark:text-gray-400 text-center">
        {{ $t('auth.resetPassword.subtitle') }}
      </p>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <BaseInput
          v-model="form.password"
          :label="$t('auth.labels.newPassword')"
          type="password"
          :placeholder="$t('auth.placeholder.password')"
          icon="ph:lock-key"
          :error="errors.password"
          @input="calculateStrength"
        />

        <!-- Password Strength Meter -->
        <div class="flex items-center gap-2 mt-1">
          <div class="flex-1 h-1.5 bg-[#E5E7EB] dark:bg-gray-700 rounded-full overflow-hidden">
             <div
              class="h-full transition-all duration-300 rounded-full"
              :class="strengthColor"
              :style="{ width: `${strengthScore * 25}%` }"
            ></div>
          </div>
          <span class="text-xs text-[#6B7280] dark:text-gray-400">{{ strengthLabel }}</span>
        </div>
      </div>

      <BaseInput
        v-model="form.confirmPassword"
        :label="$t('auth.labels.confirmPassword')"
        type="password"
        :placeholder="$t('auth.placeholder.confirmPassword')"
        icon="ph:lock-key"
        :error="errors.confirmPassword"
      />

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        <span v-if="isLoading">{{ $t('auth.login.signingIn') }}</span>
        <span v-else>{{ $t('auth.resetPassword.submit') }}</span>
      </button>

      <NuxtLink 
        to="/login"
        class="text-sm font-medium text-center text-[#6C4EFD] hover:opacity-80 transition-opacity"
      >
        {{ $t('auth.forgotPassword.backToLogin') }}
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import { resetPasswordSchema } from '~/schema/auth'

const { t } = useI18n()
const { resetPassword, isLoading } = useAuth() // Assuming useAuth has resetPassword
const route = useRoute()

// State
const form = reactive({
  password: '',
  confirmPassword: ''
})

const errors = reactive<Record<string, string>>({})
const strengthScore = ref(0)
const token = route.query.token as string

// Password Strength
const calculateStrength = () => {
  const pwd = form.password
  let score = 0
  if (!pwd) {
    strengthScore.value = 0
    return
  }
  
  if (pwd.length >= 8) score++
  if (/[A-Z]/.test(pwd)) score++
  if (/[0-9]/.test(pwd)) score++
  if (/[^A-Za-z0-9]/.test(pwd)) score++
  
  strengthScore.value = score
}

const strengthLabel = computed(() => {
  switch (strengthScore.value) {
    case 0: return t('auth.register.weak')
    case 1: return t('auth.register.weak')
    case 2: return t('auth.register.fair')
    case 3: return t('auth.register.good')
    case 4: return t('auth.register.strong')
    default: return t('auth.register.weak')
  }
})

const strengthColor = computed(() => {
  switch (strengthScore.value) {
    case 0: return 'bg-gray-200'
    case 1: return 'bg-red-500'
    case 2: return 'bg-yellow-500'
    case 3: return 'bg-blue-500'
    case 4: return 'bg-green-500'
    default: return 'bg-gray-200'
  }
})

// Submission
const handleSubmit = async () => {
  Object.keys(errors).forEach(key => delete errors[key])
  
  const validationResult = resetPasswordSchema.safeParse(form)
  
  if (!validationResult.success) {
    validationResult.error.issues.forEach(issue => {
      const field = issue.path[0] as string
      errors[field] = issue.message
    })
    return
  }
  
  if (!token) {
     alert('Missing reset token')
     return
  }

  const result = await resetPassword(token, form.password)
  
  if (!result.success && result.error) {
     alert(result.error)
  } else {
     alert(t('auth.resetPassword.successDescription'))
     navigateTo('/login')
  }
}
</script>
