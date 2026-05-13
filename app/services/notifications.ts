// ============================================
// Notifications API Service
// Centralized API calls for notifications
// ============================================

/**
 * Notifications API service — all notification-related HTTP calls
 */
export const notificationsApi = {

  /**
   * GET /notifications — get user's notifications
   */
  list() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any[]>('/notifications')
  },

  /**
   * PATCH /notifications/:id/read — mark a single notification as read
   */
  markAsRead(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/notifications/${id}/read`, {
      method: 'PATCH'
    })
  },

  /**
   * PATCH /notifications/read-all — mark all notifications as read
   */
  markAllAsRead() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/notifications/read-all', {
      method: 'PATCH'
    })
  }
}
