// ============================================
// Dashboard API Service
// Centralized API calls for dashboard
// ============================================

/**
 * Dashboard API service — aggregated dashboard data
 */
export const dashboardApi = {

  /**
   * GET /sessions/dashboard — get dashboard statistics
   */
  getStats() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/sessions/dashboard')
  }
}
