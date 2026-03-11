<template>
   <div class="faq-resources">
      <!-- FAQ -->
      <section class="faq-resources__faq">
         <h2 class="faq-resources__title">{{ $t('dashboard.help.faq.title') }}</h2>

         <div class="faq-resources__list">
            <div v-for="q in faqItems" :key="q" class="faq-resources__item">
               <button class="faq-resources__item-btn">
                  <span class="faq-resources__item-text">{{ $t(q) }}</span>
                  <UIcon name="lucide:chevron-down" class="faq-resources__item-icon" />
               </button>
            </div>
         </div>
      </section>

      <!-- Resources -->
      <section class="faq-resources__resources">
         <h3 class="faq-resources__resources-title">{{ $t('dashboard.help.resources.title') }}</h3>

         <div class="faq-resources__resources-list">
            <a v-for="res in resources" :key="res.labelKey" href="#" class="faq-resources__resource-link">
               <div class="faq-resources__resource-left">
                  <UIcon :name="res.icon" class="faq-resources__resource-icon" />
                  <span>{{ $t(res.labelKey) }}</span>
               </div>
               <UIcon name="lucide:arrow-right" class="faq-resources__resource-arrow" />
            </a>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
const faqItems = [
   'dashboard.help.faq.q1',
   'dashboard.help.faq.q2',
   'dashboard.help.faq.q3',
   'dashboard.help.faq.q4',
   'dashboard.help.faq.q5'
]

const resources = [
   { icon: 'lucide:file-text', labelKey: 'dashboard.help.resources.userGuide' },
   { icon: 'lucide:video', labelKey: 'dashboard.help.resources.videoTutorials' },
   { icon: 'lucide:book-open', labelKey: 'dashboard.help.resources.documentation' },
   { icon: 'lucide:users', labelKey: 'dashboard.help.resources.communityForum' }
]
</script>

<style scoped>
.faq-resources {
   display: flex;
   flex-direction: column;
   gap: 24px;
}

/* ─── FAQ ─────────────────────────────────────────── */
.faq-resources__faq {
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .faq-resources__faq {
   background: #1a1d27;
   border-color: #2d3040;
}

.faq-resources__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #0F172A;
   margin: 0;
}

:root.dark .faq-resources__title {
   color: #F3F4F6;
}

.faq-resources__list {
   display: flex;
   flex-direction: column;
   gap: 0;
}

.faq-resources__item {
   border-bottom: 1px solid #E2E8F0;
   padding-bottom: 16px;
   margin-bottom: 16px;
}

:root.dark .faq-resources__item {
   border-bottom-color: #2d3040;
}

.faq-resources__item:last-child {
   border-bottom: none;
   padding-bottom: 0;
   margin-bottom: 0;
}

.faq-resources__item-btn {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   background: none;
   border: none;
   cursor: pointer;
   padding: 0;
}

.faq-resources__item-text {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   text-align: start;
}

:root.dark .faq-resources__item-text {
   color: #F3F4F6;
}

.faq-resources__item-icon {
   width: 16px;
   height: 16px;
   color: #94A3B8;
   flex-shrink: 0;
}

/* ─── Resources ──────────────────────────────────── */
.faq-resources__resources {
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 16px;
}

:root.dark .faq-resources__resources {
   background: #1a1d27;
   border-color: #2d3040;
}

.faq-resources__resources-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #0F172A;
   margin: 0;
}

:root.dark .faq-resources__resources-title {
   color: #F3F4F6;
}

.faq-resources__resources-list {
   display: flex;
   flex-direction: column;
   gap: 12px;
}

.faq-resources__resource-link {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 12px;
   border-radius: 8px;
   text-decoration: none;
   transition: background 0.15s;
}

.faq-resources__resource-link:hover {
   background: #F8FAFC;
}

:root.dark .faq-resources__resource-link:hover {
   background: #252836;
}

.faq-resources__resource-left {
   display: flex;
   align-items: center;
   gap: 12px;
}

.faq-resources__resource-icon {
   width: 16px;
   height: 16px;
   color: #6C4EFD;
}

.faq-resources__resource-left span {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #334155;
}

:root.dark .faq-resources__resource-left span {
   color: #D1D5DB;
}

.faq-resources__resource-arrow {
   width: 14px;
   height: 16px;
   color: #94A3B8;
}
</style>
