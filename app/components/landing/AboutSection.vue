<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  {
    num: '01',
    text: t('landing.about.steps.1'),
    icon: 'i-ph-headset-duotone'
  },
  {
    num: '02',
    text: t('landing.about.steps.2'),
    icon: 'i-ph-play-circle-duotone'
  },
  {
    num: '03',
    text: t('landing.about.steps.3'),
    title: t('landing.about.steps.3'),
    icon: 'i-ph-lightning-duotone'
  },
  {
    num: '04',
    text: t('landing.about.steps.4'),
    icon: 'i-ph-trend-up-duotone'
  }
])
</script>

<template>
  <section id="about" class="py-24 relative overflow-hidden bg-white dark:bg-slate-900">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div data-aos="fade-right">
          <h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
            {{ t('landing.about.title') }}
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            {{ t('landing.about.description') }}
          </p>

          <div class="space-y-8 relative">
             <!-- Connector Line - Absolute to the list -->
             <div class="absolute top-4 bottom-4 left-[23px] w-px bg-slate-200 dark:bg-slate-800 -z-10" />

            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex gap-6 group items-start"
            >
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 text-primary-500 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 shadow-sm">
                  <UIcon :name="step.icon" class="w-6 h-6" />
                </div>
              </div>
              
              <div class="pt-2">
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {{ step.text }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="relative hidden lg:flex items-center justify-center p-8" data-aos="fade-left">
           <!-- Decorative Background Blob -->
           <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-slate-100 to-transparent dark:from-slate-800/50 rounded-full blur-3xl -z-10" />

           <div class="relative w-full max-w-sm aspect-[9/16] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
             <!-- Top Bar -->
             <div class="absolute top-0 left-0 right-0 h-8 bg-slate-900 z-20 flex justify-center items-center">
               <div class="w-20 h-5 bg-black rounded-b-xl" />
             </div>

             <!-- Screen Content -->
             <div class="h-full w-full bg-slate-50 dark:bg-slate-900 pt-10 px-4 flex flex-col relative">
               <!-- Header -->
               <div class="flex justify-between items-center mb-6">
                 <div class="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full" />
                 <div class="w-8 h-8 text-slate-400">
                   <UIcon name="i-ph-bell" class="w-6 h-6" />
                 </div>
               </div>

               <!-- Main Card -->
               <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-500/30 mb-6">
                 <div class="flex justify-between items-start mb-8">
                   <div>
                     <div class="text-indigo-100 text-sm font-medium">Focus Score</div>
                     <div class="text-3xl font-bold">94%</div>
                   </div>
                   <div class="bg-white/20 p-2 rounded-lg">
                     <UIcon name="i-ph-trend-up" class="w-5 h-5" />
                   </div>
                 </div>
                 <div class="w-full bg-black/20 h-1 rounded-full overflow-hidden">
                   <div class="bg-white h-full w-[94%]" />
                 </div>
               </div>

               <!-- Activity Feed -->
               <div class="space-y-3">
                 <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Recent Activity</div>
                 
                 <div v-for="i in 3" :key="i" class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center gap-3">
                   <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                     <UIcon name="i-ph-check-circle" class="w-5 h-5" />
                   </div>
                   <div>
                     <div class="text-sm font-bold text-slate-900 dark:text-white">Focus Session</div>
                     <div class="text-xs text-slate-500">25 mins completed</div>
                   </div>
                 </div>
               </div>
               
               <!-- Floating Action Button -->
               <div class="absolute bottom-6 right-6 w-14 h-14 bg-primary-500 rounded-full shadow-lg shadow-primary-500/40 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                 <UIcon name="i-ph-play-fill" class="w-6 h-6" />
               </div>
             </div>
           </div>

           <!-- Floating Card -->
           <div class="absolute top-1/3 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float" style="animation-delay: -1s;">
             <div class="flex items-center gap-3">
               <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span class="text-sm font-bold">EEG Connected</span>
             </div>
           </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(var(--tw-gradient-stops));
}
</style>
