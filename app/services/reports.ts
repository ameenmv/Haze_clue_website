export const reportsApi = {
  list(page = 1, limit = 10, sessionId?: string) {
    const { $customFetch } = useNuxtApp()
    const query = new URLSearchParams({ page: String(page), limit: String(limit) })
    if (sessionId) query.append('sessionId', sessionId)
    return $customFetch<any>(`/reports?${query.toString()}`)
  },
  get(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/reports/${id}`)
  },
  generate(payload: { sessionId: string; type: string }) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/reports/generate', {
      method: 'POST',
      body: payload
    })
  },
  export(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/reports/${id}/export`)
  }
}
