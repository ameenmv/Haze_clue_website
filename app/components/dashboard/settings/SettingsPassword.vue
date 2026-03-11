<template>
   <section class="password-card">
      <h3 class="password-card__title">{{ $t('dashboard.settings.password.title') }}</h3>

      <div class="password-card__fields">
         <div class="password-card__field">
            <label class="password-card__label">{{ $t('dashboard.settings.password.current') }}</label>
            <input v-model="form.current" type="password" class="password-card__input"
               :placeholder="$t('dashboard.settings.password.currentPlaceholder')" />
         </div>
         <div class="password-card__field">
            <label class="password-card__label">{{ $t('dashboard.settings.password.new') }}</label>
            <input v-model="form.newPass" type="password" class="password-card__input"
               :placeholder="$t('dashboard.settings.password.newPlaceholder')" />
         </div>
         <div class="password-card__field">
            <label class="password-card__label">{{ $t('dashboard.settings.password.confirm') }}</label>
            <input v-model="form.confirm" type="password" class="password-card__input"
               :placeholder="$t('dashboard.settings.password.confirmPlaceholder')" />
         </div>
      </div>

      <div class="password-card__divider" />

      <button class="password-card__btn" @click="$emit('updatePassword')">
         {{ $t('dashboard.settings.password.update') }}
      </button>
   </section>
</template>

<script setup lang="ts">
defineEmits<{ updatePassword: [] }>()

const form = reactive({
   current: '',
   newPass: '',
   confirm: ''
})
</script>

<style scoped>
.password-card {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .password-card {
   background: #1a1d27;
   border-color: #2d3040;
}

.password-card__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .password-card__title {
   color: #F3F4F6;
}

.password-card__fields {
   display: flex;
   flex-direction: column;
   gap: 24px;
}

.password-card__field {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.password-card__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #374151;
}

:root.dark .password-card__label {
   color: #D1D5DB;
}

.password-card__input {
   box-sizing: border-box;
   padding: 10px 12px;
   background: #FFFFFF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #000000;
   outline: none;
   transition: border-color 0.2s;
}

:root.dark .password-card__input {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.password-card__input::placeholder {
   color: #9CA3AF;
}

.password-card__input:focus {
   border-color: #6C4EFD;
}

.password-card__divider {
   border-top: 1px solid #F3F4F6;
}

:root.dark .password-card__divider {
   border-top-color: #2d3040;
}

.password-card__btn {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 8px 16px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #FFFFFF;
   cursor: pointer;
   width: fit-content;
   transition: opacity 0.2s, transform 0.15s;
}

.password-card__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}
</style>
