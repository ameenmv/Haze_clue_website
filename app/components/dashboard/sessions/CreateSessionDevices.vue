<template>
   <div class="device-assignment">
      <h3 class="device-assignment__title">{{ $t('dashboard.createSession.devices.title') }}</h3>

      <!-- Warning Box -->
      <div class="device-assignment__warning">
         <div class="device-assignment__warning-content">
            <UIcon name="lucide:alert-triangle" class="device-assignment__warning-icon" />
            <div class="device-assignment__warning-text">
               <h4 class="device-assignment__warning-label">{{ $t('dashboard.createSession.devices.noDevices') }}</h4>
               <p class="device-assignment__warning-desc">{{ $t('dashboard.createSession.devices.noDevicesDesc') }}</p>
            </div>
         </div>
      </div>

      <!-- Add Devices Button -->
      <button class="device-assignment__btn" @click="$emit('addDevices')">
         <UIcon name="lucide:plus" class="w-3.5 h-4" style="color: #fff" />
         <span>{{ $t('dashboard.createSession.devices.addDevices') }}</span>
      </button>
   </div>
</template>

<script setup lang="ts">
defineEmits<{ addDevices: [] }>()
</script>

<style scoped>
.device-assignment {
   display: flex;
   flex-direction: column;
   gap: 16px;
   padding-top: 24px;
   border-top: 1px solid #E2E8F0;
}

:root.dark .device-assignment {
   border-top-color: #2d3040;
}

.device-assignment__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #0F172A;
   margin: 0;
}

:root.dark .device-assignment__title {
   color: #F3F4F6;
}

.device-assignment__warning {
   background: #FEFCE8;
   border: 1px solid #FEF08A;
   border-radius: 8px;
   padding: 16px;
}

:root.dark .device-assignment__warning {
   background: #422006;
   border-color: #854d0e;
}

.device-assignment__warning-content {
   display: flex;
   align-items: flex-start;
   gap: 12px;
}

.device-assignment__warning-icon {
   width: 16px;
   height: 16px;
   color: #CA8A04;
   flex-shrink: 0;
   margin-top: 4px;
}

.device-assignment__warning-text {
   display: flex;
   flex-direction: column;
   gap: 0;
}

.device-assignment__warning-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #854D0E;
   margin: 0;
}

:root.dark .device-assignment__warning-label {
   color: #FDE68A;
}

.device-assignment__warning-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #A16207;
   margin: 0;
}

:root.dark .device-assignment__warning-desc {
   color: #FCD34D;
}

.device-assignment__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px 16px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border: 1px solid #246BFD;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   width: fit-content;
   transition: opacity 0.2s, transform 0.15s;
}

.device-assignment__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}
</style>
