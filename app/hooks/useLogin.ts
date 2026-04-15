import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"
import { api } from "../api/api"

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { token, userId } = await api.login(username, password)
      login(token, userId)
      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleLogin, error, isLoading }
}
