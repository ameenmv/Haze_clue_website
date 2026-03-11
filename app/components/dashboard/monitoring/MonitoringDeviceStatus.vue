<template>
   <section class="device-status">
      <div class="device-status__header">
         <div>
            <h3 class="device-status__title">{{ $t('dashboard.liveMonitoring.deviceStatus.title') }}</h3>
            <p class="device-status__subtitle">{{ $t('dashboard.liveMonitoring.deviceStatus.subtitle') }}</p>
         </div>
      </div>

      <div class="device-status__empty">
         <div class="device-status__empty-icon">
            <UIcon name="lucide:headphones" class="w-6 h-6" />
         </div>
         <p class="device-status__empty-title">{{ $t('dashboard.liveMonitoring.deviceStatus.noDevices') }}</p>
         <p class="device-status__empty-hint">{{ $t('dashboard.liveMonitoring.deviceStatus.noDevicesHint') }}</p>
         <button class="device-status__add-btn" @click="$emit('addDevice')">
            <UIcon name="lucide:plus" class="w-4 h-4" />
            <span>{{ $t('dashboard.liveMonitoring.deviceStatus.addDevice') }}</span>
         </button>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ addDevice: [] }>()
</script>

<style scoped>
.device-status {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .device-status {
   background: #1a1d27;
   border-color: #2d3040;
}

.device-status__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .device-status__title {
   color: #F3F4F6;
}

.device-status__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .device-status__subtitle {
   color: #9CA3AF;
}

.device-status__empty {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   flex: 1;
   gap: 12px;
   padding: 24px;
}

.device-status__empty-icon {
   width: 64px;
   height: 64px;
   background: #F3F4F6;
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #9CA3AF;
}

:root.dark .device-status__empty-icon {
   background: #252836;
}

.device-status__empty-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0;
}

:root.dark .device-status__empty-title {
   color: #9CA3AF;
}

.device-status__empty-hint {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #9CA3AF;
   margin: 0;
}

:root.dark .device-status__empty-hint {
   color: #6B7280;
}

.device-status__add-btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   margin-top: 12px;
   transition: opacity 0.2s, transform 0.15s;
}

.device-status__add-btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.device-status__add-btn:active {
   transform: translateY(0);
}
</style>
