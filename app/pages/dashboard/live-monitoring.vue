<template>
   <div class="monitoring-page">
      <!-- No Active Session -->
      <MonitoringNoSession @start-session="navigateTo('/dashboard/sessions/create')"
         @setup-devices="navigateTo('/dashboard/devices')" />

      <!-- Quick Setup + Device Status -->
      <div class="monitoring-page__row">
         <MonitoringQuickSetup @submit="handleStartSession" />
         <MonitoringDeviceStatus @add-device="navigateTo('/dashboard/devices')" />
      </div>

      <!-- Dashboard Preview -->
      <MonitoringPreview />

      <!-- Ready Banner -->
      <MonitoringReadyBanner @setup-devices="navigateTo('/dashboard/devices')"
         @view-tutorial="navigateTo('/dashboard/help')" />
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Live Monitoring | Haze Clue'
})

import { sessionsApi } from '~/services/sessions'

const toast = useToast()

// Fetch active sessions to see if we should redirect
const { data: sessionsData } = await useAppFetch('active-sessions-check', () => sessionsApi.list(1, 10))
const activeSession = computed(() => {
   const sessions = (sessionsData.value as any)?.data || []
   return sessions.find((s: any) => s.status === 'active')
})

onMounted(() => {
   if (activeSession.value) {
      navigateTo(`/dashboard/live-session?id=${activeSession.value.id}`)
   }
})

// ─── Handlers ──────────────────────────────────────
const handleStartSession = async (form: { className: string; subject: string; duration: string; students: string }) => {
   try {
      const payload = {
         title: `${form.subject || 'Quick'} Session - ${form.className || new Date().toLocaleDateString()}`,
         className: form.className || undefined,
         subject: form.subject || undefined,
         duration: parseInt(form.duration) || undefined,
         students: parseInt(form.students) || undefined,
      }
      const session = await sessionsApi.create(payload)
      if (session?.id) {
         await sessionsApi.start(session.id)
         navigateTo(`/dashboard/live-session?id=${session.id}`)
      }
   } catch (e: any) {
      toast.add({ title: 'Failed to start quick session', description: e.message || 'Unknown error', color: 'red' })
   }
}
</script>

<style scoped>
.monitoring-page {
   padding: 32px;
   display: flex;
   flex-direction: column;
   gap: 32px;
   width: 100%;
}

.monitoring-page__row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 32px;
}

@media (max-width: 900px) {
   .monitoring-page__row {
      grid-template-columns: 1fr;
   }
}

@media (max-width: 768px) {
   .monitoring-page {
      padding: 16px;
      gap: 24px;
   }
}
</style>
