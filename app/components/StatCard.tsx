interface StatCardProps {
  label: string
  value: string | number
  unit: string
  icon?: React.ReactNode
}

export default function StatCard({ label, value, unit, icon }: StatCardProps) {
  return (
    <div className="bg-primary text-white rounded-card p-6 flex flex-col">
      {label && <span className="text-small opacity-80">{label}</span>}
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <span className="text-heading-4">{value}</span>
          <span className="text-body-large ml-1 opacity-80">{unit}</span>
        </div>
      </div>
    </div>
  )
}
