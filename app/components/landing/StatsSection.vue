<script setup lang="ts">
import { gsap } from 'gsap'

const { t } = useI18n()

const stats = [
  { value: 2000, suffix: '+', label: 'Active Users', icon: 'i-ph-users-duotone', color: 'text-primary-500', bg: 'from-primary-500/10 to-primary-500/5' },
  { value: 98, suffix: '%', label: 'Accuracy Rate', icon: 'i-ph-target-duotone', color: 'text-emerald-500', bg: 'from-emerald-500/10 to-emerald-500/5' },
  { value: 50, suffix: 'K+', label: 'Sessions Completed', icon: 'i-ph-brain-duotone', color: 'text-cyan-500', bg: 'from-cyan-500/10 to-cyan-500/5' },
  { value: 4.9, suffix: '/5', label: 'User Rating', icon: 'i-ph-star-duotone', color: 'text-amber-500', bg: 'from-amber-500/10 to-amber-500/5' }
]

const counters = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement>()
const hasAnimated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animateCounters()
      }
    })
  }, { threshold: 0.3 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const animateCounters = () => {
  stats.forEach((stat, index) => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: stat.value,
      duration: 2,
      delay: index * 0.15,
      ease: 'power2.out',
      onUpdate: () => {
        counters.value[index] = stat.value % 1 !== 0 
          ? Math.round(obj.val * 10) / 10
          : Math.round(obj.val)
      }
    })
  })
}
</script>

<template>
  <section ref="sectionRef" class="py-16 relative overflow-hidden section-divider">
    <UContainer>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="relative group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-100 dark:border-slate-700/30 hover:border-primary-500/20 transition-all duration-300 hover:-translate-y-1 card-shimmer">
            <!-- Icon -->
            <div 
              class="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br transition-transform group-hover:scale-110 group-hover:rotate-3"
              :class="[stat.bg, stat.color]"
            >
              <UIcon :name="stat.icon" class="w-6 h-6" />
            </div>

            <!-- Counter -->
            <div class="text-3xl md:text-4xl font-extrabold font-mono mb-1" :class="stat.color">
              {{ counters[index] }}{{ stat.suffix }}
            </div>
            
            <!-- Label -->
            <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
