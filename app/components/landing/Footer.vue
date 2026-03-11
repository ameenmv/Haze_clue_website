<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

const productLinks = [
  { label: 'Features', to: '#features' },
  { label: 'Technology', to: '#technology' },
  { label: 'How It Works', to: '#about' }
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Us', to: '/contact' }
]

const socialLinks = [
  { icon: 'i-ph-twitter-logo', label: 'Twitter' },
  { icon: 'i-ph-github-logo', label: 'GitHub' },
  { icon: 'i-ph-linkedin-logo', label: 'LinkedIn' },
  { icon: 'i-ph-instagram-logo', label: 'Instagram' }
]
</script>

<template>
  <footer class="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50 relative overflow-hidden">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

    <UContainer class="py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3 mb-5 group">
            <img src="/logo.png" alt="Haze Clue Logo" class="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
            <span class="text-xl font-extrabold text-gradient-primary">
              Haze Clue
            </span>
          </NuxtLink>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6 text-sm">
            Empowering minds through neuroscience and technology. Join the revolution in cognitive enhancement.
          </p>
          <!-- Newsletter mini -->
          <div class="flex items-center gap-2 max-w-xs">
            <UInput 
              placeholder="Get updates..." 
              size="sm"
              :ui="{ base: 'rounded-full text-sm' }"
              class="flex-1"
            />
            <UButton 
              size="sm" 
              color="primary" 
              variant="solid" 
              class="rounded-full px-4"
              icon="i-ph-arrow-right"
            />
          </div>
        </div>
        
        <!-- Product Links -->
        <div>
          <h4 class="font-bold mb-5 text-slate-900 dark:text-white text-sm uppercase tracking-wider">Product</h4>
           <ul class="space-y-3">
             <li v-for="link in productLinks" :key="link.label">
               <a :href="link.to" class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-1.5 group">
                 <span class="w-0 group-hover:w-2 h-px bg-primary-500 transition-all duration-300" />
                 {{ link.label }}
               </a>
             </li>
           </ul>
        </div>

        <!-- Legal Links -->
        <div>
           <h4 class="font-bold mb-5 text-slate-900 dark:text-white text-sm uppercase tracking-wider">Legal</h4>
           <ul class="space-y-3">
             <li v-for="link in legalLinks" :key="link.label">
               <NuxtLink :to="link.to" class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-1.5 group">
                 <span class="w-0 group-hover:w-2 h-px bg-primary-500 transition-all duration-300" />
                 {{ link.label }}
               </NuxtLink>
             </li>
           </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-slate-100 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-slate-400 dark:text-slate-500">
          {{ t('landing.footer.rights') }}
        </p>
        
        <!-- Social Links -->
        <div class="flex gap-2">
          <button
            v-for="social in socialLinks"
            :key="social.label"
            class="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            :aria-label="social.label"
          >
            <UIcon :name="social.icon" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
