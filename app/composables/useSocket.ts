import { io, Socket } from 'socket.io-client'

let socketInstance: Socket | null = null

export const useSocket = () => {
  if (!socketInstance && process.client) {
    const baseUrl = 'http://localhost:3001'
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
