<template>
   <section class="ready-banner">
      <div class="ready-banner__content">
         <h3 class="ready-banner__title">{{ $t('dashboard.liveMonitoring.readyBanner.title') }}</h3>
         <p class="ready-banner__subtitle">{{ $t('dashboard.liveMonitoring.readyBanner.subtitle') }}</p>

         <div class="ready-banner__steps">
            <div v-for="(stepKey, idx) in steps" :key="idx" class="ready-banner__step">
               <div class="ready-banner__step-num">{{ idx + 1 }}</div>
               <span class="ready-banner__step-text">{{ $t(stepKey) }}</span>
            </div>
         </div>

         <div class="ready-banner__actions">
            <button class="ready-banner__btn ready-banner__btn--white" @click="$emit('setupDevices')">
               <UIcon name="lucide:settings-2" class="w-4 h-4" />
               <span>{{ $t('dashboard.liveMonitoring.readyBanner.setupDevices') }}</span>
            </button>
            <button class="ready-banner__btn ready-banner__btn--gradient" @click="$emit('viewTutorial')">
               <UIcon name="lucide:play-circle" class="w-4 h-4" />
               <span>{{ $t('dashboard.liveMonitoring.readyBanner.viewTutorial') }}</span>
            </button>
         </div>
      </div>

      <div class="ready-banner__illustration">
         <UIcon name="lucide:monitor-check" class="ready-banner__illustration-icon" />
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ setupDevices: []; viewTutorial: [] }>()

const steps = [
   'dashboard.liveMonitoring.readyBanner.step1',
   'dashboard.liveMonitoring.readyBanner.step2',
   'dashboard.liveMonitoring.readyBanner.step3'
]
</script>

<style scoped>
.ready-banner {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   overflow: hidden;
}

.ready-banner::before {
   content: '';
   position: absolute;
   inset-inline-end: -20px;
   top: -20px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.06);
}

.ready-banner::after {
   content: '';
   position: absolute;
   inset-inline-end: 60px;
   bottom: -40px;
   width: 160px;
   height: 160px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.04);
}

.ready-banner__content {
   display: flex;
   flex-direction: column;
   gap: 8px;
   z-index: 1;
}

.ready-banner__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;
   margin: 0;
}

.ready-banner__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #DBEAFE;
   margin: 0;
}

.ready-banner__steps {
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding-top: 8px;
}

.ready-banner__step {
   display: flex;
   align-items: center;
   gap: 12px;
}

.ready-banner__step-num {
   width: 24px;
   height: 24px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 14px;
   line-height: 20px;
   color: #FFFFFF;
   flex-shrink: 0;
}

.ready-banner__step-text {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #DBEAFE;
}

.ready-banner__actions {
   display: flex;
   gap: 16px;
   padding-top: 16px;
}

.ready-banner__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px 24px;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   border: none;
   transition: opacity 0.2s, transform 0.15s;
}

.ready-banner__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.ready-banner__btn:active {
   transform: translateY(0);
}

.ready-banner__btn--white {
   background: #FFFFFF;
   color: #6C4EFD;
}

.ready-banner__btn--gradient {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   color: #FFFFFF;
   border: 1px solid rgba(255, 255, 255, 0.3);
}

.ready-banner__illustration {
   z-index: 1;
}

.ready-banner__illustration-icon {
   width: 60px;
   height: 60px;
   color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
   .ready-banner {
      flex-direction: column;
      gap: 24px;
   }

   .ready-banner__actions {
      flex-direction: column;
   }

   .ready-banner__illustration {
      display: none;
   }
}
</style>
