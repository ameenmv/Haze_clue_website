<template>
   <div class="create-session-page">
      <!-- Error Toast -->
      <Transition name="toast">
         <div v-if="errorMsg" class="create-session-page__toast create-session-page__toast--error">
            <UIcon name="lucide:alert-circle" class="w-5 h-5" />
            <span>{{ errorMsg }}</span>
            <button class="create-session-page__toast-close" @click="errorMsg = ''">✕</button>
         </div>
      </Transition>

      <!-- Success Toast -->
      <Transition name="toast">
         <div v-if="successMsg" class="create-session-page__toast create-session-page__toast--success">
            <UIcon name="lucide:check-circle" class="w-5 h-5" />
            <span>{{ successMsg }}</span>
         </div>
      </Transition>

      <!-- Main Card -->
      <div class="create-session-page__card">
         <!-- Session Details Form Fields -->
         <CreateSessionDetails />

         <!-- Monitoring Settings Toggles -->
         <CreateSessionMonitoring />

         <!-- Device Assignment Warning -->
         <CreateSessionDevices @add-devices="handleAddDevices" />

         <!-- Notes + Action Buttons -->
         <CreateSessionActions
            :is-submitting="isSubmitting"
            @save-draft="handleSaveDraft"
            @cancel="handleCancel"
            @create="handleCreate"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { sessionsApi } from '~/services/sessions'

definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Create New Session | Haze Clue'
})

const router = useRouter()

// ── Shared form state via provide/inject ──────────
const sessionForm = reactive({
   title: '',
   subject: '',
   className: '',
   duration: 0,
   students: 0,
   notes: '',
   monitoringSettings: {
      attentionTracking: true,
      alerts: true,
      recording: true
   }
})

// ── Validation errors (shared with children) ──────
const formErrors = reactive<Record<string, string>>({})

provide('sessionForm', sessionForm)
provide('formErrors', formErrors)

const isSubmitting = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

// ── Template Pre-fill ────────────────────────────
const route = useRoute()

onMounted(() => {
   if (route.query.template) {
      const tpl = route.query.template as string
      if (tpl === 'math') {
         sessionForm.title = 'Math Class'
         sessionForm.subject = 'Mathematics'
         sessionForm.duration = 45
      } else if (tpl === 'science') {
         sessionForm.title = 'Science Lab'
         sessionForm.subject = 'Science'
         sessionForm.duration = 60
      } else if (tpl === 'literature') {
         sessionForm.title = 'Literature'
         sessionForm.subject = 'Literature'
         sessionForm.duration = 50
      }
   }
})

// ── Validation ───────────────────────────────────
const validate = (): boolean => {
   // Reset errors
   Object.keys(formErrors).forEach(k => delete formErrors[k])

   if (!sessionForm.title.trim()) {
      formErrors.title = 'Session name is required'
   }

   return Object.keys(formErrors).length === 0
}

// ── Build payload ────────────────────────────────
const buildPayload = () => ({
   title: sessionForm.title.trim(),
   className: sessionForm.className || undefined,
   subject: sessionForm.subject || undefined,
   duration: sessionForm.duration || undefined,
   students: sessionForm.students || undefined,
   notes: sessionForm.notes.trim() || undefined,
   monitoringSettings: sessionForm.monitoringSettings
})

// ─── Handlers ──────────────────────────────────────
const handleAddDevices = () => {
   navigateTo('/dashboard/devices')
}

const handleSaveDraft = async () => {
   if (!validate()) return
   isSubmitting.value = true
   errorMsg.value = ''
   try {
      await sessionsApi.create(buildPayload())
      successMsg.value = 'Session saved as draft!'
      clearNuxtData('/dashboard/sessions::sessions-list')
      setTimeout(() => navigateTo('/dashboard/sessions'), 800)
   } catch (e: any) {
      errorMsg.value = e?.data?.message || e?.message || 'Failed to save session. Please try again.'
   } finally {
      isSubmitting.value = false
   }
}

const handleCancel = () => {
   router.back()
}

const handleCreate = async () => {
   if (!validate()) return
   isSubmitting.value = true
   errorMsg.value = ''
   try {
      const session = await sessionsApi.create(buildPayload())
      if (session?.id) {
         await sessionsApi.start(session.id)
      }
      successMsg.value = 'Session created & started!'
      clearNuxtData('/dashboard/sessions::sessions-list')
      setTimeout(() => navigateTo('/dashboard/sessions'), 800)
   } catch (e: any) {
      errorMsg.value = e?.data?.message || e?.message || 'Failed to create session. Please try again.'
   } finally {
      isSubmitting.value = false
   }
}
</script>

<style scoped>
.create-session-page {
   padding: 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   position: relative;
}

.create-session-page__card {
   box-sizing: border-box;
   width: 100%;
   max-width: 896px;
   background: #FFFFFF;
   border: 1px solid #E2E8F0;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px 32px 48px;
   display: flex;
   flex-direction: column;
   gap: 32px;
}

:root.dark .create-session-page__card {
   background: #1a1d27;
   border-color: #2d3040;
}

/* ─── Toast ──────────────────────────────────────── */
.create-session-page__toast {
   position: fixed;
   top: 24px;
   right: 24px;
   z-index: 9999;
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 14px 20px;
   border-radius: 10px;
   font-family: 'Inter', sans-serif;
   font-size: 14px;
   font-weight: 500;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
   max-width: 420px;
}

.create-session-page__toast--error {
   background: #FEF2F2;
   color: #DC2626;
   border: 1px solid #FECACA;
}

:root.dark .create-session-page__toast--error {
   background: #3b1515;
   border-color: #7f1d1d;
}

.create-session-page__toast--success {
   background: #F0FDF4;
   color: #16A34A;
   border: 1px solid #BBF7D0;
}

:root.dark .create-session-page__toast--success {
   background: #14331f;
   border-color: #166534;
}

.create-session-page__toast-close {
   background: none;
   border: none;
   cursor: pointer;
   font-size: 16px;
   color: inherit;
   opacity: 0.6;
   padding: 0 0 0 8px;
}

.create-session-page__toast-close:hover {
   opacity: 1;
}

.toast-enter-active,
.toast-leave-active {
   transition: all 0.3s ease;
}

.toast-enter-from {
   transform: translateX(100%);
   opacity: 0;
}

.toast-leave-to {
   transform: translateY(-20px);
   opacity: 0;
}

@media (max-width: 768px) {
   .create-session-page {
      padding: 16px;
   }

   .create-session-page__card {
      padding: 20px 16px 32px;
      gap: 24px;
   }

   .create-session-page__toast {
      left: 16px;
      right: 16px;
      max-width: none;
   }
}
</style>
