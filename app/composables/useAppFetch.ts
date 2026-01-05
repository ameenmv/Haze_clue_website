import type { AsyncDataOptions } from 'nuxt/app'

/**
 * useAppFetch - A wrapper around useAsyncData with caching and route-awareness.
 *
 * @param key - unique key for async data
 * @param handler - function that returns a Promise or value
 * @param options - async data options (optional)
 * @param cacheTTLMinutes - cache time-to-live in minutes (default: 0.5)
 */
export function useAppFetch<DataT>(
  key: string,
  handler: () => Promise<DataT>,
  options?: AsyncDataOptions<DataT>
  // cacheTTLMinutes = 0
) {
  // const nuxtApp = useNuxtApp()
  const route = useRoute()
  // const cacheTTL = cacheTTLMinutes * 60 * 1000

  // Use a unique cache key per route param
  const cacheKey = route.fullPath + '::' + key

  return useAsyncData<DataT>(
    cacheKey,
    handler,
    {
      ...options

      // Disable default caching
      // getCachedData(cacheKey) {
      //   // Try to get data from payload (SSR) or static (SSG)
      //   const data = nuxtApp.payload.data[cacheKey] || nuxtApp.static.data[cacheKey]

      //   // If no data, return undefined to trigger fetch again
      //   if (!data) return

      //   // If cacheTTL is 0, always return data without checking expiration
      //   if (cacheTTL === 0) return data

      //   // Check if data is expired based on fetchedAt timestamp
      //   const expirationDate = new Date(data.fetchedAt)

      //   // Add cacheTTL to fetchedAt to get expiration time
      //   expirationDate.setTime(expirationDate.getTime() + cacheTTL)

      //   // If expired, return undefined to trigger fetch again
      //   const isExpired = expirationDate.getTime() < Date.now()
      //   if (isExpired) return

      //   // Return cached data if not expired
      //   return data
      // },
      // transform(input) {
      //   return {
      //     ...input,
      //     fetchedAt: new Date()
      //   }
      // }
    }
  )
}
