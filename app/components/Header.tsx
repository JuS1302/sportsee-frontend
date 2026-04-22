export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-background px-page py-navbar flex items-start justify-between">
      {children}
    </header>
  )
}
