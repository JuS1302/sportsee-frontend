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
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
    >
      {isLoading ? "Chargement..." : label}
    </button>
  )
}
