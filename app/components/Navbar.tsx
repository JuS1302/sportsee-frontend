import { Link, useNavigate } from "react-router"
import Logo from "./Logo"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="bg-dark px-(--spacing-page) py-(--spacing-navbar) flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-8">
        <Link to="/dashboard" className="text-white text-body hover:text-primary">
          Dashboard
        </Link>
        <Link to="/profile" className="text-white text-body hover:text-primary">
          Mon profil
        </Link>
        <span className="text-gray-500">|</span>
        <button onClick={handleLogout} className="text-primary text-body hover:underline">
          Se déconnecter
        </button>
      </div>
    </nav>
  )
}
