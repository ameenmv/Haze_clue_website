<script setup lang="ts">
const { t } = useI18n()

const features = computed(() => [
  {
    icon: 'i-ph-monitor-duotone',
    title: t('landing.features.items.monitoring.title'),
    description: t('landing.features.items.monitoring.description'),
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    borderHover: 'hover:border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
    gradient: 'from-blue-500/20 to-cyan-500/10'
  },
  {
    icon: 'i-ph-brain-duotone',
    title: t('landing.features.items.focus.title'),
    description: t('landing.features.items.focus.description'),
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    borderHover: 'hover:border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/10',
    gradient: 'from-purple-500/20 to-pink-500/10'
  },
  {
    icon: 'i-ph-chart-line-up-duotone',
    title: t('landing.features.items.analytics.title'),
    description: t('landing.features.items.analytics.description'),
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
    gradient: 'from-emerald-500/20 to-green-500/10'
  },
  {
    icon: 'i-ph-lightning-duotone',
    title: t('landing.features.items.tdcs.title'),
    description: t('landing.features.items.tdcs.description'),
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    glowColor: 'group-hover:shadow-amber-500/10',
    gradient: 'from-amber-500/20 to-orange-500/10'
  }
])
</script>

<template>
  <section id="features" class="py-28 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden section-divider">
    <UContainer>
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-6">
          <UIcon name="i-ph-sparkle-duotone" class="w-4 h-4" />
          <span>Why Choose Us</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-extrabold mb-5">
          <span class="text-slate-900 dark:text-white">{{ t('landing.features.title').split(' ')[0] }} </span>
          <span class="text-gradient-primary">{{ t('landing.features.title').split(' ').slice(1).join(' ') }}</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ t('landing.features.subtitle') }}
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group relative bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl card-shimmer gradient-border"
          :class="[feature.glowColor]"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Top gradient blob -->
          <div 
            class="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="feature.gradient" 
          />

          <!-- Feature Number -->
          <div class="absolute top-4 right-4 text-6xl font-extrabold text-slate-100 dark:text-slate-800/50 select-none transition-colors group-hover:text-slate-200 dark:group-hover:text-slate-700/50">
            0{{ index + 1 }}
          </div>

          <!-- Icon -->
          <div 
            class="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            :class="[feature.bg, feature.color]"
          >
            <UIcon :name="feature.icon" class="w-7 h-7" />
          </div>
          
          <!-- Title -->
          <h3 class="relative z-10 text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
            {{ feature.title }}
          </h3>
          
          <!-- Description -->
          <p class="relative z-10 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
             {{ feature.description }}
          </p>

          <!-- Bottom indicator line -->
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
        </div>
      </div>
    </UContainer>

    <!-- Decorative Elements -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary-500/5 rounded-full blur-[100px] -z-10" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10" />
  </section>
</template>
