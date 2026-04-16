import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import Logo from "../components/Logo"
import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin, error, isLoading } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username || !password) return
      handleLogin(username, password)
  }

  return (
    <div className="flex h-screen bg-[#F0F2FF]">

      {/* Partie gauche */}
      <div className="w-1/2 flex flex-col">
        <div className="p-10">
          <Logo />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-[420px]">
            <h1 className="text-blue-600 font-bold text-3xl mb-8">
              Transformez <br /> vos stats en résultats
            </h1>
            <h2 className="text-xl font-semibold mb-6">Se connecter</h2>
            <form onSubmit={handleSubmit}>
              <Input
                label="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}
              <Button
                label="Se connecter"
                type="submit"
                isLoading={isLoading}
              />
            </form>
            <p className="text-sm text-gray-500 mt-4 cursor-pointer hover:underline">
              Mot de passe oublié ?
            </p>
          </Card>
        </div>
      </div>

      {/* Partie droite — image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src="public/images/running.jpg"
          alt="Coureurs"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-4 max-w-[250px] text-sm text-gray-600 shadow">
          Analysez vos performances en un clin d'œil, suivez vos progrès et atteignez vos objectifs.
        </div>
      </div>

    </div>
  )
}
