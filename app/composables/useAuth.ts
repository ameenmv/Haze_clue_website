import { z } from 'zod'
import { loginSchema, registerSchema } from '~/schema/auth'

type RegisterData = z.infer<typeof registerSchema>
type LoginData = z.infer<typeof loginSchema>

export function useAuth() {
  const { login: sessionLogin } = useUserSession()
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const register = async (data: RegisterData) => {
    isLoading.value = true
    error.value = null

    try {
      // clear error
      error.value = null
      
      // Mock API delay
      await new Promise((resolve) => setTimeout(resolve, 2500))

      // Simulate success response
      const mockUser = {
        id: Math.floor(Math.random() * 1000),
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: '',
        status: 1,
        avatar: null,
        phone_verified_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        deleted_at: null
      }

      const mockResponse = {
        status: 200,
        message: 'Registration successful',
        data: {
          user: mockUser,
          token: 'mock-jwt-token-' + Date.now()
        }
      }

      sessionLogin(mockResponse)
      
      return { success: true }
    } catch (e: any) {
      error.value = e.message || 'Registration failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const login = async (data: LoginData) => {
    isLoading.value = true
    error.value = null

    try {
      // Mock API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate specific error for testing (optional)
      // if (data.email === 'error@test.com') throw new Error('Invalid credentials')

      // Mock Success Response
      const mockUser = {
        id: 101,
        name: 'John Doe',
        email: data.email,
        phone: '',
        status: 1,
        avatar: null,
        phone_verified_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        deleted_at: null
      }

      const mockResponse = {
        status: 200,
        message: 'Login successful',
        data: {
          user: mockUser,
          token: 'mock-jwt-token-' + Date.now()
        }
      }

      // Use session composable to store user/token
      sessionLogin(mockResponse, data.rememberMe)

      return { success: true }
    } catch (e: any) {
      error.value = e.message || 'Login failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const forgotPassword = async (email: string) => {
    isLoading.value = true
    error.value = null

    try {
      // Mock API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock Success
      return { success: true, message: 'Reset link sent' }
    } catch (e: any) {
      error.value = e.message || 'Failed to send reset link'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  return {
    register,
    login,
    forgotPassword,
    isLoading,
    error
  }
}
