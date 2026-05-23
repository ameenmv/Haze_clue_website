<template>
   <div class="live-session-page">
      <!-- Session Info Bar -->
      <LiveSessionInfo @end-session="handleEndSession" />

      <!-- 4 Stat Cards -->
      <LiveSessionStats />

      <!-- 3-Column Panels: Meter + Actions + Status -->
      <LiveSessionPanels />

      <!-- Chart.js Attention Timeline -->
      <LiveSessionTimeline />
   </div>
</template>

<script setup lang="ts">
import { usePusher } from '~/composables/usePusher'
import { sessionsApi } from '~/services/sessions'

definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'Live Session | Haze Clue'
})

const liveData = useState<any>('liveSessionData', () => null)
const route = useRoute()
const config = useRuntimeConfig()
const sessionId = (route.query.id as string) || 'demo-session'

const { pusher } = usePusher()

// Provide an emitter method for child components (like panels)
provide('emitAction', async (action: string) => {
   try {
      if (action === 'pause') {
         await sessionsApi.togglePause(sessionId)
      } else if (action === 'end') {
         await sessionsApi.end(sessionId)
      }
   } catch (e) {
      console.error('Failed to perform action:', action, e)
   }
})

onMounted(() => {
   if (pusher.value) {
      const channel = pusher.value.subscribe(`session_${sessionId}`)

      channel.bind('attention_update', (payload: any) => {
         if (payload && payload.data) {
            liveData.value = payload.data
         }
      })

      channel.bind('class_alert', (payload: any) => {
         const toast = useToast()
         toast.add({
            title: '📢 Class Alert Broadcasted!',
            description: payload.message,
            color: 'orange',
            icon: 'i-lucide-bell',
            timeout: 6000
         })
      })
   }
})

onUnmounted(() => {
   if (pusher.value) {
      pusher.value.unsubscribe(`session_${sessionId}`)
   }
})

import { reportsApi } from '~/services/reports'
import Swal from 'sweetalert2'

const getSwalTheme = () => {
   const isDark = document.documentElement.classList.contains('dark')
   return {
      background: isDark ? '#1a1d27' : '#fff',
      color: isDark ? '#fff' : '#000',
   }
}

const handleEndSession = async () => {
   const result = await Swal.fire({
      title: 'End Session?',
      text: 'Are you sure you want to end this live session? A report will be generated.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, End Session',
      confirmButtonColor: '#EF4444',
      cancelButtonText: 'Cancel',
      ...getSwalTheme()
   })

   if (!result.isConfirmed) return

   // Session end logic is handled below via REST API


   if (sessionId !== 'demo-session') {
      try {
         await sessionsApi.end(sessionId)
         await reportsApi.generate({ sessionId, type: 'session_summary' })
      } catch (error) {
         console.error('Failed to end session or generate report', error)
      }
   }
   
   navigateTo('/dashboard/reports')
}
</script>

<style scoped>
.live-session-page {
   padding: 24px 32px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   width: 100%;
}

@media (max-width: 768px) {
   .live-session-page {
      padding: 16px;
      gap: 20px;
   }
}
</style>
