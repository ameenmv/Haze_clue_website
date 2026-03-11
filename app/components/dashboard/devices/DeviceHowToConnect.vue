<template>
   <section class="how-to-connect">
      <h3 class="how-to-connect__title">{{ $t('dashboard.devices.howToConnect.title') }}</h3>

      <div class="how-to-connect__steps">
         <div v-for="(step, idx) in steps" :key="idx" class="how-to-connect__step">
            <div class="how-to-connect__step-num">{{ idx + 1 }}</div>
            <h5 class="how-to-connect__step-title">{{ $t(step.titleKey) }}</h5>
            <p class="how-to-connect__step-desc">{{ $t(step.descKey) }}</p>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const steps = [
   {
      titleKey: 'dashboard.devices.howToConnect.step1.title',
      descKey: 'dashboard.devices.howToConnect.step1.description'
   },
   {
      titleKey: 'dashboard.devices.howToConnect.step2.title',
      descKey: 'dashboard.devices.howToConnect.step2.description'
   },
   {
      titleKey: 'dashboard.devices.howToConnect.step3.title',
      descKey: 'dashboard.devices.howToConnect.step3.description'
   },
   {
      titleKey: 'dashboard.devices.howToConnect.step4.title',
      descKey: 'dashboard.devices.howToConnect.step4.description'
   }
]
</script>

<style scoped>
.how-to-connect {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 48px 32px 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 24px;
}

:root.dark .how-to-connect {
   background: #1a1d27;
   border-color: #2d3040;
}

.how-to-connect__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
   text-align: center;
}

:root.dark .how-to-connect__title {
   color: #F3F4F6;
}

.how-to-connect__steps {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 24px;
   width: 100%;
}

.how-to-connect__step {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 8px;
}

.how-to-connect__step-num {
   width: 64px;
   height: 64px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;
   margin-bottom: 8px;
}

.how-to-connect__step-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #111827;
   margin: 0;
}

:root.dark .how-to-connect__step-title {
   color: #F3F4F6;
}

.how-to-connect__step-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
   margin: 0;
   max-width: 238px;
}

:root.dark .how-to-connect__step-desc {
   color: #9CA3AF;
}

@media (max-width: 768px) {
   .how-to-connect__steps {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 480px) {
   .how-to-connect__steps {
      grid-template-columns: 1fr;
   }
}
</style>
