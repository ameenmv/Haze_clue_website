interface User {
  id: number
  name: string
  email: string
  phone: string
  status: number
  avatar: string | null
  phone_verified_at: string
  created_at: string
  deleted_at: string | null
}

interface LoginResponse {
  status: number
  message: string
  data: {
    user: User
    token: string
  }
}

export function useUserSession() {
  // Define max age (Remember Me duration)
  const REMEMBER_ME_DURATION = 60 * 60 * 24 * 7 // 7 days

  const tokenCookie = useCookie('auth_token')
  const userCookie = useCookie<User | null>('user_data')

  const user = computed<User | null>(() => userCookie.value || null)
  const token = computed(() => tokenCookie.value || '')
  const loggedIn = computed(() => !!token.value)
  const isAuthed = computed(() => !!user.value && !!token.value)
  const loggedInAt = ref<Date | null>(null)

  function setUser(userData: User) {
    userCookie.value = userData
  }

  function setToken(newToken: string, remember = false) {
    if (remember) {
      const rememberCookie = useCookie('auth_token', {
        maxAge: REMEMBER_ME_DURATION,
        path: '/'
      })
      rememberCookie.value = newToken
    } else {
      tokenCookie.value = newToken
    }
  }

  function login(response: LoginResponse, remember = false) {
    // Set user data
    setUser(response.data.user)

    // Set token with remember option
    setToken(response.data.token, remember)

    // Record login time
    loggedInAt.value = new Date()

    return true
  }

  function logout() {
    // Clear user data
    userCookie.value = null

    // Clear token from cookie
    tokenCookie.value = null

    // Reset login time
    loggedInAt.value = null

    // Redirect to login page
    navigateTo('/')
  }

  function clear() {
    // Clear user data
    userCookie.value = null

    // Clear token from cookie
    tokenCookie.value = null

    // Reset login time
    loggedInAt.value = null
  }

  /**
   * Check if the user is authenticated
   * Can be used in middleware or components
   */
  function checkAuth() {
    return loggedIn.value
  }

  return {
    user,
    token,
    loggedIn,
    isAuthed,
    loggedInAt,

    // Methods
    login,
    logout,
    clear,
    setUser,
    checkAuth
  }
}
