// ============================================
// Users API Service
// Centralized API calls for user profile
// ============================================

/**
 * Users API service — all user-related HTTP calls
 */
export const usersApi = {

  /**
   * GET /users/me — get current user profile
   */
  getProfile() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/users/me')
  },

  /**
   * PATCH /users/me — update profile
   */
  updateProfile(payload: any) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/users/me', {
      method: 'PATCH',
      body: payload
    })
  },

  /**
   * POST /users/me/avatar — upload avatar image
   */
  uploadAvatar(file: File) {
    const config = useRuntimeConfig()
    const token = useCookie('auth_token').value
    const formData = new FormData()
    formData.append('avatar', file)

    // Use $fetch directly to backend (proxy doesn't handle multipart well)
    const backendUrl = config.public.apiBaseUrl as string
    return $fetch<{ avatar: string }>(`${backendUrl}/users/me/avatar`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  },

  /**
   * PATCH /users/me/password — change password
   */
  changePassword(payload: { currentPassword: string; newPassword: string }) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<{ message: string }>('/users/me/password', {
      method: 'PATCH',
      body: payload
    })
  },

  /**
   * DELETE /users/me — delete account
   */
  deleteAccount() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<{ message: string }>('/users/me', {
      method: 'DELETE'
    })
  }
}
