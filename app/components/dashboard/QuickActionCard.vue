<template>
   <div class="quick-action-card">
      <div class="quick-action-card__icon-wrap" :style="{ background: iconBg }">
         <UIcon :name="icon" class="quick-action-card__icon" :style="{ color: iconColor }" />
      </div>
      <h4 class="quick-action-card__title">{{ title }}</h4>
      <p class="quick-action-card__description">{{ description }}</p>
      <NuxtLink v-if="to" :to="to" class="quick-action-card__link">{{ linkText }} →</NuxtLink>
      <button v-else class="quick-action-card__link" @click="$emit('action')">{{ linkText }} →</button>
   </div>
</template>

<script setup lang="ts">
interface Props {
   icon: string
   iconBg?: string
   iconColor?: string
   title: string
   description: string
   linkText: string
   to?: string
}

withDefaults(defineProps<Props>(), { iconBg: '#DBDBFE', iconColor: '#6C4EFD' })
defineEmits<{ action: [] }>()
</script>

<style scoped>
.quick-action-card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 25px;
   display: flex;
   flex-direction: column;
   flex: 1;
   min-width: 0;
   transition: box-shadow 0.2s ease, transform 0.2s ease;
}

:root.dark .quick-action-card {
   background: #1a1d27;
   border-color: #2d3040;
}

.quick-action-card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
   transform: translateY(-2px);
}

:root.dark .quick-action-card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.quick-action-card__icon-wrap {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 16px;
}

.quick-action-card__icon {
   width: 20px;
   height: 20px;
}

.quick-action-card__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0 0 8px;
}

:root.dark .quick-action-card__title {
   color: #F3F4F6;
}

.quick-action-card__description {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0 0 16px;
   flex: 1;
}

:root.dark .quick-action-card__description {
   color: #9CA3AF;
}

.quick-action-card__link {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-decoration: none;
   border: none;
   cursor: pointer;
   padding: 0;
   text-align: start;
   transition: opacity 0.2s;
}

.quick-action-card__link:hover {
   opacity: 0.8;
}
</style>
