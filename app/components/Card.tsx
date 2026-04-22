interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-card p-(--spacing-card) shadow-sm ${className}`}>
      {children}
    </div>
  )
}
