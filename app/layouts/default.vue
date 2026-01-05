<script setup lang="ts">
// Layout logic here
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
