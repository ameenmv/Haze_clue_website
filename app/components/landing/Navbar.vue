<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const localePath = useLocalePath()

const isOpen = ref(false)
const isScrolled = ref(false)

// Handle scroll effect
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const navLinks = computed(() => [
  { label: t('landing.nav.home'), to: localePath('/') },
  // Smooth scroll links - utilizing #id. In a real app, might need complex logic if logic spans multiple pages
  { label: t('landing.nav.features'), to: '#features' },
  { label: t('landing.nav.about'), to: '#about' },
  { label: t('landing.nav.technology'), to: '#technology' },
])

const switchLocale = () => {
  setLocale(locale.value === 'en' ? 'ar' : 'en')
}

// Function to handle smooth scroll manually if needed (GSAP/Native)
const scrollToSection = (id: string) => {
  isOpen.value = false // Close mobile menu
  
  if (id.startsWith('#')) {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="[
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-gray-200/50 dark:border-white/10 shadow-lg py-3' 
        : 'bg-transparent border-transparent py-5'
    ]"
  >
    <UContainer>
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2 group">
          <!-- Logo Image -->
          <img src="/logo.png" alt="Haze Clue Logo" class="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <template v-for="link in navLinks" :key="link.label">
            <!-- Standard Links -->
             <a 
               v-if="link.to.startsWith('#')" 
               :href="link.to"
               @click.prevent="scrollToSection(link.to)"
               class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all cursor-pointer"
             >
               {{ link.label }}
             </a>
             <NuxtLink 
               v-else
               :to="link.to"
               class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all"
             >
               {{ link.label }}
             </NuxtLink>
          </template>
        </nav>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <UIcon :name="isDark ? 'i-ph-sun-duotone' : 'i-ph-moon-duotone'" class="w-5 h-5" />
          </button>

          <!-- Language Switcher -->
          <button
            @click="switchLocale"
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-bold text-sm min-w-[40px]"
            aria-label="Switch Language"
          >
            {{ locale === 'en' ? 'AR' : 'EN' }}
          </button>

          <!-- Login/Register Buttons -->
          <div class="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
          
          <NuxtLink :to="localePath('/login')" class="text-sm font-semibold hover:text-primary-500 transition-colors">
            {{ t('landing.nav.login') }}
          </NuxtLink>
          
          <UButton 
            :to="localePath('/register')"
            color="primary" 
            variant="solid" 
            class="rounded-full px-6 transition-transform hover:scale-105"
          >
            {{ t('landing.nav.register') }}
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden p-2 text-slate-600 dark:text-slate-300"
        >
          <UIcon :name="isOpen ? 'i-ph-x' : 'i-ph-list'" class="w-6 h-6" />
        </button>
      </div>
    </UContainer>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isOpen" 
        class="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 shadow-xl p-4 md:hidden flex flex-col gap-2"
      >
        <template v-for="link in navLinks" :key="link.label">
          <a 
             v-if="link.to.startsWith('#')" 
             :href="link.to"
             @click.prevent="scrollToSection(link.to)"
             class="block px-4 py-3 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-500 transition-colors"
           >
             {{ link.label }}
           </a>
           <NuxtLink 
             v-else
             :to="link.to"
             @click="isOpen = false"
             class="block px-4 py-3 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-500 transition-colors"
           >
             {{ link.label }}
           </NuxtLink>
        </template>
        
        <hr class="border-gray-100 dark:border-gray-800 my-2" />
        
        <div class="flex items-center justify-between px-4 py-2">
          <span class="text-sm font-medium text-slate-500 dark:text-slate-400">Settings</span>
          <div class="flex gap-2">
             <button
              @click="toggleTheme"
              class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <UIcon :name="isDark ? 'i-ph-sun-duotone' : 'i-ph-moon-duotone'" class="w-5 h-5" />
            </button>
            <button
              @click="switchLocale"
              class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs"
            >
              {{ locale === 'en' ? 'AR' : 'EN' }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-2">
          <NuxtLink :to="localePath('/login')" @click="isOpen = false" class="w-full text-center py-2 font-medium">
             {{ t('landing.nav.login') }}
          </NuxtLink>
          <UButton :to="localePath('/register')" @click="isOpen = false" block color="primary">
             {{ t('landing.nav.register') }}
          </UButton>
        </div>
      </div>
    </Transition>
  </header>
</template>
