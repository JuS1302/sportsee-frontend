import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-white px-page py-navbar flex items-center justify-between">      <div className="flex items-center gap-4">
        <span className="text-[#111111] text-body">©Sportsee</span>
        <span className="text-[#111111] text-body">Tous droits réservés</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-[#707070] text-body cursor-pointer hover:text-dark">Conditions générales</span>
        <span className="text-[#707070] text-body cursor-pointer hover:text-dark">Contact</span>
        <Logo />
      </div>
    </footer>
  )
}
