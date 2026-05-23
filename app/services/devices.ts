// ============================================
// Devices API Service
// Centralized API calls for devices
// ============================================

/**
 * Devices API service — all device-related HTTP calls
 */
export const devicesApi = {

  /**
   * GET /devices — list user's devices with pagination
   */
  list(page = 1, limit = 10, search = '') {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/devices?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`)
  },

  /**
   * GET /devices/:id — get single device
   */
  get(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/devices/${id}`)
  },

  /**
   * POST /devices — register new device
   */
  create(payload: {
    name: string
    type: 'EEG' | 'BCI'
    serialNumber: string
  }) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/devices', {
      method: 'POST',
      body: payload
    })
  },

  /**
   * PATCH /devices/:id — update device
   */
  update(id: string, payload: Record<string, any>) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>(`/devices/${id}`, {
      method: 'PATCH',
      body: payload
    })
  },

  /**
   * DELETE /devices/:id — remove device
   */
  remove(id: string) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<{ message: string }>(`/devices/${id}`, {
      method: 'DELETE'
    })
  }
}
