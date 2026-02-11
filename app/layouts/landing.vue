<script setup lang="ts">
import Footer from '~/components/landing/Footer.vue';
import Navbar from '~/components/landing/Navbar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body transition-colors duration-300">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
