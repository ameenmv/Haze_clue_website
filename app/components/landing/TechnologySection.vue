<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="technology" class="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
    <UContainer>
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
          {{ t('landing.technology.title') }}
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          {{ t('landing.technology.subtitle') }}
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        <!-- Large Card: EEG -->
        <div class="md:col-span-2 row-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative group" data-aos="fade-up" data-aos-delay="0">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
               <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-4">
                 <UIcon name="i-ph-waves-duotone" class="w-6 h-6" />
               </div>
               <h3 class="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ t('landing.technology.eeg') }}</h3>
               <p class="text-slate-500 dark:text-slate-400 max-w-sm">High-precision sensors capturing brainwave data with medical-grade accuracy.</p>
            </div>
            
            <div class="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all duration-300">
              <span class="text-glow-sm">Learn more</span>
              <UIcon name="i-ph-arrow-right" />
            </div>
          </div>
          
          <!-- Abstract Visualization -->
          <div class="absolute right-0 bottom-0 w-2/3 h-full opacity-10 dark:opacity-20 pointer-events-none group-hover:opacity-20 transition-opacity">
             <div class="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent blur-2xl" />
             <!-- SVG Wave Pattern -->
             <svg class="absolute bottom-0 right-0 w-full h-48 text-blue-500 transform translate-y-12 translate-x-12" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 50 Q 25 20 50 50 T 100 50 L 100 100 L 0 100 Z" fill="currentColor" />
             </svg>
          </div>
        </div>

        <!-- Tall Card: AI -->
        <div class="md:col-span-1 md:row-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl p-8 shadow-lg overflow-hidden relative group" data-aos="fade-up" data-aos-delay="100">
           <div class="relative z-10 h-full flex flex-col">
             <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
               <UIcon name="i-ph-brain-duotone" class="w-6 h-6" />
             </div>
             <h3 class="text-2xl font-bold mb-4">{{ t('landing.technology.ai') }}</h3>
             <p class="text-indigo-100 mb-8 flex-1">
               Our proprietary neural networks analyze patterns to predict and optimize your cognitive states securely and privately.
             </p>
             
             <!-- Fake Code/Data Viz -->
             <div class="bg-black/20 rounded-xl p-4 font-mono text-xs text-indigo-200 overflow-hidden">
               <div class="flex items-center gap-2 mb-2">
                 <div class="w-2 h-2 rounded-full bg-red-400" />
                 <div class="w-2 h-2 rounded-full bg-yellow-400" />
                 <div class="w-2 h-2 rounded-full bg-green-400" />
               </div>
               <div class="space-y-1 opacity-70">
                 <div>> analyzing_waves...</div>
                 <div>> alpha_state: 82%</div>
                 <div>> beta_state: 12%</div>
                 <div>> optimizing...</div>
               </div>
             </div>
           </div>
           
           <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <!-- Card: tDCS -->
        <div class="md:col-span-2 row-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative group" data-aos="fade-up" data-aos-delay="200">
           <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
               <div class="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-4">
                 <UIcon name="i-ph-lightning-duotone" class="w-6 h-6" />
               </div>
               <h3 class="text-2xl font-bold mb-2">{{ t('landing.technology.tdcs') }}</h3>
               <p class="text-slate-500 dark:text-slate-400 max-w-sm">Safe, non-invasive electrical stimulation to prime neurons for learning.</p>
            </div>
             <div class="flex items-center gap-2 text-amber-600 font-medium group-hover:gap-4 transition-all duration-300">
              <span>Safety Protocols</span>
              <UIcon name="i-ph-shield-check" />
            </div>
           </div>
           
            <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 dark:opacity-20 pointer-events-none">
             <div class="absolute inset-0 bg-amber-500 blur-[80px] rounded-full transform translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>
