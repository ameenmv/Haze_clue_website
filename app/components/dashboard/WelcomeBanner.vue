<template>
   <section class="welcome-banner">
      <div class="welcome-banner__content">
         <div class="welcome-banner__text">
            <h2 class="welcome-banner__title">{{ $t('dashboard.welcome.title') }}</h2>
            <p class="welcome-banner__subtitle">{{ $t('dashboard.welcome.subtitle') }}</p>
         </div>
         <div class="welcome-banner__actions">
            <button class="welcome-banner__btn welcome-banner__btn--white" @click="$emit('createSession')">
               <UIcon name="lucide:plus" class="w-4 h-4" />
               <span>{{ $t('dashboard.welcome.createSession') }}</span>
            </button>
            <button class="welcome-banner__btn welcome-banner__btn--outline" @click="$emit('viewGuide')">
               <UIcon name="lucide:book-open" class="w-4 h-4" />
               <span>{{ $t('dashboard.welcome.viewGuide') }}</span>
            </button>
         </div>
      </div>
      <div class="welcome-banner__illustration">
         <UIcon name="lucide:brain" class="welcome-banner__brain-icon" />
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ createSession: []; viewGuide: [] }>()
</script>

<style scoped>
.welcome-banner {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 16px;
   padding: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   overflow: hidden;
}

.welcome-banner__content {
   display: flex;
   flex-direction: column;
   gap: 8px;
   z-index: 1;
}

.welcome-banner__text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.welcome-banner__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 30px;
   line-height: 36px;
   color: #FFFFFF;
   margin: 0;
}

.welcome-banner__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 18px;
   line-height: 28px;
   color: #DBEAFE;
   margin: 0;
}

.welcome-banner__actions {
   display: flex;
   gap: 16px;
   padding-top: 16px;
}

.welcome-banner__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 24px;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   border: none;
   transition: opacity 0.2s, transform 0.15s;
}

.welcome-banner__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.welcome-banner__btn:active {
   transform: translateY(0);
}

.welcome-banner__btn--white {
   background: #FFFFFF;
   color: #6C4EFD;
}

.welcome-banner__btn--outline {
   background: rgba(255, 255, 255, 0.15);
   color: #FFFFFF;
   border: 2px solid rgba(255, 255, 255, 0.3);
}

.welcome-banner__illustration {
   z-index: 1;
}

.welcome-banner__brain-icon {
   width: 96px;
   height: 96px;
   color: rgba(255, 255, 255, 0.2);
}

.welcome-banner::before {
   content: '';
   position: absolute;
   inset-inline-end: -20px;
   top: -20px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.06);
}

.welcome-banner::after {
   content: '';
   position: absolute;
   inset-inline-end: 40px;
   bottom: -40px;
   width: 160px;
   height: 160px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 768px) {
   .welcome-banner {
      flex-direction: column;
      text-align: center;
      gap: 24px;
   }

   .welcome-banner__title {
      font-size: 24px;
      line-height: 32px;
   }

   .welcome-banner__subtitle {
      font-size: 16px;
   }

   .welcome-banner__actions {
      flex-direction: column;
      align-items: stretch;
   }

   .welcome-banner__illustration {
      display: none;
   }
}
</style>
