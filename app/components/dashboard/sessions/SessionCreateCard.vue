<template>
   <section class="create-session">
      <!-- Header row -->
      <div class="create-session__header">
         <div class="create-session__header-text">
            <h3 class="create-session__title">{{ $t('dashboard.sessions.createNew.title') }}</h3>
            <p class="create-session__subtitle">{{ $t('dashboard.sessions.createNew.subtitle') }}</p>
         </div>
         <button class="create-session__btn" @click="$emit('create')">
            <UIcon name="lucide:plus" class="w-4 h-4" />
            <span>{{ $t('dashboard.sessions.createNew.createBtn') }}</span>
         </button>
      </div>

      <!-- Steps -->
      <div class="create-session__steps">
         <div v-for="step in steps" :key="step.titleKey" class="create-session__step">
            <UIcon :name="step.icon" class="create-session__step-icon" />
            <h4 class="create-session__step-title">{{ $t(step.titleKey) }}</h4>
            <p class="create-session__step-desc">{{ $t(step.descKey) }}</p>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ create: [] }>()

const steps = [
   {
      icon: 'lucide:clipboard-list',
      titleKey: 'dashboard.sessions.createNew.step1.title',
      descKey: 'dashboard.sessions.createNew.step1.description'
   },
   {
      icon: 'lucide:headphones',
      titleKey: 'dashboard.sessions.createNew.step2.title',
      descKey: 'dashboard.sessions.createNew.step2.description'
   }
]
</script>

<style scoped>
.create-session {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .create-session {
   background: #1a1d27;
   border-color: #2d3040;
}

.create-session__header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.create-session__header-text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.create-session__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .create-session__title {
   color: #F3F4F6;
}

.create-session__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .create-session__subtitle {
   color: #9CA3AF;
}

.create-session__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
   white-space: nowrap;
}

.create-session__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

/* ─── Steps ──────────────────────────────────────── */
.create-session__steps {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 24px;
}

.create-session__step {
   background: #F9FAFB;
   border: 2px dashed #D1D5DB;
   border-radius: 8px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 16px;
}

:root.dark .create-session__step {
   background: #1f2231;
   border-color: #3d4050;
}

.create-session__step-icon {
   width: 40px;
   height: 36px;
   color: #9CA3AF;
}

.create-session__step-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #374151;
   margin: 0;
}

:root.dark .create-session__step-title {
   color: #D1D5DB;
}

.create-session__step-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .create-session__step-desc {
   color: #9CA3AF;
}

@media (max-width: 768px) {
   .create-session__header {
      flex-direction: column;
      gap: 16px;
      align-items: stretch;
   }

   .create-session__btn {
      justify-content: center;
   }

   .create-session__steps {
      grid-template-columns: 1fr;
   }
}
</style>
