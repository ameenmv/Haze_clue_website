<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const localePath = useLocalePath()

const isOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

// Handle scroll effect
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  // Update active section based on scroll position
  const sections = ['features', 'about', 'technology', 'cta']
  for (const section of sections.reverse()) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200) {
        activeSection.value = `#${section}`
        return
      }
    }
  }
  activeSection.value = ''
}

const navLinks = computed(() => [
  { label: t('landing.nav.home'), to: localePath('/') },
  { label: t('landing.nav.features'), to: '#features' },
  { label: t('landing.nav.about'), to: '#about' },
  { label: t('landing.nav.technology'), to: '#technology' },
])

const switchLocale = () => {
  setLocale(locale.value === 'en' ? 'ar' : 'en')
}

const scrollToSection = (id: string) => {
  isOpen.value = false
  
  if (id.startsWith('#')) {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const isActiveLink = (to: string) => {
  if (to.startsWith('#')) return activeSection.value === to
  return false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled 
        ? 'py-2' 
        : 'py-4'
    ]"
  >
    <!-- Navbar glass container -->
    <UContainer>
      <div
        class="flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-500"
        :class="[
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/[0.06] shadow-lg shadow-black/[0.03]'
            : 'bg-transparent'
        ]"
      >
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2 group shrink-0">
          <img src="/logo.png" alt="Haze Clue Logo" class="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <template v-for="link in navLinks" :key="link.label">
             <a 
               v-if="link.to.startsWith('#')" 
               :href="link.to"
               @click.prevent="scrollToSection(link.to)"
               class="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
               :class="[
                 isActiveLink(link.to) 
                   ? 'text-primary-500 bg-primary-500/10' 
                   : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30'
               ]"
             >
               {{ link.label }}
               <span 
                 v-if="isActiveLink(link.to)"
                 class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"
               />
             </a>
             <NuxtLink 
               v-else
               :to="link.to"
               class="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-300"
             >
               {{ link.label }}
             </NuxtLink>
          </template>
        </nav>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-2">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:scale-105"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <UIcon :name="isDark ? 'i-ph-sun-duotone' : 'i-ph-moon-duotone'" class="w-5 h-5" />
          </button>

          <!-- Language Switcher -->
          <button
            @click="switchLocale"
            class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-bold text-xs min-w-[40px] hover:scale-105"
            aria-label="Switch Language"
          >
            {{ locale === 'en' ? 'AR' : 'EN' }}
          </button>

          <div class="h-5 w-px bg-slate-200 dark:bg-slate-700/50 mx-1" />
          
          <NuxtLink 
            :to="localePath('/login')" 
            class="text-sm font-semibold hover:text-primary-500 transition-colors duration-300 px-3 py-2"
          >
            {{ t('landing.nav.login') }}
          </NuxtLink>
          
          <UButton 
            :to="localePath('/register')"
            color="primary" 
            variant="solid" 
            class="rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20 font-semibold text-sm"
          >
            {{ t('landing.nav.register') }}
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
        >
          <UIcon :name="isOpen ? 'i-ph-x' : 'i-ph-list'" class="w-6 h-6" />
        </button>
      </div>
    </UContainer>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="md:hidden mx-4 mt-2"
      >
        <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/30 shadow-2xl p-4 flex flex-col gap-1">
          <template v-for="link in navLinks" :key="link.label">
            <a 
               v-if="link.to.startsWith('#')" 
               :href="link.to"
               @click.prevent="scrollToSection(link.to)"
               class="block px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-500 transition-all duration-300"
             >
               {{ link.label }}
             </a>
             <NuxtLink 
               v-else
               :to="link.to"
               @click="isOpen = false"
               class="block px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-500 transition-all duration-300"
             >
               {{ link.label }}
             </NuxtLink>
          </template>
          
          <hr class="border-slate-100 dark:border-slate-800 my-2" />
          
          <div class="flex items-center justify-between px-4 py-2">
            <span class="text-sm font-medium text-slate-400">Settings</span>
            <div class="flex gap-2">
               <button
                @click="toggleTheme"
                class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                <UIcon :name="isDark ? 'i-ph-sun-duotone' : 'i-ph-moon-duotone'" class="w-5 h-5" />
              </button>
              <button
                @click="switchLocale"
                class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs"
              >
                {{ locale === 'en' ? 'AR' : 'EN' }}
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-2 mt-2">
            <NuxtLink :to="localePath('/login')" @click="isOpen = false" class="w-full text-center py-2.5 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
               {{ t('landing.nav.login') }}
            </NuxtLink>
            <UButton :to="localePath('/register')" @click="isOpen = false" block color="primary" class="rounded-xl font-semibold">
               {{ t('landing.nav.register') }}
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
