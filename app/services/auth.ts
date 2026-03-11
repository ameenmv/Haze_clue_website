// ============================================
// Auth API Service
// Centralized API calls for authentication
// ============================================
import type {
    ForgotPasswordPayload,
    LoginPayload,
    MessageResponse,
    RegisterPayload,
    ResetPasswordPayload,
    VerifyOtpPayload
} from '~/types/api/auth'

/**
 * Auth API service — all auth-related HTTP calls live here.
 * Uses the $customFetch plugin which already handles:
 *  - Authorization header injection
 *  - Error toasts & redirects
 *  - Request deduplication (AbortController)
 */
export const authApi = {

  /**
   * POST /auth/login
   */
  login(payload: LoginPayload) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<LoginResponse>('/auth/login', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * POST /auth/register
   */
  register(payload: RegisterPayload) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<LoginResponse>('/auth/register', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * POST /auth/forgot-password
   */
  forgotPassword(payload: ForgotPasswordPayload) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<MessageResponse>('/auth/forgot-password', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * POST /auth/verify-otp
   */
  verifyOtp(payload: VerifyOtpPayload) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<MessageResponse>('/auth/verify-otp', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * POST /auth/resend-otp
   */
  resendOtp(email: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<MessageResponse>('/auth/resend-otp', {
      method: 'POST',
      body: { email }
    })
  },

  /**
   * POST /auth/reset-password
   */
  resetPassword(payload: ResetPasswordPayload) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<MessageResponse>('/auth/reset-password', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * POST /auth/logout
   */
  logout() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<MessageResponse>('/auth/logout', {
      method: 'POST'
    })
  }
}
