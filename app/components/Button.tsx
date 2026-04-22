interface ButtonProps {
  label: string
  onClick?: () => void
  type?: "button" | "submit"
  isLoading?: boolean
}

export default function Button({ label, onClick, type = "button", isLoading }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-primary text-white text-body mt-6 py-4 px-10 rounded-button font-regular hover:opacity-90 transition disabled:opacity-50"
    >
      {isLoading ? "Chargement..." : label}
    </button>
  )
}
