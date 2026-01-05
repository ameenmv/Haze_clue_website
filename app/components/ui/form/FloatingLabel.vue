<template>
  <label
    :class="[
      'floating-label',
      {
        '!text-[#707070] text-sm top-1 peer-focus:!top-1 peer-placeholder-shown:!top-[15px]':
          variant === 'soft'
      }
    ]"
  >
    <span :class="{ 'bg-transparent px-1 mx-1': variant === 'soft' }">{{
      title
    }}</span>
  </label>
</template>

<script lang="ts" setup>
interface FloatingLabelProps {
  title: string
  variant?: 'none' | 'soft'
}

defineProps<FloatingLabelProps>()
</script>

<style scoped></style>
