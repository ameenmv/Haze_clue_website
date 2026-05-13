import { io, Socket } from 'socket.io-client'

let socketInstance: Socket | null = null

export const useSocket = () => {
  if (!socketInstance && import.meta.client) {
    const config = useRuntimeConfig()
    // Derive WS base URL from API URL (strip /api suffix)
    const apiBase = config.public.apiBaseUrl as string
    const baseUrl = apiBase.replace(/\/api\/?$/, '') || 'http://localhost:3001'

    socketInstance = io(baseUrl, {
      path: '/socket.io',
      transports: ['websocket', 'polling']
    })

    socketInstance.on('connect', () => {
      console.log('🟢 Global WebSocket Connected')
    })

    socketInstance.on('disconnect', () => {
      console.log('🔴 Global WebSocket Disconnected')
    })
  }

  return {
    socket: ref(socketInstance)
  }
}
