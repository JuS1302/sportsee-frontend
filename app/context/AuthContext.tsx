import { createContext, useContext, useState } from "react"
import Cookies from "js-cookie"

interface AuthContextType {
  token: string | null
  userId: string | null
  login: (token: string, userId: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  )
  const [userId, setUserId] = useState<string | null>(
    Cookies.get("userId") || null
  )

  const login = (token: string, userId: string) => {
    Cookies.set("token", token, { expires: 1 })
    Cookies.set("userId", userId, { expires: 1 })
    setToken(token)
    setUserId(userId)
  }

  const logout = () => {
    Cookies.remove("token")
    Cookies.remove("userId")
    setToken(null)
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
