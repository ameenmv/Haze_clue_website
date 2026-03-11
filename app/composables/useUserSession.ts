/**
 * useUserSession — backward-compatible wrapper around the auth store.
 *
 * Existing code that uses `useUserSession()` will continue to work.
 * New code should prefer `useAuthStore()` directly.
 *
 * @deprecated Use `useAuthStore()` from stores/auth.ts instead
 */
export function useUserSession() {
  const authStore = useAuthStore()

  return {
    user: authStore.user,
    token: authStore.token,
    loggedIn: authStore.isLoggedIn,
    isAuthed: authStore.isAuthenticated,

    // Proxy methods
    login: authStore.setSession,
    logout: authStore.clearSession,
    clear: () => authStore.clearSession(false),
    setUser: authStore.setUser,
    checkAuth: () => authStore.isLoggedIn
  }
}
