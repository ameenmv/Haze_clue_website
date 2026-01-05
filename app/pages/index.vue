<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UContainer class="flex-center pt-4 text-center">
    <div>
      <h1 class="text-4xl font-bold mb-4">
        {{ t("app.title") }}
      </h1>
      <p class="mb-4">
        {{ t("app.description") }}
      </p>
    </div>
  </UContainer>
</template>
