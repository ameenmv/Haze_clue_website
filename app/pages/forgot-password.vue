<template>
  <div class="flex min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
    <!-- Left Side - Branding -->
    <div class="hidden lg:flex flex-col justify-between w-[720px] bg-gradient-to-br from-[#6C4EFD] to-[#4C38AF] p-16 relative overflow-hidden text-white shrink-0">
      
      <!-- Logo Area -->
      <div class="flex items-center gap-3 z-10">
        <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#6C4EFD]">
           <Icon name="ph:rocket-launch-fill" class="w-6 h-6" />
        </div>
        <span class="text-2xl font-bold font-poppins">HazeClue</span>
      </div>

      <!-- Illustration Area -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px]">
         <div class="relative w-[458px] h-[458px]">
             <!-- Using same illustration -->
             <img src="/nm.png" alt="Illustration" class="w-full h-full object-contain mix-blend-lighten" />
         </div>
      </div>
      
    </div>

    <!-- Right Side - Form Container -->
    <div class="flex-1 flex flex-col relative bg-[#FAFAFB] dark:bg-gray-950 transition-colors duration-300">
      
      <!-- Top Actions -->
      <div class="absolute top-6 right-6 flex items-center gap-3 z-20">
        <AppLanguageSwitcher />
        
        <button 
          @click="toggleDark" 
          class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Icon :name="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-6 h-6" />
        </button>
      </div>

      <div class="flex-1 flex flex-col items-center justify-center p-4 lg:p-16 overflow-y-auto">
        <!-- Card Container -->
        <div class="w-full max-w-[448px] bg-white dark:bg-gray-900 rounded-[10px] shadow-sm p-8 md:p-12 relative">
            <ForgotPasswordForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ForgotPasswordForm from '~/components/auth/ForgotPasswordForm.vue'

definePageMeta({
  layout: false
})

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
