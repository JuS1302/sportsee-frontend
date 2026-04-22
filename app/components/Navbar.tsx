import { Link, useNavigate } from "react-router"
import Logo from "./Logo"
import Header from "./Header"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Header>
      <Logo />
      <div className="flex items-center gap-8 bg-white/90 rounded-full px-8 py-3 shadow-sm">
        <Link to="/dashboard" className="text-text-dark text-body hover:text-primary">
          Dashboard
        </Link>
        <Link to="/profile" className="text-text-dark text-body hover:text-primary">
          Mon profil
        </Link>
        <span className="text-border">|</span>
        <button onClick={handleLogout} className="text-primary text-body hover:underline">
          Se déconnecter
        </button>
      </div>
    </Header>
  )
}
