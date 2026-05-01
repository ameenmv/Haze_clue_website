<template>
   <div class="form-details">
      <div class="form-details__header">
         <h2 class="form-details__title">{{ $t('dashboard.createSession.details.title') }}</h2>
         <p class="form-details__subtitle">{{ $t('dashboard.createSession.details.subtitle') }}</p>
      </div>

      <!-- Session Name + Subject -->
      <div class="form-details__row">
         <div class="form-details__field">
            <label class="form-details__label">{{ $t('dashboard.createSession.details.sessionName') }} *</label>
            <input v-model="sessionForm.title" type="text"
               class="form-details__input" :class="{ 'form-details__input--error': formErrors.title }"
               :placeholder="$t('dashboard.createSession.details.sessionNamePlaceholder')"
               @input="formErrors.title && delete formErrors.title" />
            <span v-if="formErrors.title" class="form-details__error">{{ formErrors.title }}</span>
         </div>
         <div class="form-details__field">
            <label class="form-details__label">{{ $t('dashboard.createSession.details.subject') }}</label>
            <input v-model="sessionForm.subject" type="text"
               class="form-details__input"
               :placeholder="$t('dashboard.createSession.details.subjectPlaceholder')" />
         </div>
      </div>

      <!-- Grade Level + Duration -->
      <div class="form-details__row">
         <div class="form-details__field">
            <label class="form-details__label">{{ $t('dashboard.createSession.details.gradeLevel') }}</label>
            <input v-model="sessionForm.className" type="text"
               class="form-details__input"
               :placeholder="$t('dashboard.createSession.details.gradePlaceholder')" />
         </div>
         <div class="form-details__field">
            <label class="form-details__label">Duration (minutes)</label>
            <input v-model.number="sessionForm.duration" type="number" min="0" class="form-details__input"
               placeholder="e.g. 45" />
         </div>
      </div>

      <!-- Number of Students -->
      <div class="form-details__row">
         <div class="form-details__field">
            <label class="form-details__label">Number of Students</label>
            <input v-model.number="sessionForm.students" type="number" min="0" class="form-details__input"
               placeholder="e.g. 30" />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { lookupsApi } from '~/services/lookups'

const sessionForm = inject<any>('sessionForm')!
const formErrors = inject<Record<string, string>>('formErrors', {})
</script>

<style scoped>
.form-details {
   display: flex;
   flex-direction: column;
   gap: 24px;
}

.form-details__header {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.form-details__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #0F172A;
   margin: 0;
}

:root.dark .form-details__title {
   color: #F3F4F6;
}

.form-details__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #475569;
   margin: 0;
}

:root.dark .form-details__subtitle {
   color: #9CA3AF;
}

.form-details__row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 24px;
}

.form-details__field {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.form-details__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #334155;
}

:root.dark .form-details__label {
   color: #D1D5DB;
}

.form-details__input {
   box-sizing: border-box;
   padding: 14px 16px;
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   outline: none;
   transition: border-color 0.2s;
}

:root.dark .form-details__input {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.form-details__input::placeholder {
   color: #9CA3AF;
}

.form-details__input:focus {
   border-color: #6C4EFD;
}

.form-details__select {
   box-sizing: border-box;
   padding: 12px 32px 12px 20px;
   background: #EFEFEF;
   border: 1px solid #E2E8F0;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 20px;
   color: #000000;
   outline: none;
   cursor: pointer;
   appearance: auto;
}

:root.dark .form-details__select {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

@media (max-width: 768px) {
   .form-details__row {
      grid-template-columns: 1fr;
   }
}

/* ─── Validation Error ───────────────────────────── */
.form-details__input--error {
   border-color: #DC2626 !important;
}

.form-details__error {
   font-family: 'Inter', sans-serif;
   font-size: 13px;
   color: #DC2626;
   margin-top: -4px;
}

:root.dark .form-details__error {
   color: #F87171;
}
</style>
