<template>
   <div class="session-actions">
      <!-- Additional Notes -->
      <div class="session-actions__notes">
         <label class="session-actions__label">{{ $t('dashboard.createSession.notes.label') }}</label>
         <textarea v-model="notes" class="session-actions__textarea" rows="4"
            :placeholder="$t('dashboard.createSession.notes.placeholder')"></textarea>
      </div>

      <!-- Action Buttons -->
      <div class="session-actions__buttons">
         <button class="session-actions__draft" @click="$emit('saveDraft')">
            <UIcon name="lucide:save" class="w-3.5 h-4" style="color: #334155" />
            <span>{{ $t('dashboard.createSession.actions.saveDraft') }}</span>
         </button>

         <div class="session-actions__right">
            <button class="session-actions__cancel" @click="$emit('cancel')">
               {{ $t('dashboard.createSession.actions.cancel') }}
            </button>
            <button class="session-actions__create" @click="$emit('create')">
               <UIcon name="lucide:plus" class="w-3.5 h-4" style="color: #fff" />
               <span>{{ $t('dashboard.createSession.actions.create') }}</span>
            </button>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
defineEmits<{ saveDraft: []; cancel: []; create: [] }>()

const notes = ref('')
</script>

<style scoped>
.session-actions {
   display: flex;
   flex-direction: column;
   gap: 24px;
}

/* ─── Notes ──────────────────────────────────────── */
.session-actions__notes {
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding-top: 24px;
   border-top: 1px solid #E2E8F0;
}

:root.dark .session-actions__notes {
   border-top-color: #2d3040;
}

.session-actions__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #334155;
}

:root.dark .session-actions__label {
   color: #D1D5DB;
}

.session-actions__textarea {
   box-sizing: border-box;
   padding: 12px 16px;
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   resize: vertical;
   outline: none;
   min-height: 122px;
   transition: border-color 0.2s;
}

:root.dark .session-actions__textarea {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

.session-actions__textarea::placeholder {
   color: #9CA3AF;
}

.session-actions__textarea:focus {
   border-color: #6C4EFD;
}

/* ─── Buttons ────────────────────────────────────── */
.session-actions__buttons {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 24px;
   border-top: 1px solid #E2E8F0;
}

:root.dark .session-actions__buttons {
   border-top-color: #2d3040;
}

.session-actions__draft {
   box-sizing: border-box;
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 24px;
   border: 1px solid #CBD5E1;
   border-radius: 8px;
   background: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #334155;
   cursor: pointer;
   transition: background 0.15s;
}

:root.dark .session-actions__draft {
   border-color: #3d4050;
   color: #D1D5DB;
}

.session-actions__draft:hover {
   background: #F8FAFC;
}

:root.dark .session-actions__draft:hover {
   background: #252836;
}

.session-actions__right {
   display: flex;
   align-items: center;
   gap: 16px;
}

.session-actions__cancel {
   box-sizing: border-box;
   padding: 12px 24px;
   border: 1px solid #CBD5E1;
   border-radius: 8px;
   background: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #334155;
   cursor: pointer;
   transition: background 0.15s;
}

:root.dark .session-actions__cancel {
   border-color: #3d4050;
   color: #D1D5DB;
}

.session-actions__cancel:hover {
   background: #F8FAFC;
}

:root.dark .session-actions__cancel:hover {
   background: #252836;
}

.session-actions__create {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 13px 32px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
}

.session-actions__create:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

@media (max-width: 640px) {
   .session-actions__buttons {
      flex-direction: column;
      gap: 16px;
   }

   .session-actions__right {
      width: 100%;
      justify-content: flex-end;
   }
}
</style>
