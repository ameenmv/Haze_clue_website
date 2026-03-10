<template>
   <div class="stat-card">
      <div class="stat-card__icon-wrap" :style="{ background: iconBg }">
         <UIcon :name="icon" class="stat-card__icon" :style="{ color: iconColor }" />
      </div>
      <p class="stat-card__label">{{ label }}</p>
      <p class="stat-card__value">{{ value }}</p>
      <p class="stat-card__hint">{{ hint }}</p>
   </div>
</template>

<script setup lang="ts">
interface Props {
   icon: string
   iconBg?: string
   iconColor?: string
   label: string
   value: string | number
   hint: string
}

withDefaults(defineProps<Props>(), {
   iconBg: '#DBDBFE',
   iconColor: '#6C4EFD'
})
</script>

<style scoped>
.stat-card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 25px;
   display: flex;
   flex-direction: column;
   gap: 4px;
   flex: 1;
   min-width: 0;
   transition: box-shadow 0.2s ease, transform 0.2s ease;
}

:root.dark .stat-card {
   background: #1a1d27;
   border-color: #2d3040;
}

.stat-card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
   transform: translateY(-2px);
}

:root.dark .stat-card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.stat-card__icon-wrap {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 12px;
}

.stat-card__icon {
   width: 20px;
   height: 20px;
}

.stat-card__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .stat-card__label {
   color: #9CA3AF;
}

.stat-card__value {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 30px;
   line-height: 36px;
   color: #111827;
   margin: 0;
}

:root.dark .stat-card__value {
   color: #F3F4F6;
}

.stat-card__hint {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .stat-card__hint {
   color: #6B7280;
}
</style>
