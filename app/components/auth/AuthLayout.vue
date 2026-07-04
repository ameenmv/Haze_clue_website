<template>
  <div class="flex min-h-screen w-full bg-[#0a0a0a] transition-colors duration-300 overflow-hidden font-poppins">
    
    <!-- Left Side - Branding Card (Visible on lg+) -->
    <div class="hidden lg:flex w-[55%] p-6">
      <div class="w-full h-full bg-[#18181b] rounded-3xl border border-white/5 p-12 flex flex-col relative overflow-hidden">
        
        <!-- Logo Area -->
        <div class="flex items-center gap-3 z-10 mb-16">
          <img src="/logo-v2.png" alt="Haze Clue" class="w-16 h-16 object-contain" />
          <span class="text-2xl font-bold text-white font-display">Haze Clue</span>
        </div>

        <!-- Content Area -->
        <div class="z-10 max-w-xl">
          <h1 class="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
            Welcome to Haze Clue System
          </h1>
          <p class="text-[#a1a1aa] text-lg mb-12 max-w-lg">
            Secure, advanced, and automated platform for your cognitive enhancement needs.
          </p>

          <!-- Feature List -->
          <div class="space-y-8">
            <div class="flex gap-4 items-start" v-for="feature in features" :key="feature.title">
              <div class="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70">
                <UIcon name="i-ph-check-bold" class="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg mb-1">{{ feature.title }}</h3>
                <p class="text-[#a1a1aa] text-sm leading-relaxed">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Decorative subtle background gradients -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      </div>
    </div>

    <!-- Right Side - Form Container -->
    <div class="flex-1 flex flex-col relative w-full lg:w-[45%]">
      
      <!-- Top Actions (Lang, Theme) -->
      <div class="absolute top-6 right-6 flex items-center gap-3 z-20">
        <AppLanguageSwitcher />
        <!-- Intentionally hiding dark mode toggle as this layout is forced dark -->
      </div>

      <div class="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 overflow-y-auto w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  { title: 'AI-Powered Insights', desc: 'Gain deep, actionable insights with our advanced neuro-analysis engine.' },
  { title: 'Advanced Brain Monitoring', desc: 'Real-time cognitive tracking and emotional state evaluation.' },
  { title: 'Enterprise-Grade Security', desc: 'Your data is protected by industry-leading encryption and compliance.' },
  { title: 'Seamless Integration', desc: 'Connect your entire workflow with role-based access control.' }
]
</script>
