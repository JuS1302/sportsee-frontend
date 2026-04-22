interface InputProps {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, type = "text", value, onChange }: InputProps) {
  return (
    <div className="mb-6">
      <label className="text-small text-text-light mb-1 block font-regular">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border border-border rounded-input p-3 text-body focus:outline-none focus:border-primary"
      />
    </div>
  )
}
