// Store AbortControllers per URL
const abortControllers: Record<string, AbortController> = {}

export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = useNuxtApp()
  const { t, locale } = $i18n as { t: (key: string) => string, locale: Ref<string> }

  // const config = useRuntimeConfig()
  // const baseURL = config.public.apiBaseUrl
  const baseURL = ''

  const customFetch = $fetch.create({
    baseURL: baseURL,
    headers: {
      'Accept': 'application/json',
      'Accept-Language': locale.value || 'en',
      'lang': locale.value || 'en'
      // 'Cache-Control': 'max-age=31536000'
    },

    // Interceptors
    onRequest({ request, options }) {
      // Abort previous request for this URL if exists
      if (typeof request === 'string') {
        if (abortControllers[request]) {
          abortControllers[request].abort()
        }
        const controller = new AbortController()
        abortControllers[request] = controller
        options.signal = controller.signal
      }

      // Get token from cookie directly
      const token = useCookie('auth_token').value

      // Set Authorization header if token exists
      if (token) options.headers.set('Authorization', `Bearer ${token}`)
    },
    onRequestError({ error }) {
      // Don't show toast for abort errors
      if (error?.name === 'AbortError') return

      if (import.meta.client) {
        console.error('API request error:', error)
        useToast().add({
          title: 'Request Failed',
          description: 'Could not connect to the server. Please check your connection.',
          color: 'error'
        })
      } else {
        // On server, throw a Nuxt error
        console.error('API request error:', error)
        throw createError({
          statusCode: 500,
          statusMessage: error?.message || 'API request error',
          cause: error
        })
      }
    },
    onResponse({ response }) {
      return response._data
    },
    async onResponseError({ response }) {
      const status = response.status

      // Only run client-side code if process.client is true
      if (import.meta.client) {
        if (status === 401) {
          useToast().add({
            title: t('error.unauthorized'),
            description: t('error.unauthorized'),
            color: 'error'
          })
          await nuxtApp.runWithContext(() => navigateTo('/auth'))
        } else if (status === 403) {
          useToast().add({
            title: t('error.forbidden'),
            description: t('error.forbidden'),
            color: 'error'
          })
        } else {
          let errorMessage = t('error.defaultMessage')
          if (response._data) {
            errorMessage = response._data.message
              || response._data.error
              || JSON.stringify(response._data)
          }
          useToast().add({
            // title: t('error.title'),
            title: errorMessage,
            color: 'error'
          })

          // Throw error so it can be caught by the caller
          throw response._data
        }
      } else {
        // On server, throw a Nuxt error
        console.error('API response error:', response)
        throw createError({
          statusCode: status,
          statusMessage: response._data?.message || response._data?.error || t('error.serverError')
        })
      }
    }
  })

  return {
    provide: {
      customFetch
    }
  }
})
