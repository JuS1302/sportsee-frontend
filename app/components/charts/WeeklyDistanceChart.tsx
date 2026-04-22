import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface Session {
  date: string
  distance: number
}

interface WeeklyDistanceChartProps {
  sessions: Session[]
}

const groupByWeek = (sessions: Session[]) => {
  const weeks: { [key: string]: number } = {}

  sessions.forEach((session) => {
    const date = new Date(session.date)
    const weekNumber = Math.ceil(date.getDate() / 7)
    const key = `S${weekNumber}`
    weeks[key] = (weeks[key] || 0) + session.distance
  })

  return Object.entries(weeks).map(([week, distance]) => ({
    week,
    distance: Math.round(distance * 10) / 10
  }))
}

export default function WeeklyDistanceChart({ sessions }: WeeklyDistanceChartProps) {
  const data = groupByWeek(sessions)

  return (
    <div>
      <h3 className="text-blue-600 font-bold text-xl mb-1">
        {Math.round(data.reduce((sum, w) => sum + w.distance, 0) / data.length)} km en moyenne
      </h3>
      <p className="text-gray-400 text-sm mb-4">Total des kilomètres 4 dernières semaines</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="week" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="distance" name="Km" fill="#9b99e0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
