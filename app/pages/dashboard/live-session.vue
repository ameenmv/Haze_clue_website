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
import { io, Socket } from 'socket.io-client'

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

let socket: Socket | null = null

// Provide an emitter method for child components (like panels)
provide('emitAction', (action: string) => {
   if (socket) {
      socket.emit('action', { action })
   }
})

onMounted(() => {
   // Establish Socket.io Connection
   const baseUrl = (config.public.apiBaseUrl as string).replace('/api', '')
   
   socket = io(baseUrl, {
      path: '/socket.io', // Default nestjs socket.io path
      query: {
         sessionId: sessionId
      },
      transports: ['websocket', 'polling'] // Try WS first
   })

   socket.on('connect', () => {
      console.log('🟢 WebSocket Connected to Live Session:', sessionId)
   })

   // Listen for real-time updates from NestJS
   socket.on('attention_update', (payload) => {
      if (payload && payload.data) {
         liveData.value = payload.data
      }
   })

   socket.on('class_alert', (payload) => {
      const toast = useToast()
      toast.add({
         title: '📢 Class Alert Broadcasted!',
         description: payload.message,
         color: 'orange',
         icon: 'i-lucide-bell',
         timeout: 6000
      })
   })

   socket.on('disconnect', () => {
      console.log('🔴 WebSocket Disconnected.')
   })
})

onUnmounted(() => {
   if (socket) {
      socket.disconnect()
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

   if (socket) {
      // Send end action over WS to stop simulation
      socket.emit('action', { action: 'end' })
   }

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
