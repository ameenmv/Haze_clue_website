<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const subtitleText = computed(() => t('landing.hero.subtitle'))
const displayedSubtitle = ref('')
const isTyping = ref(true)

// Typing effect
onMounted(() => {
  let i = 0
  const speed = 30
  const typeWriter = () => {
    if (i < subtitleText.value.length) {
      displayedSubtitle.value += subtitleText.value.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    } else {
      isTyping.value = false
    }
  }
  typeWriter()
})
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[20%] -right-[10%] w-[70rem] h-[70rem] bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style="animation-delay: -2s;" />
      
      <!-- Extra Particles -->
      <div v-for="n in 5" :key="n" 
           class="absolute rounded-full bg-white/30 dark:bg-white/10 blur-sm animate-float-slow"
           :style="{
             width: Math.random() * 10 + 5 + 'px',
             height: Math.random() * 10 + 5 + 'px',
             top: Math.random() * 100 + '%',
             left: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's',
             animationDuration: Math.random() * 10 + 10 + 's'
           }"
      />
    </div>

    <UContainer class="relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1000">
          <UBadge 
            variant="subtle" 
            color="primary" 
            class="mb-6 rounded-full px-4 py-1.5 text-sm font-medium border border-primary-200 dark:border-primary-800 animate-pulse"
          >
            {{ t('landing.hero.badge') }}
          </UBadge>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-slate-900 dark:text-white text-glow">
            {{ t('landing.hero.title') }}
          </h1>
          
          <p class="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed h-[3.5rem] lg:h-[4rem]">
            {{ displayedSubtitle }}<span v-if="isTyping" class="animate-pulse">|</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton 
              :to="localePath('/register')"
              size="xl" 
              color="primary" 
              variant="solid" 
              class="rounded-full px-8 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 transition-all hover:scale-105 hover-glow"
              icon="i-ph-rocket-launch-duotone"
            >
              {{ t('landing.hero.cta_primary') }}
            </UButton>
            
            <UButton 
              to="#features"
              size="xl" 
              color="secondary" 
              variant="ghost" 
              class="rounded-full px-8 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform hover:translate-y-1"
              icon="i-ph-caret-down-duotone"
            >
              {{ t('landing.hero.cta_secondary') }}
            </UButton>
          </div>

          <!-- Social Proof / Trust Indicators -->
          <div class="mt-12 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400" data-aos="fade-up" data-aos-delay="400">
            <div class="flex -space-x-3">
               <!-- Placeholder Avatars -->
               <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                 <UIcon name="i-ph-user" class="w-5 h-5 opacity-50" />
               </div>
            </div>
            <p>Trusted by <span class="font-bold text-primary-500">2,000+</span> early adopters</p>
          </div>
        </div>

        <!-- Visual / Illustration -->
        <div class="relative hidden lg:block perspective-1000" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
           <!-- Decorative circles/grid -->
           <div class="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 mask-radial-faded" />
           
           <div class="relative w-full aspect-square animate-float transform-style-3d hover:rotate-y-6 transition-transform duration-700">
             <!-- Abstract Brain / Tech Illustration Representation -->
             <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-purple-600/30 rounded-full blur-2xl transform scale-90 animate-pulse-ring" />
             <div class="relative bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden ring-1 ring-white/20 transform-style-3d group">
                <!-- Inner content simulating UI/Device -->
                <div class="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                   <div class="w-20 h-6 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
                   <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 shadow-lg shadow-green-500/20">
                     <UIcon name="i-ph-activity" />
                   </div>
                </div>

                <div class="space-y-4">
                  <!-- Chart Simulation -->
                  <div class="h-32 w-full bg-gradient-to-t from-primary-500/20 to-transparent rounded-lg relative overflow-hidden flex items-end justify-between px-2 pb-2 group-hover:scale-[1.02] transition-transform">
                     <div v-for="h in [40, 65, 45, 80, 55, 90, 70]" :key="h" 
                          :style="{ height: h + '%' }" 
                          class="w-1/12 bg-primary-500/40 rounded-t-sm animate-pulse" 
                          :class="{'bg-primary-400': h > 80}"
                      />
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary-500/30 transition-colors">
                      <div class="text-xs text-slate-500 uppercase font-semibold mb-1">Focus Score</div>
                      <div class="text-2xl font-bold font-mono text-primary-500 text-glow">87.5</div>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary-500/30 transition-colors">
                       <div class="text-xs text-slate-500 uppercase font-semibold mb-1">Session Time</div>
                       <div class="text-2xl font-bold font-mono text-slate-700 dark:text-slate-200">24:12</div>
                    </div>
                  </div>
                </div>
             </div>
             
             <!-- Floating Elements -->
             <div class="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-slow" style="animation-delay: -1s;">
               <UIcon name="i-ph-brain-duotone" class="w-8 h-8 text-primary-500" />
             </div>
             <div class="absolute bottom-10 -left-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-slow" style="animation-delay: -3s;">
               <UIcon name="i-ph-lightning-duotone" class="w-8 h-8 text-amber-500" />
             </div>
           </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.bg-grid-slate-200\/50 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.dark .bg-grid-slate-800\/50 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(30 41 59 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.mask-radial-faded {
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}
</style>
