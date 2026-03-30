// ============================================
// Dashboard API Service
// Centralized API calls for dashboard
// ============================================

/**
 * Dashboard API service — aggregated dashboard data
 */
export const dashboardApi = {

  /**
   * GET /dashboard/stats — get dashboard statistics
   */
  getStats() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<{
      connectedDevices: number
      totalSessions: number
      activeSessions: number
      avgAttention: number | null
      reportsGenerated: number
    }>('/dashboard/stats')
  }
}
