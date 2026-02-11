<script setup lang="ts">
const { t } = useI18n()

const features = computed(() => [
  {
    icon: 'i-ph-monitor-duotone',
    title: t('landing.features.items.monitoring.title'),
    description: t('landing.features.items.monitoring.description'),
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: 'i-ph-brain-duotone',
    title: t('landing.features.items.focus.title'),
    description: t('landing.features.items.focus.description'),
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: 'i-ph-chart-line-up-duotone',
    title: t('landing.features.items.analytics.title'),
    description: t('landing.features.items.analytics.description'),
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: 'i-ph-lightning-duotone',
    title: t('landing.features.items.tdcs.title'),
    description: t('landing.features.items.tdcs.description'),
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  }
])
</script>

<template>
  <section id="features" class="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
    <UContainer>
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
          {{ t('landing.features.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg">
          {{ t('landing.features.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 hover:-translate-y-2 hover-glow relative overflow-hidden"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Hover Gradient Blob -->
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors" />

          <div 
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110 relative z-10"
            :class="[feature.bg, feature.color]"
          >
            <UIcon :name="feature.icon" class="w-8 h-8" />
          </div>
          
          <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors relative z-10">
            {{ feature.title }}
          </h3>
          
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
             {{ feature.description }}
          </p>
        </div>
      </div>
    </UContainer>

    <!-- Decorative Elements -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -z-10" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
  </section>
</template>
