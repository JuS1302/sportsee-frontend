import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-dark px-(--spacing-page) py-(--spacing-navbar) flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-body">©Sportsee</span>
        <span className="text-gray-400 text-body">Tous droits réservés</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-gray-400 text-body cursor-pointer hover:text-white">Conditions générales</span>
        <span className="text-gray-400 text-body cursor-pointer hover:text-white">Contact</span>
        <Logo />
      </div>
    </footer>
  )
}
