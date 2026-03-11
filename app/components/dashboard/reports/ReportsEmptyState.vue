<template>
   <section class="reports-empty">
      <div class="reports-empty__content">
         <!-- Icon -->
         <div class="reports-empty__icon-wrap">
            <UIcon name="lucide:file-bar-chart" class="reports-empty__icon" />
         </div>

         <!-- Title & Description -->
         <h2 class="reports-empty__title">{{ $t('dashboard.reports.noReports.title') }}</h2>
         <p class="reports-empty__desc">{{ $t('dashboard.reports.noReports.description') }}</p>

         <!-- Actions -->
         <div class="reports-empty__actions">
            <button class="reports-empty__btn reports-empty__btn--primary" @click="$emit('createSession')">
               <UIcon name="lucide:plus" class="w-4 h-4" />
               <span>{{ $t('dashboard.reports.noReports.createSession') }}</span>
            </button>
            <button class="reports-empty__btn reports-empty__btn--secondary" @click="$emit('learnMore')">
               <UIcon name="lucide:book-open" class="w-4 h-4" />
               <span>{{ $t('dashboard.reports.noReports.learnMore') }}</span>
            </button>
         </div>

         <!-- Feature Cards -->
         <div class="reports-empty__features">
            <div v-for="feature in features" :key="feature.titleKey" class="reports-empty__feature">
               <div class="reports-empty__feature-icon" :style="{ background: feature.iconBg }">
                  <UIcon :name="feature.icon" class="w-5 h-5" :style="{ color: feature.iconColor }" />
               </div>
               <h4 class="reports-empty__feature-title">{{ $t(feature.titleKey) }}</h4>
               <p class="reports-empty__feature-desc">{{ $t(feature.descKey) }}</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ createSession: []; learnMore: [] }>()

const features = [
   {
      icon: 'lucide:bar-chart-3',
      iconBg: '#DBEAFE',
      iconColor: '#6C4EFD',
      titleKey: 'dashboard.reports.features.analytics.title',
      descKey: 'dashboard.reports.features.analytics.description'
   },
   {
      icon: 'lucide:download',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      titleKey: 'dashboard.reports.features.export.title',
      descKey: 'dashboard.reports.features.export.description'
   },
   {
      icon: 'lucide:clock',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      titleKey: 'dashboard.reports.features.historical.title',
      descKey: 'dashboard.reports.features.historical.description'
   }
]
</script>

<style scoped>
.reports-empty {
   background: #FFFFFF;
   border: 2px dashed #D1D5DB;
   border-radius: 16px;
   padding: 48px;
}

:root.dark .reports-empty {
   background: #1a1d27;
   border-color: #3d4050;
}

.reports-empty__content {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 12px;
}

.reports-empty__icon-wrap {
   width: 96px;
   height: 96px;
   background: #F3F4F6;
   border-radius: 9999px;
   display: flex;
   align-items: center;
   justify-content: center;
}

:root.dark .reports-empty__icon-wrap {
   background: #252836;
}

.reports-empty__icon {
   width: 48px;
   height: 48px;
   color: #9CA3AF;
}

.reports-empty__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #111827;
   margin: 0;
   margin-top: 12px;
}

:root.dark .reports-empty__title {
   color: #F3F4F6;
}

.reports-empty__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 18px;
   line-height: 28px;
   color: #6B7280;
   margin: 0;
   max-width: 560px;
}

:root.dark .reports-empty__desc {
   color: #9CA3AF;
}

.reports-empty__actions {
   display: flex;
   gap: 16px;
   margin-top: 16px;
}

.reports-empty__btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 32px;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   border: none;
   transition: opacity 0.2s, transform 0.15s;
}

.reports-empty__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.reports-empty__btn:active {
   transform: translateY(0);
}

.reports-empty__btn--primary {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   color: #FFFFFF;
   box-shadow: 0px 10px 15px -3px rgba(36, 107, 253, 0.3), 0px 4px 6px -4px rgba(36, 107, 253, 0.3);
}

.reports-empty__btn--secondary {
   background: #F3F4F6;
   color: #374151;
}

:root.dark .reports-empty__btn--secondary {
   background: #252836;
   color: #D1D5DB;
}

/* ─── Feature Cards ──────────────────────────────── */
.reports-empty__features {
   display: flex;
   gap: 24px;
   margin-top: 36px;
   width: 100%;
   max-width: 672px;
}

.reports-empty__feature {
   flex: 1;
   background: #F9FAFB;
   border-radius: 12px;
   padding: 24px;
   text-align: start;
}

:root.dark .reports-empty__feature {
   background: #1f2231;
}

.reports-empty__feature-icon {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 16px;
}

.reports-empty__feature-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0 0 4px;
}

:root.dark .reports-empty__feature-title {
   color: #F3F4F6;
}

.reports-empty__feature-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
   margin: 0;
}

:root.dark .reports-empty__feature-desc {
   color: #9CA3AF;
}

@media (max-width: 768px) {
   .reports-empty {
      padding: 32px 16px;
   }

   .reports-empty__actions {
      flex-direction: column;
      align-items: stretch;
   }

   .reports-empty__btn {
      justify-content: center;
   }

   .reports-empty__features {
      flex-direction: column;
   }
}
</style>
