<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  {
    num: '01',
    text: t('landing.about.steps.1'),
    icon: 'i-ph-headset-duotone',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    activeBg: 'group-hover:bg-blue-500',
    description: 'Connect the EEG headset via Bluetooth for seamless neural monitoring.'
  },
  {
    num: '02',
    text: t('landing.about.steps.2'),
    icon: 'i-ph-play-circle-duotone',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    activeBg: 'group-hover:bg-emerald-500',
    description: 'Choose from guided meditation, deep work, or learning modes.'
  },
  {
    num: '03',
    text: t('landing.about.steps.3'),
    icon: 'i-ph-lightning-duotone',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    activeBg: 'group-hover:bg-amber-500',
    description: 'AI-driven micro-stimulation adapts in real-time to your brain state.'
  },
  {
    num: '04',
    text: t('landing.about.steps.4'),
    icon: 'i-ph-trend-up-duotone',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    activeBg: 'group-hover:bg-purple-500',
    description: 'Track improvements over time with detailed cognitive analytics.'
  }
])
</script>

<template>
  <section id="about" class="py-28 relative overflow-hidden bg-white dark:bg-slate-950 section-divider">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Text Content -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-6" data-aos="fade-up">
            <UIcon name="i-ph-compass-duotone" class="w-4 h-4" />
            <span>How It Works</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-display font-extrabold mb-6" data-aos="fade-up" data-aos-delay="100">
            <span class="text-slate-900 dark:text-white">{{ t('landing.about.title').split(' ').slice(0, -1).join(' ') }} </span>
            <span class="text-gradient-primary">{{ t('landing.about.title').split(' ').slice(-1)[0] }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-14 leading-relaxed max-w-lg" data-aos="fade-up" data-aos-delay="150">
            {{ t('landing.about.description') }}
          </p>

          <div class="space-y-6 relative">
             <!-- Connector Line -->
             <div class="absolute top-6 bottom-6 left-[27px] w-px bg-gradient-to-b from-blue-500/30 via-emerald-500/30 via-amber-500/30 to-purple-500/30" />

            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex gap-5 group items-start relative"
              data-aos="fade-up"
              :data-aos-delay="200 + index * 100"
            >
              <!-- Step Icon -->
              <div class="relative z-10 shrink-0">
                <div 
                  class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg border border-slate-200/50 dark:border-slate-700/30 group-hover:text-white group-hover:border-transparent"
                  :class="[step.bg, step.color, step.activeBg]"
                >
                  <UIcon :name="step.icon" class="w-6 h-6" />
                </div>
              </div>
              
              <!-- Step Content -->
              <div class="pt-1 flex-1">
                <div class="flex items-center gap-3 mb-1">
                  <span class="text-xs font-bold text-slate-300 dark:text-slate-600 font-mono">STEP {{ step.num }}</span>
                </div>
                <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors duration-300">
                  {{ step.text }}
                </h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Content - Phone Mockup -->
        <div class="relative hidden lg:flex items-center justify-center p-8" data-aos="fade-left" data-aos-duration="1000">
           <!-- Background decoration -->
           <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full blur-[100px] -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10" />
           
           <!-- Orbit ring -->
           <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-dashed border-primary-500/10 rounded-full animate-rotate-slow" style="animation-duration: 30s;">
             <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500/30 rounded-full blur-sm" />
           </div>

           <!-- Phone Frame -->
           <div class="relative w-full max-w-[280px] aspect-[9/16] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl shadow-black/20 overflow-hidden ring-1 ring-white/5">
             <!-- Notch -->
             <div class="absolute top-0 left-0 right-0 h-7 bg-slate-900 z-20 flex justify-center items-end pb-0.5">
               <div class="w-24 h-5 bg-black rounded-b-2xl" />
             </div>

             <!-- Screen Content -->
             <div class="h-full w-full bg-slate-950 pt-9 px-4 flex flex-col relative overflow-hidden">
               <!-- Status Bar -->
               <div class="flex justify-between items-center mb-5 text-[10px] text-slate-500 font-medium">
                 <span>9:41</span>
                 <div class="flex gap-1 items-center">
                   <div class="w-4 h-2 border border-slate-500 rounded-sm relative">
                     <div class="absolute inset-0.5 bg-primary-500 rounded-[1px]" style="width: 70%;" />
                   </div>
                 </div>
               </div>

               <!-- Header -->
               <div class="flex justify-between items-center mb-5">
                 <div class="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                   <UIcon name="i-ph-user" class="w-4 h-4 text-slate-400" />
                 </div>
                 <span class="text-sm font-bold text-white">Haze Clue</span>
                 <div class="relative">
                   <UIcon name="i-ph-bell" class="w-5 h-5 text-slate-400" />
                   <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary-500 rounded-full" />
                 </div>
               </div>

               <!-- Main Card -->
               <div class="bg-gradient-to-br from-primary-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg shadow-primary-500/30 mb-5">
                 <div class="flex justify-between items-start mb-6">
                   <div>
                     <div class="text-white/70 text-xs font-medium mb-1">Focus Score</div>
                     <div class="text-3xl font-extrabold">94%</div>
                   </div>
                   <div class="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                     <UIcon name="i-ph-trend-up" class="w-4 h-4" />
                   </div>
                 </div>
                 <div class="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                   <div class="bg-white h-full rounded-full" style="width: 94%;" />
                 </div>
                 <div class="flex justify-between mt-2 text-[10px] text-white/60">
                   <span>Today's Progress</span>
                   <span>+12% vs yesterday</span>
                 </div>
               </div>

               <!-- Activity Feed -->
               <div>
                 <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Recent Activity</div>
                 
                 <div v-for="i in 3" :key="i" class="bg-slate-900/80 p-3 rounded-xl border border-slate-800/50 flex items-center gap-3 mb-2">
                   <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                        :class="i === 1 ? 'bg-primary-500/20 text-primary-500' : i === 2 ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500'">
                     <UIcon :name="i === 1 ? 'i-ph-check-circle' : i === 2 ? 'i-ph-brain' : 'i-ph-lightning'" class="w-4 h-4" />
                   </div>
                   <div class="flex-1">
                     <div class="text-xs font-bold text-white">{{ i === 1 ? 'Focus Session' : i === 2 ? 'Deep Learning' : 'Stimulation' }}</div>
                     <div class="text-[10px] text-slate-500">{{ i === 1 ? '25 mins completed' : i === 2 ? '18 mins completed' : 'Session optimized' }}</div>
                   </div>
                   <div class="text-[9px] text-slate-600">{{ i === 1 ? '2m ago' : i === 2 ? '1h ago' : '3h ago' }}</div>
                 </div>
               </div>
               
               <!-- Bottom Nav -->
               <div class="mt-auto pb-4 pt-3 flex justify-around border-t border-slate-800/50">
                 <UIcon name="i-ph-house" class="w-5 h-5 text-primary-500" />
                 <UIcon name="i-ph-chart-bar" class="w-5 h-5 text-slate-600" />
                 <div class="w-10 h-10 -mt-5 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/40">
                   <UIcon name="i-ph-play-fill" class="w-5 h-5 text-white" />
                 </div>
                 <UIcon name="i-ph-gear-six" class="w-5 h-5 text-slate-600" />
                 <UIcon name="i-ph-user" class="w-5 h-5 text-slate-600" />
               </div>
             </div>
           </div>

           <!-- Floating Cards -->
           <div class="absolute top-[20%] -right-2 glass dark:bg-slate-800/60 p-3 rounded-xl shadow-xl animate-float border border-white/10" style="animation-delay: -1s;">
             <div class="flex items-center gap-2">
               <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span class="text-xs font-bold">EEG Connected</span>
             </div>
           </div>
           
           <div class="absolute bottom-[25%] -left-4 glass dark:bg-slate-800/60 p-3 rounded-xl shadow-xl animate-float-slow border border-white/10" style="animation-delay: -3s;">
             <div class="flex items-center gap-2">
               <UIcon name="i-ph-lightning-duotone" class="w-4 h-4 text-amber-500" />
               <span class="text-xs font-bold">tDCS Active</span>
             </div>
           </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
