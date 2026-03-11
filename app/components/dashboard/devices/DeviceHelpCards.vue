<template>
   <div class="help-cards">
      <!-- Setup Guide -->
      <section class="help-cards__card help-cards__card--blue">
         <div class="help-cards__row">
            <div class="help-cards__icon-wrap help-cards__icon-wrap--purple">
               <UIcon name="lucide:file-text" class="help-cards__icon" />
            </div>
            <div class="help-cards__text">
               <h5 class="help-cards__title">{{ $t('dashboard.devices.setupGuide.title') }}</h5>
               <p class="help-cards__desc">{{ $t('dashboard.devices.setupGuide.description') }}</p>
               <button class="help-cards__link help-cards__link--purple" @click="$emit('viewGuide')">
                  {{ $t('dashboard.devices.setupGuide.link') }}
               </button>
            </div>
         </div>
      </section>

      <!-- Need Help? -->
      <section class="help-cards__card help-cards__card--violet">
         <div class="help-cards__row">
            <div class="help-cards__icon-wrap help-cards__icon-wrap--violet">
               <UIcon name="lucide:headphones" class="help-cards__icon" />
            </div>
            <div class="help-cards__text">
               <h5 class="help-cards__title">{{ $t('dashboard.devices.needHelp.title') }}</h5>
               <p class="help-cards__desc">{{ $t('dashboard.devices.needHelp.description') }}</p>
               <button class="help-cards__link help-cards__link--violet" @click="$emit('contactSupport')">
                  {{ $t('dashboard.devices.needHelp.link') }}
               </button>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
defineEmits<{ viewGuide: []; contactSupport: [] }>()
</script>

<style scoped>
.help-cards {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 24px;
}

.help-cards__card {
   border-radius: 12px;
   padding: 24px;
}

.help-cards__card--blue {
   background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%);
   border: 1px solid #DBEAFE;
}

:root.dark .help-cards__card--blue {
   background: linear-gradient(135deg, #1e1b4b 0%, #1a1d27 100%);
   border-color: #312e81;
}

.help-cards__card--violet {
   background: linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%);
   border: 1px solid #F3E8FF;
}

:root.dark .help-cards__card--violet {
   background: linear-gradient(135deg, #2e1065 0%, #1a1d27 100%);
   border-color: #581c87;
}

.help-cards__row {
   display: flex;
   gap: 16px;
   align-items: flex-start;
}

.help-cards__icon-wrap {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
}

.help-cards__icon-wrap--purple {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
}

.help-cards__icon-wrap--violet {
   background: #A855F7;
}

.help-cards__icon {
   width: 20px;
   height: 20px;
   color: #FFFFFF;
}

.help-cards__text {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.help-cards__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 16px;
   line-height: 24px;
   color: #111827;
   margin: 0;
}

:root.dark .help-cards__title {
   color: #F3F4F6;
}

.help-cards__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
   margin: 0;
}

:root.dark .help-cards__desc {
   color: #9CA3AF;
}

.help-cards__link {
   background: none;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   cursor: pointer;
   padding: 7.5px 0 0;
   text-align: start;
   width: fit-content;
}

.help-cards__link--purple {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
}

.help-cards__link--violet {
   color: #A855F7;
}

.help-cards__link:hover {
   opacity: 0.8;
}

@media (max-width: 768px) {
   .help-cards {
      grid-template-columns: 1fr;
   }
}
</style>
