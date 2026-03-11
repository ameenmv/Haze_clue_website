<template>
   <section class="session-info">
      <div class="session-info__left">
         <h2 class="session-info__name">Math Class - Grade 10</h2>
         <p class="session-info__subject">Mathematics</p>
      </div>
      <div class="session-info__right">
         <span class="session-info__live">
            <span class="session-info__live-dot" />
            {{ $t('dashboard.liveSession.sessionInfo.live') }}
         </span>
         <button class="session-info__end" @click="$emit('endSession')">
            <UIcon name="lucide:square" class="w-3 h-4" style="color: #fff" />
            <span>{{ $t('dashboard.liveSession.sessionInfo.endSession') }}</span>
         </button>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ endSession: [] }>()
</script>

<style scoped>
.session-info {
   box-sizing: border-box;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

:root.dark .session-info {
   background: #1a1d27;
   border-color: #2d3040;
}

.session-info__name {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: #1F2937;
   margin: 0;
}

:root.dark .session-info__name {
   color: #F3F4F6;
}

.session-info__subject {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #4B5563;
   margin: 0;
}

:root.dark .session-info__subject {
   color: #9CA3AF;
}

.session-info__right {
   display: flex;
   align-items: center;
   gap: 16px;
}

.session-info__live {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 4px 12px;
   background: #FEE2E2;
   border-radius: 9999px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #DC2626;
}

.session-info__live-dot {
   width: 8px;
   height: 8px;
   background: #EF4444;
   border-radius: 9999px;
   animation: pulse-live 1.5s ease-in-out infinite;
}

@keyframes pulse-live {

   0%,
   100% {
      opacity: 1;
   }

   50% {
      opacity: 0.4;
   }
}

.session-info__end {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px 16px;
   background: #EF4444;
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s;
}

.session-info__end:hover {
   opacity: 0.9;
}
</style>
