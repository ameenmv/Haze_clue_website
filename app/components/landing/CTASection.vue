<script setup lang="ts">
const { t } = useI18n()
const email = ref('')
const localePath = useLocalePath()

const handleSubscribe = () => {
  // Demo functionality
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>

<template>
  <section id="cta" class="py-24 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 -z-20" />
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10" />

    <!-- Animated Shapes -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
       <div class="absolute -top-[20%] -right-[10%] w-[50rem] h-[50rem] bg-indigo-500/30 rounded-full blur-3xl animate-pulse-glow" />
       <div class="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-purple-500/30 rounded-full blur-3xl animate-float" />
    </div>

    <UContainer class="relative z-10 text-center text-white">
      <div data-aos="zoom-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
          {{ t('landing.cta.title') }}
        </h2>
        <p class="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          {{ t('landing.cta.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <UInput 
            v-model="email"
            type="email" 
            placeholder="example@email.com" 
            size="xl"
            :ui="{ base: 'rounded-full' }"
            class="flex-1"
          >
            <template #leading>
              <UIcon name="i-ph-envelope" class="text-gray-400" />
            </template>
          </UInput>
          
          <UButton 
            @click="handleSubscribe"
            size="xl" 
            color="primary" 
            variant="solid" 
            class="rounded-full px-8 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
          >
            {{ t('landing.cta.button') }}
          </UButton>
        </div>

        <p class="mt-6 text-sm text-indigo-200/60">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </UContainer>
  </section>
</template>
