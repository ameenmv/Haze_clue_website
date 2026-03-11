<template>
   <section class="quick-setup">
      <div class="quick-setup__header">
         <div>
            <h3 class="quick-setup__title">{{ $t('dashboard.liveMonitoring.quickSetup.title') }}</h3>
            <p class="quick-setup__subtitle">{{ $t('dashboard.liveMonitoring.quickSetup.subtitle') }}</p>
         </div>
      </div>

      <form class="quick-setup__form" @submit.prevent="$emit('submit', form)">
         <!-- Class Name -->
         <div class="form-field">
            <label class="form-field__label">{{ $t('dashboard.liveMonitoring.quickSetup.className') }}</label>
            <input v-model="form.className" type="text" class="form-field__input"
               :placeholder="$t('dashboard.liveMonitoring.quickSetup.classPlaceholder')" />
         </div>

         <!-- Subject -->
         <div class="form-field">
            <label class="form-field__label">{{ $t('dashboard.liveMonitoring.quickSetup.subject') }}</label>
            <select v-model="form.subject" class="form-field__select">
               <option value="" disabled>{{ $t('dashboard.liveMonitoring.quickSetup.subjectPlaceholder') }}</option>
               <option v-for="subj in subjects" :key="subj" :value="subj">{{ subj }}</option>
            </select>
         </div>

         <!-- Duration + Students -->
         <div class="form-field__row">
            <div class="form-field">
               <label class="form-field__label">{{ $t('dashboard.liveMonitoring.quickSetup.duration') }}</label>
               <input v-model="form.duration" type="number" class="form-field__input"
                  :placeholder="$t('dashboard.liveMonitoring.quickSetup.durationPlaceholder')" />
            </div>
            <div class="form-field">
               <label class="form-field__label">{{ $t('dashboard.liveMonitoring.quickSetup.students') }}</label>
               <input v-model="form.students" type="number" class="form-field__input"
                  :placeholder="$t('dashboard.liveMonitoring.quickSetup.studentsPlaceholder')" />
            </div>
         </div>

         <!-- Submit -->
         <button type="submit" class="quick-setup__submit">
            <UIcon name="lucide:play" class="w-4 h-4" />
            <span>{{ $t('dashboard.liveMonitoring.quickSetup.startSession') }}</span>
         </button>
      </form>
   </section>
</template>

<script setup lang="ts">
interface SessionForm {
   className: string
   subject: string
   duration: string
   students: string
}

defineEmits<{ submit: [form: SessionForm] }>()

const form = reactive<SessionForm>({
   className: '',
   subject: '',
   duration: '',
   students: ''
})

const subjects = [
   'Mathematics',
   'Science',
   'English',
   'History',
   'Physics',
   'Chemistry',
   'Biology',
   'Computer Science'
]
</script>

<style scoped>
.quick-setup {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .quick-setup {
   background: #1a1d27;
   border-color: #2d3040;
}

.quick-setup__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .quick-setup__title {
   color: #F3F4F6;
}

.quick-setup__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .quick-setup__subtitle {
   color: #9CA3AF;
}

/* ─── Form ───────────────────────────────────────── */
.quick-setup__form {
   display: flex;
   flex-direction: column;
   gap: 16px;
}

.form-field {
   display: flex;
   flex-direction: column;
   gap: 8px;
   flex: 1;
}

.form-field__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #374151;
}

:root.dark .form-field__label {
   color: #D1D5DB;
}

.form-field__input {
   padding: 10px 12px;
   background: #FFFFFF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #111827;
   outline: none;
   transition: border-color 0.2s;
   width: 100%;
}

:root.dark .form-field__input {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.form-field__input::placeholder {
   color: #9CA3AF;
}

.form-field__input:focus {
   border-color: #6C4EFD;
}

.form-field__select {
   padding: 8px 16px;
   background: #EFEFEF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 20px;
   color: #000000;
   outline: none;
   cursor: pointer;
   appearance: auto;
   transition: border-color 0.2s;
   width: 100%;
}

:root.dark .form-field__select {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.form-field__select:focus {
   border-color: #6C4EFD;
}

.form-field__row {
   display: flex;
   gap: 16px;
}

.quick-setup__submit {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   padding: 12px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   width: 100%;
   transition: opacity 0.2s, transform 0.15s;
}

.quick-setup__submit:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.quick-setup__submit:active {
   transform: translateY(0);
}

@media (max-width: 768px) {
   .form-field__row {
      flex-direction: column;
   }
}
</style>
