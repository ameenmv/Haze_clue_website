import { z } from 'zod'
import { loginSchema, registerSchema } from '~/schema/auth'
import { authApi } from '~/services/auth'

type RegisterData = z.infer<typeof registerSchema>
type LoginData = z.infer<typeof loginSchema>

/**
 * useAuth composable — orchestrates auth flows.
 *
 * Pattern:
 *   UI Component → useAuth (business logic) → authApi (HTTP) → useAuthStore (state)
 *
 * This composable does NOT touch cookies directly;
 * it delegates persistence to the auth store.
 */
export function useAuth() {
  const authStore = useAuthStore()
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // ─── Register ──────────────────────────────────────────────
  const register = async (data: RegisterData) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authApi.register({
        email: data.email,
        password: data.password,
        FullName: `${data.firstName} ${data.lastName}`.trim()
      })

      // Persist session
      authStore.setSession(response)

      return { success: true }
    } catch (e: any) {
      error.value = e?.message || e?.error || 'Registration failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Login ─────────────────────────────────────────────────
  const login = async (data: LoginData) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authApi.login({
        email: data.email,
        password: data.password
      })

      // Persist session with remember-me option
      authStore.setSession(response, data.rememberMe)

      return { success: true }
    } catch (e: any) {
      error.value = e?.message || e?.error || 'Login failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Forgot Password ──────────────────────────────────────
  const forgotPassword = async (email: string) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authApi.forgotPassword({ email })
      return { success: true, message: response.message }
    } catch (e: any) {
      error.value = e?.message || e?.error || 'Failed to send reset link'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Verify OTP ────────────────────────────────────────────
  const verifyOtp = async (email: string, code: string) => {
    isLoading.value = true
    error.value = null

    try {
      await authApi.verifyOtp({ email, code })
      return { success: true }
    } catch (e: any) {
      error.value = e?.message || e?.error || 'Verification failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Resend OTP ────────────────────────────────────────────
  const resendOtp = async (email: string) => {
    isLoading.value = true
    try {
      await authApi.resendOtp(email)
      return { success: true }
    } catch (e: any) {
      return { success: false, error: e?.message || e?.error }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Reset Password ───────────────────────────────────────
  const resetPassword = async (token: string, password: string) => {
    isLoading.value = true
    error.value = null

    try {
      await authApi.resetPassword({
        token,
        password,
        password_confirmation: password
      })
      return { success: true }
    } catch (e: any) {
      error.value = e?.message || e?.error || 'Failed to reset password'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // ─── Logout ────────────────────────────────────────────────
  const logout = async () => {
    isLoading.value = true
    try {
      // Call API to invalidate token on server
      await authApi.logout()
    } catch {
      // Even if API fails, clear local session
    } finally {
      authStore.clearSession()
      isLoading.value = false
    }
  }

  return {
    register,
    login,
    forgotPassword,
    verifyOtp,
    resendOtp,
    resetPassword,
    logout,
    isLoading,
    error
  }
}
