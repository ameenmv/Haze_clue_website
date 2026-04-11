// ============================================
// Sessions API Service
// Centralized API calls for sessions
// ============================================

/**
 * Sessions API service — all session-related HTTP calls
 */
export const sessionsApi = {

  /**
   * GET /sessions — paginated list
   */
  list(page = 1, limit = 10) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions?page=${page}&limit=${limit}`)
  },

  /**
   * GET /sessions/:id — get single session
   */
  get(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}`)
  },

  /**
   * POST /sessions — create session
   */
  create(payload: {
    title: string
    className?: string
    subject?: string
    duration?: number
    students?: number
    notes?: string
    monitoringSettings?: {
      attentionTracking?: boolean
      alerts?: boolean
      recording?: boolean
    }
  }) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/sessions', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * PATCH /sessions/:id — update session
   */
  update(id: string, payload: Record<string, any>) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}`, {
      method: 'PATCH',
      body: payload
    })
  },

  /**
   * DELETE /sessions/:id — remove session
   */
  remove(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<{ message: string }>(`/sessions/${id}`, {
      method: 'DELETE'
    })
  },

  /**
   * POST /sessions/:id/start — start live session
   */
  start(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/start`, {
      method: 'POST'
    })
  },

  /**
   * POST /sessions/:id/end — end live session
   */
  end(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/end`, {
      method: 'POST'
    })
  },

  /**
   * GET /sessions/:id/live-data — get live session stats (polling fallback)
   */
  getLiveData(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/live-data`)
  }
}
