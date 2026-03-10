<template>
   <div class="empty-state">
      <UIcon :name="icon" class="empty-state__icon" />
      <p class="empty-state__title">{{ title }}</p>
      <p class="empty-state__description">{{ description }}</p>
   </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string; title: string; description: string }>()
</script>

<style scoped>
.empty-state {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 40px 20px;
   text-align: center;
}

.empty-state__icon {
   width: 60px;
   height: 60px;
   color: #D1D5DB;
   margin-bottom: 16px;
}

:root.dark .empty-state__icon {
   color: #4B5563;
}

.empty-state__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0 0 8px;
}

:root.dark .empty-state__title {
   color: #9CA3AF;
}

.empty-state__description {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .empty-state__description {
   color: #6B7280;
}
</style>
