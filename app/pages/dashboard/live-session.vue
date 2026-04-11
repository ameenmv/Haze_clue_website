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

   socket.on('disconnect', () => {
      console.log('🔴 WebSocket Disconnected.')
   })
})

onUnmounted(() => {
   if (socket) {
      socket.disconnect()
   }
})

// ─── Handlers ──────────────────────────────────────
const handleEndSession = () => {
   if (socket) {
      // Send end action over WS or fallback to REST
      socket.emit('action', { action: 'end' })
   }
   navigateTo('/dashboard/sessions')
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
