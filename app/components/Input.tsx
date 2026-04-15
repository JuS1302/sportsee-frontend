interface InputProps {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, type = "text", value, onChange }: InputProps) {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-500 mb-1 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-400"
      />
    </div>
  )
}
