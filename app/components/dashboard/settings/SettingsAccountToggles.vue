<template>
   <section class="account-settings">
      <h3 class="account-settings__title">{{ $t('dashboard.settings.account.title') }}</h3>

      <div class="account-settings__list">
         <div v-for="(item, idx) in toggles" :key="idx" class="account-settings__item">
            <div class="account-settings__item-text">
               <h4 class="account-settings__item-label">{{ $t(item.labelKey) }}</h4>
               <p class="account-settings__item-desc">{{ $t(item.descKey) }}</p>
            </div>
            <button class="account-settings__toggle" :class="{ 'account-settings__toggle--active': item.value }"
               @click="item.value = !item.value">
               <span class="account-settings__toggle-thumb" />
            </button>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const toggles = reactive([
   {
      labelKey: 'dashboard.settings.account.twoFactor',
      descKey: 'dashboard.settings.account.twoFactorDesc',
      value: false
   },
   {
      labelKey: 'dashboard.settings.account.emailNotifications',
      descKey: 'dashboard.settings.account.emailNotificationsDesc',
      value: true
   },
   {
      labelKey: 'dashboard.settings.account.marketing',
      descKey: 'dashboard.settings.account.marketingDesc',
      value: false
   }
])
</script>

<style scoped>
.account-settings {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .account-settings {
   background: #1a1d27;
   border-color: #2d3040;
}

.account-settings__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .account-settings__title {
   color: #F3F4F6;
}

.account-settings__list {
   display: flex;
   flex-direction: column;
}

.account-settings__item {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px 0;
   border-bottom: 1px solid #F3F4F6;
}

:root.dark .account-settings__item {
   border-bottom-color: #2d3040;
}

.account-settings__item:last-child {
   border-bottom: none;
}

.account-settings__item-text {
   display: flex;
   flex-direction: column;
   gap: 0;
}

.account-settings__item-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #111827;
   margin: 0;
}

:root.dark .account-settings__item-label {
   color: #F3F4F6;
}

.account-settings__item-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .account-settings__item-desc {
   color: #9CA3AF;
}

/* ─── Toggle ─────────────────────────────────────── */
.account-settings__toggle {
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

.account-settings__toggle--active {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
}

.account-settings__toggle-thumb {
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

.account-settings__toggle--active .account-settings__toggle-thumb {
   transform: translateX(20px);
   border-color: #FFFFFF;
}
</style>
