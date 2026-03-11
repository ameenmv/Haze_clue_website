<script setup lang="ts">

const { t } = useI18n()

// Animated code lines for AI card
const codeLines = ref<string[]>([])
const allCodeLines = [
  '> initializing neural_net...',
  '> loading model: HazeClue-v3',
  '> analyzing_waves...',
  '> alpha_state: 82%',
  '> beta_state: 12%',
  '> theta_state: 6%',
  '> focus_score: computing...',
  '> focus_score: 94.2%',
  '> optimizing stimulation...',
  '> session_quality: excellent'
]

onMounted(() => {
  let lineIndex = 0
  const addLine = () => {
    if (lineIndex < allCodeLines.length) {
      codeLines.value.push(allCodeLines[lineIndex])
      lineIndex++
      setTimeout(addLine, 800 + Math.random() * 500)
    } else {
      // Reset and loop
      setTimeout(() => {
        codeLines.value = []
        lineIndex = 0
        addLine()
      }, 3000)
    }
  }

  // Start after a short delay
  setTimeout(addLine, 1500)
})
</script>

<template>
  <section id="technology" class="py-28 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden section-divider">
    <UContainer>
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-6">
          <UIcon name="i-ph-cpu-duotone" class="w-4 h-4" />
          <span>Our Technology</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-extrabold mb-5">
          <span class="text-slate-900 dark:text-white">{{ t('landing.technology.title').split(',')[0] }}</span>
          <span v-if="t('landing.technology.title').includes(',')" class="text-gradient-primary">, {{ t('landing.technology.title').split(',')[1] }}</span>
          <template v-else>
            <br />
            <span class="text-gradient-primary">{{ t('landing.technology.title').split(' ').slice(-1)[0] }}</span>
          </template>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ t('landing.technology.subtitle') }}
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
        
        <!-- Large Card: EEG -->
        <div 
          class="md:col-span-2 row-span-1 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/30 overflow-hidden relative group card-shimmer hover:shadow-2xl transition-all duration-500" 
          data-aos="fade-up" data-aos-delay="0"
        >
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
               <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                 <UIcon name="i-ph-waves-duotone" class="w-6 h-6" />
               </div>
               <h3 class="text-2xl font-extrabold mb-2 group-hover:text-blue-500 transition-colors duration-300">{{ t('landing.technology.eeg') }}</h3>
               <p class="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed">High-precision sensors capturing brainwave data with medical-grade accuracy.</p>
            </div>
            
            <div class="flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-4 transition-all duration-300 text-sm">
              <span>Learn more</span>
              <UIcon name="i-ph-arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <!-- EEG Wave Animation -->
          <div class="absolute right-0 bottom-0 w-2/3 h-full pointer-events-none overflow-hidden opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-500">
            <svg class="absolute bottom-0 right-0 w-[200%] h-48 text-blue-500" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path 
                class="animate-wave-flow"
                d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100 T500,100 T600,100 T700,100 T800,100" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
                opacity="0.6"
              />
              <path 
                class="animate-wave-flow"
                style="animation-delay: -1s; animation-duration: 4s;"
                d="M0,120 Q50,70 100,120 T200,120 T300,120 T400,120 T500,120 T600,120 T700,120 T800,120" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5"
                opacity="0.3"
              />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white dark:to-slate-800" />
          </div>
        </div>

        <!-- Tall Card: AI -->
        <div 
          class="md:col-span-1 md:row-span-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white rounded-3xl p-8 shadow-xl overflow-hidden relative group card-shimmer hover:shadow-2xl transition-all duration-500" 
          data-aos="fade-up" data-aos-delay="100"
        >
           <div class="relative z-10 h-full flex flex-col">
             <div class="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
               <UIcon name="i-ph-brain-duotone" class="w-6 h-6" />
             </div>
             <h3 class="text-2xl font-extrabold mb-3">{{ t('landing.technology.ai') }}</h3>
             <p class="text-indigo-100/80 mb-6 text-sm leading-relaxed flex-1">
               Our proprietary neural networks analyze patterns to predict and optimize your cognitive states securely and privately.
             </p>
             
             <!-- Animated Terminal -->
             <div class="bg-black/30 backdrop-blur-sm rounded-xl p-4 font-mono text-xs overflow-hidden border border-white/10">
               <div class="flex items-center gap-1.5 mb-3">
                 <div class="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                 <div class="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                 <div class="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                 <span class="ml-2 text-[10px] text-white/30">neural_engine.py</span>
               </div>
               <div class="space-y-1 h-[140px] overflow-hidden">
                 <TransitionGroup name="code-line">
                   <div 
                     v-for="(line, idx) in codeLines" 
                     :key="idx" 
                     class="text-indigo-200/70"
                     :class="{ 'text-green-400/90 font-semibold': line.includes('excellent') || line.includes('94.2%') }"
                   >
                     {{ line }}<span v-if="idx === codeLines.length - 1" class="inline-block w-1.5 h-3 bg-white/50 ml-0.5" style="animation: cursor-blink 1s step-end infinite;" />
                   </div>
                 </TransitionGroup>
               </div>
             </div>
           </div>
           
           <!-- Background gradient overlay -->
           <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
           
           <!-- Decorative dots -->
           <div class="absolute top-4 right-4 grid grid-cols-3 gap-1.5 opacity-20">
             <div v-for="i in 9" :key="i" class="w-1.5 h-1.5 rounded-full bg-white" />
           </div>
        </div>

        <!-- Card: tDCS -->
        <div 
          class="md:col-span-2 row-span-1 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/30 overflow-hidden relative group card-shimmer hover:shadow-2xl transition-all duration-500" 
          data-aos="fade-up" data-aos-delay="200"
        >
           <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
               <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                 <UIcon name="i-ph-lightning-duotone" class="w-6 h-6" />
               </div>
               <h3 class="text-2xl font-extrabold mb-2 group-hover:text-amber-500 transition-colors duration-300">{{ t('landing.technology.tdcs') }}</h3>
               <p class="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed">Safe, non-invasive electrical stimulation to prime neurons for learning.</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 text-amber-500 font-semibold group-hover:gap-3 transition-all duration-300 text-sm">
                <UIcon name="i-ph-shield-check" class="w-5 h-5" />
                <span>FDA-Class II Compliant</span>
              </div>
              <div class="w-px h-5 bg-slate-200 dark:bg-slate-700" />
              <div class="text-xs text-slate-400">
                <span class="font-bold text-slate-600 dark:text-slate-300">0.5-2.0mA</span> safe range
              </div>
            </div>
           </div>
           
           <!-- Decorative glow -->
           <div class="absolute right-0 top-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <div class="absolute inset-0 bg-gradient-to-l from-amber-500/10 to-transparent blur-[60px]" />
           </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.code-line-enter-active {
  transition: all 0.3s ease-out;
}
.code-line-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>
