/**
 * Guest middleware — prevents authenticated users from accessing guest-only pages.
 *
 * Usage in a page (e.g., login, register):
 *   definePageMeta({ middleware: 'guest' })
 */
export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (authStore.isLoggedIn) {
    return navigateTo('/dashboard')
  }
})
