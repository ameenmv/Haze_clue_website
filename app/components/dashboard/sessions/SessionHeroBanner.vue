<template>
   <section class="session-hero">
      <div class="session-hero__content">
         <h2 class="session-hero__title">{{ $t('dashboard.sessions.hero.title') }}</h2>
         <p class="session-hero__subtitle">{{ $t('dashboard.sessions.hero.subtitle') }}</p>
         <div class="session-hero__actions">
            <button class="session-hero__btn" @click="$emit('createSession')">
               <UIcon name="lucide:plus" class="w-4 h-4" />
               <span>{{ $t('dashboard.sessions.hero.createNew') }}</span>
            </button>
         </div>
      </div>
      <div class="session-hero__illustration">
         <UIcon name="lucide:monitor" class="session-hero__illustration-icon" />
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ createSession: [] }>()
</script>

<style scoped>
.session-hero {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 16px;
   padding: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   overflow: hidden;
}

.session-hero::before {
   content: '';
   position: absolute;
   inset-inline-end: -20px;
   top: -20px;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.06);
}

.session-hero::after {
   content: '';
   position: absolute;
   inset-inline-end: 60px;
   bottom: -40px;
   width: 160px;
   height: 160px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.04);
}

.session-hero__content {
   display: flex;
   flex-direction: column;
   gap: 8px;
   z-index: 1;
}

.session-hero__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 30px;
   line-height: 36px;
   color: #FFFFFF;
   margin: 0;
}

.session-hero__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 18px;
   line-height: 28px;
   color: #DBEAFE;
   margin: 0;
}

.session-hero__actions {
   padding-top: 16px;
}

.session-hero__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 24px;
   background: #FFFFFF;
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #6C4EFD;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
}

.session-hero__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.session-hero__illustration {
   z-index: 1;
}

.session-hero__illustration-icon {
   width: 160px;
   height: 128px;
   color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
   .session-hero {
      flex-direction: column;
      text-align: center;
      gap: 24px;
   }

   .session-hero__title {
      font-size: 24px;
      line-height: 32px;
   }

   .session-hero__illustration {
      display: none;
   }
}
</style>
