<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
    <UContainer>
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div class="col-span-1 md:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 mb-4 group">
            <img src="/logo.png" alt="Haze Clue Logo" class="w-8 h-8 object-contain" />
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">
              Haze Clue
            </span>
          </NuxtLink>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm">
            Empowering minds through neuroscience and technology. Join the revolution in cognitive enhancement.
          </p>
        </div>
        
        <div>
          <h4 class="font-bold mb-4 text-slate-900 dark:text-white">Product</h4>
           <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
             <li><a href="#features" class="hover:text-primary-500 transition-colors">Features</a></li>
             <li><a href="#technology" class="hover:text-primary-500 transition-colors">Technology</a></li>
             <li><a href="#pricing" class="hover:text-primary-500 transition-colors">Pricing</a></li>
           </ul>
        </div>

        <div>
           <h4 class="font-bold mb-4 text-slate-900 dark:text-white">Legal</h4>
           <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
             <li v-for="link in links" :key="link.label">
               <NuxtLink :to="link.to" class="hover:text-primary-500 transition-colors">{{ link.label }}</NuxtLink>
             </li>
           </ul>
        </div>
      </div>
      
      <div class="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-slate-500 dark:text-slate-400">
          {{ t('landing.footer.rights') }}
        </p>
        
        <div class="flex gap-4">
          <UButton 
            v-for="icon in ['i-ph-twitter-logo', 'i-ph-github-logo', 'i-ph-linkedin-logo']" 
            :key="icon"
            :icon="icon"
            color="secondary"
            variant="ghost" 
            size="sm"
            class="hover:text-primary-500"
          />
        </div>
      </div>
    </UContainer>
  </footer>
</template>
