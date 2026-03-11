<template>
   <section class="your-sessions">
      <!-- Header -->
      <div class="your-sessions__header">
         <div class="your-sessions__header-row">
            <div class="your-sessions__header-text">
               <h3 class="your-sessions__title">{{ $t('dashboard.sessions.yourSessions.title') }}</h3>
               <p class="your-sessions__subtitle">{{ $t('dashboard.sessions.yourSessions.subtitle') }}</p>
            </div>
            <select class="your-sessions__filter">
               <option>{{ $t('dashboard.sessions.yourSessions.filter') }}</option>
            </select>
         </div>
      </div>

      <!-- Empty State -->
      <div class="your-sessions__empty">
         <UIcon name="lucide:folder-plus" class="your-sessions__empty-icon" />
         <h4 class="your-sessions__empty-title">{{ $t('dashboard.sessions.yourSessions.emptyTitle') }}</h4>
         <p class="your-sessions__empty-desc">{{ $t('dashboard.sessions.yourSessions.emptyDesc') }}</p>
         <button class="your-sessions__empty-btn" @click="$emit('createFirst')">
            <UIcon name="lucide:plus" class="w-4 h-4" />
            <span>{{ $t('dashboard.sessions.yourSessions.createFirst') }}</span>
         </button>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ createFirst: [] }>()
</script>

<style scoped>
.your-sessions {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   overflow: hidden;
}

:root.dark .your-sessions {
   background: #1a1d27;
   border-color: #2d3040;
}

/* ─── Header ─────────────────────────────────────── */
.your-sessions__header {
   padding: 16px 24px;
   border-bottom: 1px solid #E5E7EB;
}

:root.dark .your-sessions__header {
   border-bottom-color: #2d3040;
}

.your-sessions__header-row {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.your-sessions__header-text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.your-sessions__title {
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .your-sessions__title {
   color: #F3F4F6;
}

.your-sessions__subtitle {
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .your-sessions__subtitle {
   color: #9CA3AF;
}

.your-sessions__filter {
   padding: 8px 32px 8px 20px;
   background: #EFEFEF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   line-height: 17px;
   color: #000000;
   outline: none;
   cursor: pointer;
   appearance: auto;
}

:root.dark .your-sessions__filter {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

/* ─── Empty State ────────────────────────────────── */
.your-sessions__empty {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding: 64px 24px;
   gap: 8px;
}

.your-sessions__empty-icon {
   width: 60px;
   height: 60px;
   color: #D1D5DB;
   margin-bottom: 16px;
}

:root.dark .your-sessions__empty-icon {
   color: #4B5563;
}

.your-sessions__empty-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 20px;
   line-height: 28px;
   color: #4B5563;
   margin: 0;
}

:root.dark .your-sessions__empty-title {
   color: #9CA3AF;
}

.your-sessions__empty-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0;
   max-width: 448px;
}

:root.dark .your-sessions__empty-desc {
   color: #6B7280;
}

.your-sessions__empty-btn {
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
   margin-top: 16px;
   transition: opacity 0.2s, transform 0.15s;
}

.your-sessions__empty-btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.your-sessions__empty-btn:active {
   transform: translateY(0);
}
</style>
