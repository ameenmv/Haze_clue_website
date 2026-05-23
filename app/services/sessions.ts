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
  },

  /**
   * POST /sessions/:id/markers — add session marker
   */
  addMarker(id: string, label: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/markers`, {
      method: 'POST',
      body: { label }
    })
  },

  /**
   * POST /sessions/:id/pause — toggle pause monitoring
   */
  pause(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/pause`, {
      method: 'POST'
    })
  },

  /**
   * POST /sessions/:id/alert — send class alert
   */
  sendAlert(id: string, message: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/alert`, {
      method: 'POST',
      body: { message }
    })
  },

  /**
   * POST /sessions/:id/tick — drive simulation tick
   */
  tick(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/sessions/${id}/tick`, {
      method: 'POST'
    })
  },

  /**
   * GET /sessions/:id/export/pdf
   */
  async exportPdf(id: string) {
    const token = useCookie('auth_token').value
    const res = await fetch(`/api/sessions/${id}/export/pdf`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Failed to export PDF')
    return res.blob()
  },

  /**
   * GET /sessions/:id/export/csv
   */
  async exportCsv(id: string) {
    const token = useCookie('auth_token').value
    const res = await fetch(`/api/sessions/${id}/export/csv`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Failed to export CSV')
    return res.blob()
  }
}
