<template>
  <button
    type="button"
    :class="[
      'flex items-center justify-center transition-colors bg-white dark:bg-gray-900 border border-[#E5E7EB] dark:border-gray-700 shadow-sm',
      mode === 'icon' 
        ? 'w-[186px] h-[32px] rounded-md hover:bg-gray-50 dark:hover:bg-gray-800' // Login page style
        : 'gap-3 w-full py-3 px-4 rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800' // Register page style
    ]"
  >
    <img
      v-if="provider === 'google'"
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      class="w-5 h-5"
    />
    <Icon
      v-else-if="provider === 'facebook'"
      name="logos:facebook"
      class="w-5 h-5"
    />
    
    <span v-if="mode === 'full'" class="text-[#374151] dark:text-gray-200 font-semibold text-base">
      {{ $t(`auth.register.social.${provider}`) }}
    </span>
  </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  provider: 'google' | 'facebook'
  mode?: 'full' | 'icon'
}>(), {
  mode: 'full'
})



</script>
