<template>
  <div class="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
    <!-- Header -->
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-3xl font-bold text-[#171A1F] dark:text-white font-display tracking-tight">
        {{ $t('auth.verification.title') }}
      </h1>
      <div class="text-center">
        <p class="text-base text-[#565D6D] dark:text-gray-400">
          {{ $t('auth.verification.subtitle') }}
        </p>
        <p class="text-sm font-bold text-[#111827] dark:text-gray-300 mt-1">
          {{ $t('auth.verification.emailSentTo', { email: userEmail }) }}
        </p>
      </div>
    </div>

    <!-- OTP Input -->
    <div class="flex flex-col gap-4 w-full">
      <label class="text-sm font-semibold text-[#111827] dark:text-gray-200 text-center">
        {{ $t('auth.verification.codeLabel') }}
      </label>
      
      <div class="flex justify-center gap-3" @paste.prevent="handlePaste">
        <input
          v-for="(digit, index) in 6"
          :key="index"
          ref="inputs"
          v-model="otp[index]"
          type="text"
          inputmode="numeric"
          maxlength="1"
          class="w-12 h-14 text-center text-xl font-bold rounded-lg border focus:ring-2 focus:ring-[#6C4EFD] focus:border-[#6C4EFD] outline-none transition-all dark:bg-gray-800 dark:text-white"
          :class="[
            otp[index] ? 'border-[#6C4EFD] bg-white' : 'border-gray-200 bg-white dark:border-gray-700'
          ]"
          @input="handleInput($event, index)"
          @keydown="handleKeydown($event, index)"
        />
      </div>

      <p class="text-xs text-[#6C4EFD] text-center font-medium">
        {{ $t('auth.verification.expiresIn', { time: formattedTime }) }}
      </p>
    </div>

    <!-- Verify Button -->
    <button
      @click="handleSubmit"
      :disabled="!isComplete || isLoading"
      class="w-full py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] shadow-lg shadow-purple-500/20 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
    >
      <span v-if="isLoading">{{ $t('auth.login.signingIn') }}</span>
      <span v-else>{{ $t('auth.verification.submit') }}</span>
    </button>

    <!-- Footer -->
    <div class="flex flex-col items-center gap-4 w-full">
      <div class="text-sm text-[#6B7280] dark:text-gray-400">
        {{ $t('auth.verification.resend') }}
        <button 
          @click="resendCode" 
          :disabled="timer > 0"
          class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C4EFD] to-[#4C38AF] hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {{ $t('auth.verification.resendLink') }}
        </button>
      </div>

      <div class="w-full border-t border-gray-100 dark:border-gray-800"></div>

      <NuxtLink 
        to="/login"
        class="text-sm font-medium text-[#6C4EFD] flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <UIcon name="i-ph-arrow-left" class="w-4 h-4" />
        {{ $t('auth.verification.backToLogin') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { verifyOtp, resendOtp, isLoading } = useAuth() // Assuming useAuth has these
const route = useRoute()

// State
const otp = ref(['', '', '', '', '', ''])
const inputs = ref<HTMLInputElement[]>([])
const timer = ref(299) // 4:59
const userEmail = ref('HazeClue@example.com') // Should come from route query or store

// Computed
const isComplete = computed(() => otp.value.every(d => d.length === 1))
const formattedTime = computed(() => {
  const m = Math.floor(timer.value / 60)
  const s = timer.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

// Timer
let interval: NodeJS.Timeout
onMounted(() => {
  startTimer()
  // Focus first input
  nextTick(() => inputs.value[0]?.focus())
  
  if (route.query.email) {
    userEmail.value = route.query.email as string
  }
})

onUnmounted(() => clearInterval(interval))

const startTimer = () => {
  clearInterval(interval)
  timer.value = 299
  interval = setInterval(() => {
    if (timer.value > 0) timer.value--
    else clearInterval(interval)
  }, 1000)
}

// Input Handlers
const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement
  const val = input.value

  if (!/^\d*$/.test(val)) {
    otp.value[index] = ''
    return
  }

  if (val.length > 1) {
    otp.value[index] = val.slice(-1)
  }

  if (val && index < 5) {
    inputs.value[index + 1]?.focus()
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    inputs.value[index - 1]?.focus()
  }
}

const handlePaste = (event: ClipboardEvent) => {
  const pasteData = event.clipboardData?.getData('text')
  if (!pasteData) return

  const digits = pasteData.replace(/\D/g, '').split('').slice(0, 6)
  
  digits.forEach((digit, i) => {
    otp.value[i] = digit
  })

  // Focus last filled or next empty
  const nextIndex = Math.min(digits.length, 5)
  inputs.value[nextIndex]?.focus()
}

// Actions
const handleSubmit = async () => {
  if (!isComplete.value) return
  
  const code = otp.value.join('')
  // Implementation of verify
  console.log('Verifying:', code)
  
  const result = await verifyOtp(userEmail.value, code)
  if (result.success) {
      navigateTo('/dashboard')
  } else {
      alert('Verification Failed')
  }
}

const resendCode = async () => {
  if (timer.value > 0) return
  
  // Call resend API
  console.log('Resending code...')
  await resendOtp(userEmail.value)
  startTimer()
}
</script>
