interface StatCardProps {
  label: string
  value: string | number
  unit: string
}

export default function StatCard({ label, value, unit }: StatCardProps) {
  return (
    <div className="bg-primary text-white rounded-card p-6 flex flex-col gap-2">
      <span className="text-small opacity-80">{label}</span>
      <div>
        <span className="text-heading-2 font-semibold">{value}</span>
        <span className="text-body-large ml-1 opacity-80">{unit}</span>
      </div>
    </div>
  )
}
