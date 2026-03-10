import type { LoginResponse, User } from '~/types/api/auth'

/**
 * Auth Store — single source of truth for authentication state.
 *
 * Responsibilities:
 *  - Persist token & user data in cookies (SSR-safe)
 *  - Provide computed helpers (isLoggedIn, etc.)
 *  - Expose login / logout mutations
 */
export const useAuthStore = defineStore('auth', () => {
  // ─── Cookie-based persistence (works on SSR + CSR) ──────────
  const REMEMBER_ME_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

  const tokenCookie = useCookie('auth_token', { path: '/' })
  const userCookie = useCookie<User | null>('user_data', { path: '/' })

  // ─── State ──────────────────────────────────────────────────
  const user = computed<User | null>(() => userCookie.value ?? null)
  const token = computed<string>(() => tokenCookie.value ?? '')
  const isLoggedIn = computed(() => !!token.value)
  const isAuthenticated = computed(() => !!user.value && !!token.value)

  // ─── Actions ────────────────────────────────────────────────

  /**
   * Persist auth data from a successful login/register response.
   * The backend returns a flat object: { id, fullName, email, token }
   */
  function setSession(response: LoginResponse, remember = false) {
    // Extract user data (everything except token)
    const userData: User = {
      id: response.id,
      fullName: response.fullName,
      email: response.email
    }

    // Store user data
    userCookie.value = userData

    // Store token (with optional extended expiry)
    if (remember) {
      const rememberCookie = useCookie('auth_token', {
        maxAge: REMEMBER_ME_MAX_AGE,
        path: '/'
      })
      rememberCookie.value = response.token
    } else {
      tokenCookie.value = response.token
    }
  }

  /**
   * Update user data without touching the token
   */
  function setUser(userData: User) {
    userCookie.value = userData
  }

  /**
   * Clear all auth data and redirect
   */
  function clearSession(redirect = true) {
    userCookie.value = null
    tokenCookie.value = null

    if (redirect) {
      navigateTo('/login')
    }
  }

  return {
    // State
    user,
    token,
    isLoggedIn,
    isAuthenticated,

    // Actions
    setSession,
    setUser,
    clearSession
  }
})
