<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id" class="text-sm font-semibold text-[#374151] dark:text-gray-200">
      {{ label }}
    </label>
    <div class="relative">
      <div
        v-if="icon"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <slot name="icon">
           <Icon :name="icon" class="w-5 h-5" />
        </slot>
      </div>
      <input
        :id="id"
        v-model="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        :class="[
          'w-full px-4 py-4 rounded-xl border-2 transition-colors outline-none text-[#374151] dark:text-white placeholder:text-[#9CA3AF] dark:placeholder:text-gray-500 bg-white dark:bg-gray-800',
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-[#E5E7EB] dark:border-gray-700 focus:border-[#6C4EFD] dark:focus:border-[#6C4EFD]',
          icon ? 'pl-12' : '',
          type === 'password' ? 'pr-12' : ''
        ]"
        v-bind="$attrs"
      />
      
      <button
        v-if="type === 'password'"
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        @click="showPassword = !showPassword"
      >
        <Icon
          :name="showPassword ? 'ph:eye' : 'ph:eye-slash'"
          class="w-5 h-5"
        />
      </button>
    </div>
    <span v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  modelValue?: string
  type?: string
  placeholder?: string
  error?: string
  id?: string
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  id: () => 'input-' + Math.random().toString(36).substr(2, 9)
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
