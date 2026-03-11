<template>
   <section class="session-templates">
      <div class="session-templates__header">
         <h3 class="session-templates__title">{{ $t('dashboard.sessions.templates.title') }}</h3>
         <p class="session-templates__subtitle">{{ $t('dashboard.sessions.templates.subtitle') }}</p>
      </div>

      <div class="session-templates__grid">
         <div v-for="tpl in templates" :key="tpl.titleKey" class="session-templates__card">
            <div class="session-templates__card-icon" :style="{ background: tpl.iconBg }">
               <UIcon :name="tpl.icon" class="w-5 h-5" :style="{ color: tpl.iconColor }" />
            </div>
            <h4 class="session-templates__card-title">{{ $t(tpl.titleKey) }}</h4>
            <p class="session-templates__card-desc">{{ $t(tpl.descKey) }}</p>
            <div class="session-templates__card-footer">
               <span class="session-templates__badge" :style="{ background: tpl.badgeBg, color: tpl.badgeColor }">
                  {{ $t(tpl.durationKey) }}
               </span>
               <button class="session-templates__use-btn" @click="$emit('useTemplate', tpl.id)">
                  {{ $t('dashboard.sessions.templates.useTemplate') }}
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ useTemplate: [id: string] }>()

const templates = [
   {
      id: 'math',
      icon: 'lucide:calculator',
      iconBg: '#DBEAFE',
      iconColor: '#2563EB',
      titleKey: 'dashboard.sessions.templates.math.title',
      descKey: 'dashboard.sessions.templates.math.description',
      durationKey: 'dashboard.sessions.templates.math.duration',
      badgeBg: '#DBEAFE',
      badgeColor: '#2563EB'
   },
   {
      id: 'science',
      icon: 'lucide:flask-conical',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      titleKey: 'dashboard.sessions.templates.science.title',
      descKey: 'dashboard.sessions.templates.science.description',
      durationKey: 'dashboard.sessions.templates.science.duration',
      badgeBg: '#DCFCE7',
      badgeColor: '#16A34A'
   },
   {
      id: 'literature',
      icon: 'lucide:book-open',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      titleKey: 'dashboard.sessions.templates.literature.title',
      descKey: 'dashboard.sessions.templates.literature.description',
      durationKey: 'dashboard.sessions.templates.literature.duration',
      badgeBg: '#F3E8FF',
      badgeColor: '#9333EA'
   }
]
</script>

<style scoped>
.session-templates__header {
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin-bottom: 16px;
}

.session-templates__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .session-templates__title {
   color: #F3F4F6;
}

.session-templates__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .session-templates__subtitle {
   color: #9CA3AF;
}

.session-templates__grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px;
}

.session-templates__card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 25px;
   display: flex;
   flex-direction: column;
   gap: 8px;
   transition: box-shadow 0.2s, transform 0.2s;
}

:root.dark .session-templates__card {
   background: #1a1d27;
   border-color: #2d3040;
}

.session-templates__card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
   transform: translateY(-2px);
}

:root.dark .session-templates__card:hover {
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.session-templates__card-icon {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 8px;
}

.session-templates__card-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .session-templates__card-title {
   color: #F3F4F6;
}

.session-templates__card-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .session-templates__card-desc {
   color: #9CA3AF;
}

.session-templates__card-footer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 8px;
}

.session-templates__badge {
   padding: 4px 8px;
   border-radius: 9999px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
}

.session-templates__use-btn {
   background: none;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   cursor: pointer;
   padding: 0;
}

.session-templates__use-btn:hover {
   opacity: 0.8;
}

@media (max-width: 900px) {
   .session-templates__grid {
      grid-template-columns: 1fr;
   }
}
</style>
