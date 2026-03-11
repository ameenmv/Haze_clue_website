<template>
   <section class="support-hours">
      <div class="support-hours__content">
         <h3 class="support-hours__title">{{ $t('dashboard.help.hours.title') }}</h3>

         <div class="support-hours__schedule">
            <div v-for="item in schedule" :key="item.key" class="support-hours__item">
               <UIcon name="lucide:clock" class="support-hours__item-icon" />
               <span>{{ $t(item.key) }}</span>
            </div>
         </div>

         <p class="support-hours__emergency">{{ $t('dashboard.help.hours.emergency') }}</p>
      </div>

      <div class="support-hours__illustration">
         <UIcon name="lucide:headphones" class="support-hours__illustration-icon" />
      </div>
   </section>
</template>

<script setup lang="ts">
const schedule = [
   { key: 'dashboard.help.hours.weekdays' },
   { key: 'dashboard.help.hours.saturday' },
   { key: 'dashboard.help.hours.sunday' }
]
</script>

<style scoped>
.support-hours {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 12px;
   padding: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   overflow: hidden;
}

.support-hours::before {
   content: '';
   position: absolute;
   inset-inline-end: -20px;
   top: -20px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.06);
}

.support-hours__content {
   display: flex;
   flex-direction: column;
   gap: 8px;
   z-index: 1;
}

.support-hours__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #FFFFFF;
   margin: 0;
}

.support-hours__schedule {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.support-hours__item {
   display: flex;
   align-items: center;
   gap: 8px;
}

.support-hours__item-icon {
   width: 16px;
   height: 16px;
   color: #DBEAFE;
   flex-shrink: 0;
}

.support-hours__item span {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #DBEAFE;
}

.support-hours__emergency {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #DBEAFE;
   margin: 8px 0 0;
}

.support-hours__illustration {
   z-index: 1;
}

.support-hours__illustration-icon {
   width: 96px;
   height: 96px;
   color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
   .support-hours {
      flex-direction: column;
      gap: 24px;
   }

   .support-hours__illustration {
      display: none;
   }
}
</style>
