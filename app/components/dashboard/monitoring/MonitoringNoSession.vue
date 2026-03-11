<template>
   <section class="no-session">
      <div class="no-session__content">
         <div class="no-session__icon-wrap">
            <UIcon name="lucide:video" class="no-session__icon" />
         </div>
         <h2 class="no-session__title">{{ $t('dashboard.liveMonitoring.noSession.title') }}</h2>
         <p class="no-session__desc">{{ $t('dashboard.liveMonitoring.noSession.description') }}</p>
         <div class="no-session__actions">
            <button class="no-session__btn no-session__btn--primary" @click="$emit('startSession')">
               <UIcon name="lucide:plus" class="w-4 h-4" />
               <span>{{ $t('dashboard.liveMonitoring.noSession.startNew') }}</span>
            </button>
            <button class="no-session__btn no-session__btn--secondary" @click="$emit('setupDevices')">
               <UIcon name="lucide:settings-2" class="w-4 h-4" />
               <span>{{ $t('dashboard.liveMonitoring.noSession.setupDevices') }}</span>
            </button>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ startSession: []; setupDevices: [] }>()
</script>

<style scoped>
.no-session {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 16px;
   padding: 32px;
}

:root.dark .no-session {
   background: #1a1d27;
   border-color: #2d3040;
}

.no-session__content {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 16px;
}

.no-session__icon-wrap {
   width: 80px;
   height: 80px;
   background: #F3F4F6;
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
}

:root.dark .no-session__icon-wrap {
   background: #252836;
}

.no-session__icon {
   width: 34px;
   height: 30px;
   color: #9CA3AF;
}

.no-session__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #111827;
   margin: 0;
}

:root.dark .no-session__title {
   color: #F3F4F6;
}

.no-session__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0;
   max-width: 448px;
}

:root.dark .no-session__desc {
   color: #9CA3AF;
}

.no-session__actions {
   display: flex;
   gap: 16px;
   margin-top: 12px;
}

.no-session__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 32px;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   border: none;
   transition: opacity 0.2s, transform 0.15s;
}

.no-session__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.no-session__btn:active {
   transform: translateY(0);
}

.no-session__btn--primary {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   color: #FFFFFF;
}

.no-session__btn--secondary {
   background: #F3F4F6;
   color: #374151;
}

:root.dark .no-session__btn--secondary {
   background: #252836;
   color: #D1D5DB;
}

@media (max-width: 768px) {
   .no-session__actions {
      flex-direction: column;
      align-items: stretch;
   }

   .no-session__btn {
      justify-content: center;
   }
}
</style>
