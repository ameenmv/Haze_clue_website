<template>
  <div
    class="relative overflow-hidden size-full"
    v-bind="containerAttrs"
  >
    <USkeleton
      v-if="showSkeleton && loading"
      :class="mergedSkeletonClass"
    />
    <NuxtImg
      ref="imgRef"
      :src="src"
      :alt="alt"
      :class="mergedImgClass"
      v-bind="imgAttrs"
      :loading="lazy ? 'lazy' : 'eager' "
      :fetch-priority="fetchPriority"
      @load="onLoad"
      @error="onError"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const DEFAULT_IMG_CLASS = 'size-full object-cover'
const DEFAULT_SKELETON_CLASS = 'size-full'

interface AppImageProps {
  src: string | undefined
  alt: string | undefined
  containerClass?: string
  imgClass?: string
  skeletonClass?: string
  containerAttrs?: Record<string, unknown>
  imgAttrs?: Record<string, unknown>
  showSkeleton?: boolean
  format?: string
  lazy?: boolean
  fetchPriority?: 'auto' | 'high' | 'low'
}

const props = withDefaults(defineProps<AppImageProps>(), {
  containerClass: '',
  imgClass: '',
  skeletonClass: '',
  containerAttrs: () => ({}),
  imgAttrs: () => ({}),
  showSkeleton: true,
  format: 'webp',
  lazy: true,
  fetchPriority: 'low'
})

const loading = ref(true)
const imgRef = ref<HTMLImageElement | null>(null)

const showSkeleton = computed(() => props.showSkeleton !== false)

const mergedImgClass = computed(() =>
  [DEFAULT_IMG_CLASS, props.imgClass].filter(Boolean).join(' ')
)

const mergedSkeletonClass = computed(() =>
  [DEFAULT_SKELETON_CLASS, props.skeletonClass].filter(Boolean).join(' ')
)

function onLoad() {
  loading.value = false
}

function onError() {
  loading.value = false
}

watch(
  () => props.src,
  () => {
    loading.value = true
  }
)

onMounted(() => {
  if (imgRef.value && imgRef.value.complete) {
    loading.value = false
  }
})
</script>
