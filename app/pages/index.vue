<script setup lang="ts">
import AboutSection from '~/components/landing/AboutSection.vue'
import CTASection from '~/components/landing/CTASection.vue'
import FeaturesSection from '~/components/landing/FeaturesSection.vue'
import HeroSection from '~/components/landing/HeroSection.vue'
import TechnologySection from '~/components/landing/TechnologySection.vue'

definePageMeta({
  layout: 'landing'
})

const { t } = useI18n()

useHead({
  title: t('landing.hero.title'),
  meta: [
    { name: 'description', content: t('landing.hero.subtitle') }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <TechnologySection />
    <CTASection />
  </div>
</template>
