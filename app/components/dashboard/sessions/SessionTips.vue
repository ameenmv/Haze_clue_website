<template>
   <section class="session-tips">
      <div class="session-tips__icon-wrap">
         <UIcon name="lucide:lightbulb" class="session-tips__icon" />
      </div>

      <div class="session-tips__body">
         <h3 class="session-tips__title">{{ $t('dashboard.sessions.tips.title') }}</h3>

         <div class="session-tips__list">
            <div v-for="(tipKey, idx) in tips" :key="idx" class="session-tips__item">
               <div class="session-tips__item-num">{{ idx + 1 }}</div>
               <span class="session-tips__item-text">{{ $t(tipKey) }}</span>
            </div>
         </div>

         <button class="session-tips__guide-link" @click="$emit('viewGuide')">
            {{ $t('dashboard.sessions.tips.viewGuide') }}
         </button>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ viewGuide: [] }>()

const tips = [
   'dashboard.sessions.tips.tip1',
   'dashboard.sessions.tips.tip2',
   'dashboard.sessions.tips.tip3'
]
</script>

<style scoped>
.session-tips {
   background: linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%);
   border: 1px solid #BFDBFE;
   border-radius: 12px;
   padding: 32px;
   display: flex;
   gap: 24px;
}

:root.dark .session-tips {
   background: linear-gradient(135deg, #1e1b4b 0%, #1e1b3a 100%);
   border-color: #312e81;
}

.session-tips__icon-wrap {
   width: 64px;
   height: 64px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 12px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
}

.session-tips__icon {
   width: 24px;
   height: 24px;
   color: #FFFFFF;
}

.session-tips__body {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.session-tips__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .session-tips__title {
   color: #F3F4F6;
}

.session-tips__list {
   display: flex;
   flex-direction: column;
   gap: 12px;
}

.session-tips__item {
   display: flex;
   align-items: flex-start;
   gap: 12px;
}

.session-tips__item-num {
   width: 24px;
   height: 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 12px;
   line-height: 16px;
   color: #FFFFFF;
   flex-shrink: 0;
   margin-top: 2px;
}

.session-tips__item-text {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #374151;
}

:root.dark .session-tips__item-text {
   color: #D1D5DB;
}

.session-tips__guide-link {
   background: none;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   cursor: pointer;
   padding: 8px 0 0;
   text-align: start;
   width: fit-content;
}

.session-tips__guide-link:hover {
   opacity: 0.8;
}

@media (max-width: 768px) {
   .session-tips {
      flex-direction: column;
   }
}
</style>
