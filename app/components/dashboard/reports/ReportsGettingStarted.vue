<template>
   <section class="getting-started">
      <div class="getting-started__content">
         <h3 class="getting-started__title">{{ $t('dashboard.reports.gettingStarted.title') }}</h3>
         <p class="getting-started__subtitle">{{ $t('dashboard.reports.gettingStarted.subtitle') }}</p>

         <div class="getting-started__steps">
            <div v-for="(step, idx) in steps" :key="idx" class="getting-started__step">
               <div class="getting-started__step-num-wrap">
                  <div class="getting-started__step-num">{{ idx + 1 }}</div>
               </div>
               <div class="getting-started__step-text">
                  <h4 class="getting-started__step-title">{{ $t(step.titleKey) }}</h4>
                  <p class="getting-started__step-desc">{{ $t(step.descKey) }}</p>
               </div>
            </div>
         </div>
      </div>

      <div class="getting-started__illustration">
         <UIcon name="lucide:file-text" class="getting-started__illustration-icon" />
      </div>
   </section>
</template>

<script setup lang="ts">
const steps = [
   {
      titleKey: 'dashboard.reports.gettingStarted.step1.title',
      descKey: 'dashboard.reports.gettingStarted.step1.description'
   },
   {
      titleKey: 'dashboard.reports.gettingStarted.step2.title',
      descKey: 'dashboard.reports.gettingStarted.step2.description'
   },
   {
      titleKey: 'dashboard.reports.gettingStarted.step3.title',
      descKey: 'dashboard.reports.gettingStarted.step3.description'
   }
]
</script>

<style scoped>
.getting-started {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 16px;
   padding: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   overflow: hidden;
}

.getting-started::before {
   content: '';
   position: absolute;
   inset-inline-end: -20px;
   top: -20px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.06);
}

.getting-started::after {
   content: '';
   position: absolute;
   inset-inline-end: 60px;
   bottom: -40px;
   width: 160px;
   height: 160px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.04);
}

.getting-started__content {
   display: flex;
   flex-direction: column;
   gap: 12px;
   z-index: 1;
}

.getting-started__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #FFFFFF;
   margin: 0;
}

.getting-started__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #DBEAFE;
   margin: 0;
   max-width: 672px;
}

.getting-started__steps {
   display: flex;
   flex-direction: column;
   gap: 16px;
   padding-top: 12px;
}

.getting-started__step {
   display: flex;
   align-items: flex-start;
   gap: 16px;
}

.getting-started__step-num-wrap {
   padding-top: 4px;
}

.getting-started__step-num {
   width: 32px;
   height: 32px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   flex-shrink: 0;
}

.getting-started__step-text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.getting-started__step-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   margin: 0;
}

.getting-started__step-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #DBEAFE;
   margin: 0;
}

.getting-started__illustration {
   z-index: 1;
   padding-inline-start: 32px;
}

.getting-started__illustration-icon {
   width: 96px;
   height: 128px;
   color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
   .getting-started {
      flex-direction: column;
      gap: 24px;
   }

   .getting-started__illustration {
      display: none;
   }
}
</style>
