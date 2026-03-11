// ============================================
// Auth API Types
// ============================================

/** User object returned from the API */
export interface User {
  id: number
  fullName: string
  email: string
  phone?: string
  status?: number
  avatar?: string | null
  phone_verified_at?: string | null
  created_at?: string
  deleted_at?: string | null
}

/** Payload for login request */
export interface LoginPayload {
  email: string
  password: string
}

/** Payload for register request — matches backend API */
export interface RegisterPayload {
  email: string
  password: string
  FullName: string
}

/** Payload for forgot password request */
export interface ForgotPasswordPayload {
  email: string
}

/** Payload for verifying OTP */
export interface VerifyOtpPayload {
  email: string
  code: string
}

/** Payload for reset password request */
export interface ResetPasswordPayload {
  token: string
  password: string
  password_confirmation: string
}

/**
 * Login/Register response — flat structure from the backend.
 * User data + token are at the same level.
 */
export interface LoginResponse {
  id: number
  fullName: string
  email: string
  token: string
}

/** Simple message response (forgot password, verify, etc.) */
export interface MessageResponse {
  status?: number
  message: string
}
