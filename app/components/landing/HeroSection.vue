<script setup lang="ts">
import { gsap } from 'gsap'

const { t } = useI18n()
const localePath = useLocalePath()

const subtitleText = computed(() => t('landing.hero.subtitle'))
const displayedSubtitle = ref('')
const isTyping = ref(true)

// Refs for GSAP
const heroRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const badgeRef = ref<HTMLElement>()
const ctaRef = ref<HTMLElement>()
const visualRef = ref<HTMLElement>()
const statsRef = ref<HTMLElement>()
const particlesRef = ref<HTMLElement>()

onMounted(() => {
  // Typing effect
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

  // GSAP Timeline for hero entrance
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(badgeRef.value, {
    opacity: 0,
    y: 20,
    scale: 0.9,
    duration: 0.6
  })
  .from(titleRef.value, {
    opacity: 0,
    y: 40,
    duration: 0.8
  }, '-=0.3')
  .add(() => typeWriter(), '-=0.4')
  .from(ctaRef.value, {
    opacity: 0,
    y: 30,
    duration: 0.6
  }, '-=0.5')
  .from(visualRef.value, {
    opacity: 0,
    x: 80,
    rotateY: 15,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.8')
  .from(statsRef.value, {
    opacity: 0,
    y: 20,
    duration: 0.5
  }, '-=0.4')

  // Floating particles animation
  if (particlesRef.value) {
    const particles = particlesRef.value.querySelectorAll('.particle')
    particles.forEach((p, index) => {
      gsap.to(p, {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      })
    })
  }

  // Animate the orbs
  gsap.to('.hero-orb-1', {
    x: 30,
    y: -20,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  gsap.to('.hero-orb-2', {
    x: -25,
    y: 15,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  gsap.to('.hero-orb-3', {
    x: 20,
    y: 25,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})
</script>

<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="hero-orb-1 absolute -top-[20%] -right-[10%] w-[70rem] h-[70rem] bg-gradient-to-br from-primary-500/15 to-emerald-500/10 rounded-full blur-[120px]" />
      <div class="hero-orb-2 absolute top-[30%] -left-[15%] w-[50rem] h-[50rem] bg-gradient-to-tr from-cyan-500/10 to-primary-500/10 rounded-full blur-[100px]" />
      <div class="hero-orb-3 absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] bg-gradient-to-bl from-purple-500/10 to-indigo-500/10 rounded-full blur-[80px]" />

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]" />
      
      <!-- Floating Particles -->
      <div ref="particlesRef">
        <div v-for="n in 12" :key="n" 
             class="particle absolute rounded-full"
             :class="n % 3 === 0 ? 'bg-primary-500/30' : n % 3 === 1 ? 'bg-emerald-500/20' : 'bg-cyan-500/20'"
             :style="{
               width: (Math.random() * 6 + 2) + 'px',
               height: (Math.random() * 6 + 2) + 'px',
               top: (Math.random() * 100) + '%',
               left: (Math.random() * 100) + '%',
             }"
        />
      </div>
    </div>

    <UContainer class="relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div>
          <div ref="badgeRef">
            <UBadge 
              variant="subtle" 
              color="primary" 
              class="mb-6 rounded-full px-5 py-2 text-sm font-semibold border border-primary-500/20 dark:border-primary-500/30 shadow-lg shadow-primary-500/10 animate-breathe"
            >
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                {{ t('landing.hero.badge') }}
              </span>
            </UBadge>
          </div>
          
          <h1 ref="titleRef" class="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            <span class="text-slate-900 dark:text-white">{{ t('landing.hero.title').split(' ').slice(0, -1).join(' ') }} </span>
            <span class="text-gradient-primary">{{ t('landing.hero.title').split(' ').slice(-1)[0] }}</span>
          </h1>
          
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed min-h-[3.5rem]">
            {{ displayedSubtitle }}<span v-if="isTyping" class="inline-block w-0.5 h-5 bg-primary-500 ml-0.5" style="animation: cursor-blink 1s step-end infinite;" />
          </p>
          
          <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4">
            <UButton 
              :to="localePath('/register')"
              size="xl" 
              color="primary" 
              variant="solid" 
              class="rounded-full px-8 py-3 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 magnetic-hover font-semibold"
              icon="i-ph-rocket-launch-duotone"
            >
              {{ t('landing.hero.cta_primary') }}
            </UButton>
            
            <UButton 
              to="#features"
              size="xl" 
              color="secondary" 
              variant="ghost" 
              class="rounded-full px-8 py-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 group font-semibold"
            >
              <span class="flex items-center gap-2">
                {{ t('landing.hero.cta_secondary') }}
                <UIcon name="i-ph-caret-down-duotone" class="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </UButton>
          </div>

          <!-- Social Proof -->
          <div ref="statsRef" class="mt-14 flex items-center gap-6">
            <div class="flex -space-x-3">
               <div v-for="i in 4" :key="i" 
                    class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center overflow-hidden shadow-md"
                    :class="[
                      i === 1 ? 'bg-gradient-to-br from-primary-400 to-primary-600' :
                      i === 2 ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' :
                      i === 3 ? 'bg-gradient-to-br from-cyan-400 to-cyan-600' :
                      'bg-gradient-to-br from-purple-400 to-purple-600'
                    ]"
               >
                 <UIcon name="i-ph-user" class="w-5 h-5 text-white/80" />
               </div>
            </div>
            <div class="text-sm text-slate-500 dark:text-slate-400">
              <span class="font-bold text-lg text-primary-500">2,000+</span>
              <br />
              <span>early adopters trust us</span>
            </div>
            <div class="h-10 w-px bg-slate-200 dark:bg-slate-700/50 mx-2 hidden sm:block" />
            <div class="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
              <span class="font-bold text-lg text-slate-700 dark:text-slate-200">4.9</span>
              <span class="text-amber-500 ml-1">★★★★★</span>
              <br />
              <span>user rating</span>
            </div>
          </div>
        </div>

        <!-- Visual / Illustration -->
        <div ref="visualRef" class="relative hidden lg:block perspective-1000">
           <!-- Decorative grid -->
           <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] mask-radial-faded" />
           
           <div class="relative w-full aspect-square transform-style-3d">
             <!-- Animated glow ring behind the card -->
             <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-emerald-500/20 rounded-full blur-3xl transform scale-75 animate-pulse-glow" />
             
             <!-- Neural network decoration -->
             <svg class="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 animate-rotate-slow" viewBox="0 0 400 400" fill="none">
               <circle cx="200" cy="200" r="150" stroke="currentColor" stroke-width="0.5" class="text-primary-500" stroke-dasharray="4 8" />
               <circle cx="200" cy="200" r="120" stroke="currentColor" stroke-width="0.3" class="text-emerald-500" stroke-dasharray="2 6" />
               <circle cx="200" cy="200" r="180" stroke="currentColor" stroke-width="0.3" class="text-cyan-500" stroke-dasharray="6 12" />
             </svg>

             <!-- Main Dashboard Card -->
             <div class="relative glass dark:bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl overflow-hidden ring-1 ring-white/10 transform hover:rotate-y-3 transition-transform duration-700 group">
                <!-- Card Header -->
                <div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                   <div class="flex items-center gap-3">
                     <div class="w-3 h-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50 animate-pulse" />
                     <span class="text-sm font-semibold text-slate-400">Live Session</span>
                   </div>
                   <div class="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 shadow-inner">
                     <UIcon name="i-ph-activity" class="w-5 h-5" />
                   </div>
                </div>

                <div class="space-y-6">
                  <!-- Chart Simulation -->
                  <div class="h-36 w-full bg-gradient-to-t from-primary-500/5 to-transparent rounded-xl relative overflow-hidden flex items-end justify-between px-3 pb-3 border border-white/5">
                     <div v-for="(h, idx) in [35, 55, 40, 70, 50, 85, 65, 90, 55, 75]" :key="idx" 
                          class="flex-1 mx-0.5 rounded-t-md transition-all duration-500 group-hover:scale-y-110 origin-bottom"
                          :style="{ 
                            height: h + '%',
                            transitionDelay: idx * 50 + 'ms'
                          }"
                          :class="h > 80 ? 'bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg shadow-primary-500/30' : 'bg-gradient-to-t from-primary-500/40 to-primary-500/20'"
                      />
                      <!-- Animated line overlay -->
                      <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <polyline 
                          points="10,90 40,65 80,75 120,45 160,55 200,25 240,40 280,15 320,35 360,20"
                          fill="none" 
                          stroke="rgba(16,185,129,0.6)" 
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                  </div>
                  
                  <!-- Stats Grid -->
                  <div class="grid grid-cols-3 gap-3">
                    <div class="bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/30 hover:border-primary-500/30 transition-colors group/stat">
                      <div class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Focus</div>
                      <div class="text-xl font-bold font-mono text-primary-500 group-hover/stat:text-glow transition-all">87.5</div>
                    </div>
                    <div class="bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/30 hover:border-emerald-500/30 transition-colors">
                       <div class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Session</div>
                       <div class="text-xl font-bold font-mono text-slate-700 dark:text-slate-200">24:12</div>
                    </div>
                    <div class="bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/30 hover:border-amber-500/30 transition-colors">
                       <div class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Level</div>
                       <div class="text-xl font-bold font-mono text-amber-500">Pro</div>
                    </div>
                  </div>
                </div>

                <!-- Shimmer overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
             </div>
             
             <!-- Floating Elements -->
             <div class="absolute -top-4 -right-4 glass dark:bg-slate-800/60 p-4 rounded-2xl shadow-xl animate-float-slow" style="animation-delay: -1s;">
               <div class="flex items-center gap-2">
                 <UIcon name="i-ph-brain-duotone" class="w-7 h-7 text-primary-500" />
                 <span class="text-xs font-bold text-primary-500">AI Active</span>
               </div>
             </div>
             <div class="absolute bottom-16 -left-8 glass dark:bg-slate-800/60 p-4 rounded-2xl shadow-xl animate-float-slow" style="animation-delay: -3s;">
               <div class="flex items-center gap-2">
                 <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span class="text-xs font-bold">EEG Connected</span>
               </div>
             </div>
             <div class="absolute top-1/2 -right-6 glass dark:bg-slate-800/60 p-3 rounded-xl shadow-xl animate-float" style="animation-delay: -5s;">
               <UIcon name="i-ph-lightning-duotone" class="w-6 h-6 text-amber-500" />
             </div>
           </div>
        </div>
      </div>
    </UContainer>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span class="text-xs text-slate-400 uppercase tracking-widest font-medium">Scroll</span>
      <div class="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-primary-500 rounded-full animate-pulse" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.mask-radial-faded {
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}
</style>
