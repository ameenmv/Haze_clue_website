<template>
   <div class="contact-cards">
      <div v-for="card in cards" :key="card.titleKey" class="contact-cards__card">
         <div class="contact-cards__icon" :style="{ background: card.iconBg }">
            <UIcon :name="card.icon" class="w-5 h-5" :style="{ color: card.iconColor }" />
         </div>
         <h3 class="contact-cards__title">{{ $t(card.titleKey) }}</h3>
         <p class="contact-cards__desc">{{ $t(card.descKey) }}</p>
         <button class="contact-cards__value" :style="{ color: card.valueColor }" @click="$emit(card.emitEvent)">
            {{ $t(card.valueKey) }}
         </button>
      </div>
   </div>
</template>

<script setup lang="ts">
defineEmits<{ email: []; phone: []; chat: [] }>()

const cards = [
   {
      icon: 'lucide:mail',
      iconBg: '#DBEAFE',
      iconColor: '#6C4EFD',
      titleKey: 'dashboard.help.contact.email.title',
      descKey: 'dashboard.help.contact.email.description',
      valueKey: 'dashboard.help.contact.email.value',
      valueColor: '#6C4EFD',
      emitEvent: 'email' as const
   },
   {
      icon: 'lucide:phone',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      titleKey: 'dashboard.help.contact.phone.title',
      descKey: 'dashboard.help.contact.phone.description',
      valueKey: 'dashboard.help.contact.phone.value',
      valueColor: '#16A34A',
      emitEvent: 'phone' as const
   },
   {
      icon: 'lucide:message-circle',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      titleKey: 'dashboard.help.contact.chat.title',
      descKey: 'dashboard.help.contact.chat.description',
      valueKey: 'dashboard.help.contact.chat.value',
      valueColor: '#9333EA',
      emitEvent: 'chat' as const
   }
]
</script>

<style scoped>
.contact-cards {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px;
}

.contact-cards__card {
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 25px;
   display: flex;
   flex-direction: column;
   gap: 8px;
}

:root.dark .contact-cards__card {
   background: #1a1d27;
   border-color: #2d3040;
}

.contact-cards__icon {
   width: 48px;
   height: 48px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 8px;
}

.contact-cards__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #0F172A;
   margin: 0;
}

:root.dark .contact-cards__title {
   color: #F3F4F6;
}

.contact-cards__desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #475569;
   margin: 0;
}

:root.dark .contact-cards__desc {
   color: #9CA3AF;
}

.contact-cards__value {
   background: none;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   padding: 0;
   text-align: start;
   width: fit-content;
   margin-top: 8px;
}

.contact-cards__value:hover {
   opacity: 0.8;
}

@media (max-width: 900px) {
   .contact-cards {
      grid-template-columns: 1fr;
   }
}
</style>
