export default defineNuxtPlugin(() => {
  const userSession = useUserSession()

  return {
    provide: {
      user: userSession
    }
  }
})
