<script setup lang="ts">
const { t } = useI18n()
const email = ref('')
const localePath = useLocalePath()

const handleSubscribe = () => {
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>

<template>
  <section id="cta" class="py-28 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 -z-20" />
    
    <!-- Animated gradient mesh -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute -top-[30%] -right-[15%] w-[60rem] h-[60rem] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div class="absolute bottom-[0%] -left-[10%] w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-[100px] animate-float" style="animation-delay: -3s;" />
      <div class="absolute top-[40%] right-[30%] w-[20rem] h-[20rem] bg-primary-500/15 rounded-full blur-[80px] animate-breathe" />
    </div>

    <!-- Star particles -->
    <div class="absolute inset-0 pointer-events-none -z-5">
      <div v-for="n in 20" :key="n"
           class="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
           :style="{
             top: Math.random() * 100 + '%',
             left: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's',
             animationDuration: (Math.random() * 3 + 2) + 's'
           }"
      />
    </div>

    <UContainer class="relative z-10">
      <div class="text-center text-white max-w-3xl mx-auto" data-aos="zoom-in" data-aos-duration="800">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold mb-8 border border-white/10">
          <span class="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          <span>Start Free — No credit card needed</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 leading-tight">
          {{ t('landing.cta.title') }}
        </h2>
        <p class="text-xl text-indigo-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          {{ t('landing.cta.subtitle') }}
        </p>
        
        <!-- CTA Form -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
          <UInput 
            v-model="email"
            type="email" 
            placeholder="example@email.com" 
            size="xl"
            :ui="{ base: 'rounded-full bg-white/10 backdrop-blur-sm border-white/10 text-white placeholder-white/40 focus:border-primary-500 focus:ring-primary-500/20' }"
            class="flex-1"
          >
            <template #leading>
              <UIcon name="i-ph-envelope" class="text-white/40" />
            </template>
          </UInput>
          
          <UButton 
            @click="handleSubscribe"
            size="xl" 
            color="primary" 
            variant="solid" 
            class="rounded-full px-8 shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 magnetic-hover font-semibold whitespace-nowrap"
          >
            {{ t('landing.cta.button') }}
          </UButton>
        </div>

        <!-- Trust indicators -->
        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-200/50">
          <div class="flex items-center gap-2">
            <UIcon name="i-ph-shield-check" class="w-4 h-4" />
            <span>SSL Encrypted</span>
          </div>
          <div class="w-px h-4 bg-indigo-200/20 hidden sm:block" />
          <div class="flex items-center gap-2">
            <UIcon name="i-ph-lock" class="w-4 h-4" />
            <span>GDPR Compliant</span>
          </div>
          <div class="w-px h-4 bg-indigo-200/20 hidden sm:block" />
          <div class="flex items-center gap-2">
            <UIcon name="i-ph-x-circle" class="w-4 h-4" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
