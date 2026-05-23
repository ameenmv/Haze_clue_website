import Pusher from 'pusher-js'

let pusherInstance: Pusher | null = null

export const usePusher = () => {
  if (!pusherInstance && import.meta.client) {
    const config = useRuntimeConfig()
    
    // We get credentials from runtime config (needs to be added to nuxt.config.ts)
    const key = config.public.pusherKey as string || 'default-key'
    const cluster = config.public.pusherCluster as string || 'default-cluster'

    const authStore = useAuthStore()
    // Always use the /api prefix so it gets routed properly by Nuxt's server proxy
    const authEndpoint = '/api/pusher/auth'
    
    pusherInstance = new Pusher(key, {
      cluster,
      authEndpoint,
      auth: {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    })

    pusherInstance.connection.bind('connected', () => {
      console.log('🟢 Global Pusher Connected')
    })

    pusherInstance.connection.bind('disconnected', () => {
      console.log('🔴 Global Pusher Disconnected')
    })
  }

  return {
    pusher: ref(pusherInstance)
  }
}
