<template>
   <section class="personal-info">
      <h3 class="personal-info__title">{{ $t('dashboard.settings.personal.title') }}</h3>

      <!-- Profile Photo -->
      <div class="personal-info__photo-row">
         <div class="personal-info__avatar-wrap">
            <div class="personal-info__avatar">SJ</div>
            <button class="personal-info__avatar-edit">
               <UIcon name="lucide:camera" class="w-3 h-3" style="color: #fff" />
            </button>
         </div>
         <div class="personal-info__photo-text">
            <h4 class="personal-info__photo-label">{{ $t('dashboard.settings.personal.profilePhoto') }}</h4>
            <p class="personal-info__photo-hint">{{ $t('dashboard.settings.personal.photoHint') }}</p>
            <button class="personal-info__upload-btn">{{ $t('dashboard.settings.personal.uploadNew') }}</button>
         </div>
      </div>

      <!-- Form Fields -->
      <div class="personal-info__fields">
         <!-- First / Last Name -->
         <div class="personal-info__row">
            <div class="personal-info__field">
               <label class="personal-info__label">{{ $t('dashboard.settings.personal.firstName') }}</label>
               <input v-model="form.firstName" type="text" class="personal-info__input" />
            </div>
            <div class="personal-info__field">
               <label class="personal-info__label">{{ $t('dashboard.settings.personal.lastName') }}</label>
               <input v-model="form.lastName" type="text" class="personal-info__input" />
            </div>
         </div>

         <!-- Email / Phone -->
         <div class="personal-info__row">
            <div class="personal-info__field">
               <label class="personal-info__label">{{ $t('dashboard.settings.personal.email') }}</label>
               <input v-model="form.email" type="email" class="personal-info__input" />
            </div>
            <div class="personal-info__field">
               <label class="personal-info__label">{{ $t('dashboard.settings.personal.phone') }}</label>
               <input v-model="form.phone" type="tel" class="personal-info__input" />
            </div>
         </div>

         <!-- Bio -->
         <div class="personal-info__field personal-info__field--full">
            <label class="personal-info__label">{{ $t('dashboard.settings.personal.bio') }}</label>
            <textarea v-model="form.bio" class="personal-info__textarea" rows="3"
               :placeholder="$t('dashboard.settings.personal.bioPlaceholder')"></textarea>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const form = reactive({
   firstName: 'Sarah',
   lastName: 'Johnson',
   email: 'sarah.johnson@example.com',
   phone: '+1 (555) 123-4567',
   bio: ''
})
</script>

<style scoped>
.personal-info {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .personal-info {
   background: #1a1d27;
   border-color: #2d3040;
}

.personal-info__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .personal-info__title {
   color: #F3F4F6;
}

/* ─── Photo Row ─────────────────────────────────── */
.personal-info__photo-row {
   display: flex;
   align-items: center;
   gap: 24px;
}

.personal-info__avatar-wrap {
   position: relative;
   width: 80px;
   height: 80px;
   flex-shrink: 0;
}

.personal-info__avatar {
   width: 80px;
   height: 80px;
   border-radius: 9999px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   color: #FFFFFF;
}

.personal-info__avatar-edit {
   position: absolute;
   right: -4px;
   bottom: -4px;
   width: 28px;
   height: 28px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 9999px;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}

.personal-info__photo-text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.personal-info__photo-label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #111827;
}

:root.dark .personal-info__photo-label {
   color: #F3F4F6;
}

.personal-info__photo-hint {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .personal-info__photo-hint {
   color: #9CA3AF;
}

.personal-info__upload-btn {
   background: none;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   cursor: pointer;
   padding: 0;
   text-align: start;
   width: fit-content;
   margin-top: 4px;
}

/* ─── Fields ─────────────────────────────────────── */
.personal-info__fields {
   display: flex;
   flex-direction: column;
   gap: 24px;
}

.personal-info__row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 24px;
}

.personal-info__field {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.personal-info__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #374151;
}

:root.dark .personal-info__label {
   color: #D1D5DB;
}

.personal-info__input {
   box-sizing: border-box;
   padding: 8px 12px;
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

:root.dark .personal-info__input {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.personal-info__input:focus {
   border-color: #6C4EFD;
}

.personal-info__textarea {
   box-sizing: border-box;
   padding: 8px 12px;
   background: #FFFFFF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #000000;
   resize: vertical;
   outline: none;
   min-height: 90px;
   transition: border-color 0.2s;
}

:root.dark .personal-info__textarea {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.personal-info__textarea::placeholder {
   color: #9CA3AF;
}

.personal-info__textarea:focus {
   border-color: #6C4EFD;
}

@media (max-width: 768px) {
   .personal-info__row {
      grid-template-columns: 1fr;
   }
}
</style>
