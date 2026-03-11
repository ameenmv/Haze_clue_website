<template>
   <section class="device-empty">
      <!-- Icon -->
      <div class="device-empty__icon-wrap">
         <UIcon name="lucide:cpu" class="device-empty__icon" />
      </div>

      <!-- Title & Description -->
      <h2 class="device-empty__title">{{ $t('dashboard.devices.noDevices.title') }}</h2>
      <p class="device-empty__desc">{{ $t('dashboard.devices.noDevices.description') }}</p>

      <!-- CTA -->
      <button class="device-empty__btn" @click="$emit('addDevice')">
         <UIcon name="lucide:plus" class="w-4 h-4" />
         <span>{{ $t('dashboard.devices.noDevices.addFirst') }}</span>
      </button>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ addDevice: [] }>()
</script>

<style scoped>
.device-empty {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 12px;
   padding: 48px 32px;
}

.device-empty__icon-wrap {
   width: 96px;
   height: 96px;
   background: #EFF6FF;
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 12px;
}

:root.dark .device-empty__icon-wrap {
   background: #1e1b4b;
}

.device-empty__icon {
   width: 36px;
   height: 36px;
   color: #6C4EFD;
}

.device-empty__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #111827;
   margin: 0;
}

:root.dark .device-empty__title {
   color: #F3F4F6;
}

.device-empty__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #4B5563;
   margin: 0;
   max-width: 500px;
}

:root.dark .device-empty__desc {
   color: #9CA3AF;
}

.device-empty__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 32px;
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

.device-empty__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.device-empty__btn:active {
   transform: translateY(0);
}
</style>
