export const lookupsApi = {
  getSubjects() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any[]>('/lookups/subjects')
  },
  getGradeLevels() {
    const { $customFetch } = useNuxtApp()
    return $customFetch<any[]>('/lookups/grade-levels')
  }
}
