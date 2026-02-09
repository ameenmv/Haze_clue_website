<template>
  <div class="w-full max-w-[559px] flex flex-col gap-12">
    <!-- Header -->
    <div class="flex flex-col gap-3">
      <h1 class="text-4xl font-bold text-[#111827] dark:text-white font-poppins">
        {{ $t('auth.register.title') }}
      </h1>
      <p class="text-base text-[#4B5563] dark:text-gray-400 font-poppins">
        {{ $t('auth.register.subtitle') }}
      </p>
    </div>

    <!-- Social Login -->
    <div class="flex flex-col gap-5">
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
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
      <div class="flex gap-4">
        <BaseInput
          v-model="form.firstName"
          :label="$t('auth.labels.firstName')"
          :placeholder="$t('auth.placeholder.name')"
          class="flex-1"
          :error="errors.firstName"
        />
        <BaseInput
          v-model="form.lastName"
          :label="$t('auth.labels.lastName')"
          :placeholder="$t('auth.placeholder.name')"
          class="flex-1"
          :error="errors.lastName"
        />
      </div>

      <BaseInput
        v-model="form.email"
        :label="$t('auth.labels.email')"
        type="email"
        :placeholder="$t('auth.placeholder.email')"
        icon="ph:envelope-simple"
        :error="errors.email"
      />

      <div class="flex flex-col gap-2">
        <BaseInput
          v-model="form.password"
          :label="$t('auth.labels.password')"
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

      <!-- Terms Checkbox -->
      <div class="flex items-start gap-3">
        <div class="flex items-center h-5">
          <input
            id="terms"
            v-model="form.agreeToTerms"
            type="checkbox"
            class="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#6C4EFD] dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <label for="terms" class="text-sm text-[#4B5563] dark:text-gray-300">
          {{ $t('auth.labels.agreeTo') }}
          <a href="#" class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF]">
            {{ $t('auth.labels.terms') }}
          </a>
          {{ $t('auth.labels.and') }}
          <a href="#" class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF]">
             {{ $t('auth.labels.privacy') }}
          </a>
        </label>
      </div>
       <span v-if="errors.agreeToTerms" class="text-xs text-red-500">{{ errors.agreeToTerms }}</span>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-base font-poppins"
      >
        <span v-if="isLoading">{{ $t('auth.register.creating') }}</span>
        <span v-else>{{ $t('auth.register.submit') }}</span>
      </button>
    </form>

    <div class="text-center">
      <span class="text-[#4B5563] dark:text-gray-400">{{ $t('auth.hasAccount') }} </span>
      <NuxtLink to="/login" class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF]">
        {{ $t('auth.login.title') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registerSchema } from '~/schema/auth'

const { t } = useI18n()
const { register, isLoading, error: authError } = useAuth()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const errors = reactive<Record<string, string>>({})
const strengthScore = ref(0) // 0 to 4

// Calculate password strength
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

const handleSubmit = async () => {
  // Clear errors
  Object.keys(errors).forEach(key => delete errors[key])
  
  const validationResult = registerSchema.safeParse(form)
  
  if (!validationResult.success) {
    validationResult.error.issues.forEach(issue => {
      const field = issue.path[0] as string
      errors[field] = issue.message
    })
    return
  }
  
  try {
    // Call register with validated data
    const result = await register(validationResult.data)
    
    if (!result.success && result.error) {
       // Handle API errors
       alert(result.error)
    } else {
        // Success handled by router/auth
        navigateTo('/dashboard')
    }

  } catch (err) {
    console.error('Registration error:', err)
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
