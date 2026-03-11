<template>
   <div class="monitoring-settings">
      <h3 class="monitoring-settings__title">{{ $t('dashboard.createSession.monitoring.title') }}</h3>

      <div class="monitoring-settings__list">
         <div v-for="(item, idx) in toggles" :key="idx" class="monitoring-settings__item">
            <div class="monitoring-settings__item-text">
               <h4 class="monitoring-settings__item-label">{{ $t(item.labelKey) }}</h4>
               <p class="monitoring-settings__item-desc">{{ $t(item.descKey) }}</p>
            </div>
            <button class="monitoring-settings__toggle" :class="{ 'monitoring-settings__toggle--active': item.value }"
               @click="item.value = !item.value">
               <span class="monitoring-settings__toggle-thumb" />
            </button>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const toggles = reactive([
   {
      labelKey: 'dashboard.createSession.monitoring.realTimeAlerts',
      descKey: 'dashboard.createSession.monitoring.realTimeAlertsDesc',
      value: true
   },
   {
      labelKey: 'dashboard.createSession.monitoring.autoSave',
      descKey: 'dashboard.createSession.monitoring.autoSaveDesc',
      value: true
   },
   {
      labelKey: 'dashboard.createSession.monitoring.generateReport',
      descKey: 'dashboard.createSession.monitoring.generateReportDesc',
      value: true
   }
])
</script>

<style scoped>
.monitoring-settings {
   display: flex;
   flex-direction: column;
   gap: 16px;
   padding-top: 24px;
   border-top: 1px solid #E2E8F0;
}

:root.dark .monitoring-settings {
   border-top-color: #2d3040;
}

.monitoring-settings__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #0F172A;
   margin: 0;
}

:root.dark .monitoring-settings__title {
   color: #F3F4F6;
}

.monitoring-settings__list {
   display: flex;
   flex-direction: column;
   gap: 16px;
}

.monitoring-settings__item {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px;
   background: #F8FAFC;
   border-radius: 8px;
}

:root.dark .monitoring-settings__item {
   background: #252836;
}

.monitoring-settings__item-text {
   display: flex;
   flex-direction: column;
   gap: 0;
}

.monitoring-settings__item-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   margin: 0;
}

:root.dark .monitoring-settings__item-label {
   color: #F3F4F6;
}

.monitoring-settings__item-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #475569;
   margin: 0;
}

:root.dark .monitoring-settings__item-desc {
   color: #9CA3AF;
}

/* ─── Toggle ─────────────────────────────────────── */
.monitoring-settings__toggle {
   position: relative;
   width: 44px;
   height: 24px;
   background: #E5E7EB;
   border-radius: 9999px;
   border: none;
   cursor: pointer;
   padding: 0;
   transition: background 0.2s;
   flex-shrink: 0;
}

.monitoring-settings__toggle--active {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
}

.monitoring-settings__toggle-thumb {
   position: absolute;
   top: 2px;
   left: 2px;
   width: 20px;
   height: 20px;
   background: #FFFFFF;
   border: 1px solid #D1D5DB;
   border-radius: 9999px;
   transition: transform 0.2s;
}

.monitoring-settings__toggle--active .monitoring-settings__toggle-thumb {
   transform: translateX(20px);
   border-color: #FFFFFF;
}
</style>
