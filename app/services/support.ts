export const supportApi = {
  submitContactForm(payload: any) {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any>('/support/contact', {
      method: 'POST',
      body: payload
    })
  }
}
