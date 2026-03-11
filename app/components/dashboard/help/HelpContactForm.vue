<template>
   <section class="contact-form">
      <h2 class="contact-form__title">{{ $t('dashboard.help.form.title') }}</h2>

      <form class="contact-form__form" @submit.prevent="$emit('submit', form)">
         <!-- Full Name -->
         <div class="contact-form__field">
            <label class="contact-form__label">{{ $t('dashboard.help.form.fullName') }}</label>
            <input v-model="form.fullName" type="text" class="contact-form__input"
               :placeholder="$t('dashboard.help.form.fullNamePlaceholder')" />
         </div>

         <!-- Email -->
         <div class="contact-form__field">
            <label class="contact-form__label">{{ $t('dashboard.help.form.email') }}</label>
            <input v-model="form.email" type="email" class="contact-form__input"
               :placeholder="$t('dashboard.help.form.emailPlaceholder')" />
         </div>

         <!-- Subject -->
         <div class="contact-form__field">
            <label class="contact-form__label">{{ $t('dashboard.help.form.subject') }}</label>
            <select v-model="form.subject" class="contact-form__select">
               <option>{{ $t('dashboard.help.form.subjectDefault') }}</option>
            </select>
         </div>

         <!-- Message -->
         <div class="contact-form__field">
            <label class="contact-form__label">{{ $t('dashboard.help.form.message') }}</label>
            <textarea v-model="form.message" class="contact-form__textarea" rows="5"
               :placeholder="$t('dashboard.help.form.messagePlaceholder')"></textarea>
         </div>

         <!-- Agree checkbox -->
         <label class="contact-form__checkbox">
            <input v-model="form.agree" type="checkbox" />
            <span>{{ $t('dashboard.help.form.agree') }}</span>
         </label>

         <!-- Submit -->
         <button type="submit" class="contact-form__submit">
            <UIcon name="lucide:send" class="w-4 h-4" />
            <span>{{ $t('dashboard.help.form.submit') }}</span>
         </button>
      </form>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ submit: [form: typeof form] }>()

const form = reactive({
   fullName: '',
   email: '',
   subject: '',
   message: '',
   agree: false
})
</script>

<style scoped>
.contact-form {
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .contact-form {
   background: #1a1d27;
   border-color: #2d3040;
}

.contact-form__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   color: #0F172A;
   margin: 0;
}

:root.dark .contact-form__title {
   color: #F3F4F6;
}

.contact-form__form {
   display: flex;
   flex-direction: column;
   gap: 20px;
}

.contact-form__field {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.contact-form__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   color: #334155;
}

:root.dark .contact-form__label {
   color: #D1D5DB;
}

.contact-form__input {
   box-sizing: border-box;
   padding: 14px 16px;
   background: #FFFFFF;
   border: 1px solid #CBD5E1;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   outline: none;
   transition: border-color 0.2s;
}

:root.dark .contact-form__input {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.contact-form__input::placeholder {
   color: #9CA3AF;
}

.contact-form__input:focus {
   border-color: #6C4EFD;
}

.contact-form__select {
   box-sizing: border-box;
   padding: 12px 32px 12px 20px;
   background: #EFEFEF;
   border: 1px solid #CBD5E1;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 20px;
   color: #000000;
   outline: none;
   cursor: pointer;
   appearance: auto;
}

:root.dark .contact-form__select {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.contact-form__textarea {
   box-sizing: border-box;
   padding: 12px 16px;
   background: #FFFFFF;
   border: 1px solid #CBD5E1;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   resize: vertical;
   outline: none;
   min-height: 146px;
   transition: border-color 0.2s;
}

:root.dark .contact-form__textarea {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.contact-form__textarea::placeholder {
   color: #9CA3AF;
}

.contact-form__textarea:focus {
   border-color: #6C4EFD;
}

.contact-form__checkbox {
   display: flex;
   align-items: center;
   gap: 12px;
   cursor: pointer;
}

.contact-form__checkbox input {
   width: 16px;
   height: 16px;
   flex-shrink: 0;
}

.contact-form__checkbox span {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #475569;
}

:root.dark .contact-form__checkbox span {
   color: #9CA3AF;
}

.contact-form__submit {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   padding: 12px 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
}

.contact-form__submit:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.contact-form__submit:active {
   transform: translateY(0);
}
</style>
