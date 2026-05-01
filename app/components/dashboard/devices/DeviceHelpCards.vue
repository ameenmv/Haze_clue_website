<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Setup Guide -->
      <UCard class="hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:bg-gradient-to-br dark:from-[#1e1b4b]/80 dark:to-[#1a1d27]/80 bg-gradient-to-br from-[#EFF6FF] to-white border-blue-100 dark:border-indigo-900/50">
         <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
               <UIcon name="i-lucide-file-text" class="w-6 h-6 text-white" />
            </div>
            <div class="flex flex-col gap-2">
               <h5 class="font-bold text-lg text-gray-900 dark:text-gray-100">{{ $t('dashboard.devices.setupGuide.title') }}</h5>
               <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ $t('dashboard.devices.setupGuide.description') }}</p>
               <UButton color="primary" variant="link" :padded="false" class="mt-1 font-semibold" @click="$emit('viewGuide')">
                  {{ $t('dashboard.devices.setupGuide.link') }} <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
               </UButton>
            </div>
         </div>
      </UCard>

      <!-- Need Help? -->
      <UCard class="hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:bg-gradient-to-br dark:from-[#2e1065]/80 dark:to-[#1a1d27]/80 bg-gradient-to-br from-[#FAF5FF] to-white border-purple-100 dark:border-purple-900/50">
         <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-fuchsia-500/20">
               <UIcon name="i-lucide-headphones" class="w-6 h-6 text-white" />
            </div>
            <div class="flex flex-col gap-2">
               <h5 class="font-bold text-lg text-gray-900 dark:text-gray-100">{{ $t('dashboard.devices.needHelp.title') }}</h5>
               <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ $t('dashboard.devices.needHelp.description') }}</p>
               <UButton color="fuchsia" variant="link" :padded="false" class="mt-1 font-semibold" @click="$emit('contactSupport')">
                  {{ $t('dashboard.devices.needHelp.link') }} <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
               </UButton>
            </div>
         </div>
      </UCard>
   </div>
</template>

<script setup lang="ts">
defineEmits<{ viewGuide: []; contactSupport: [] }>()
</script>
