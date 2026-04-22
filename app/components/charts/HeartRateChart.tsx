import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface Session {
  date: string
  heartRate: {
    min: number
    max: number
    average: number
  }
}

interface HeartRateChartProps {
  sessions: Session[]
}

const getDayName = (dateStr: string) => {
  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  return days[new Date(dateStr).getDay()]
}

const groupByDay = (sessions: Session[]) => {
  const days: { [key: string]: { min: number[], max: number[], average: number[] } } = {}

  sessions.forEach((session) => {
    const day = getDayName(session.date)
    if (!days[day]) {
      days[day] = { min: [], max: [], average: [] }
    }
    days[day].min.push(session.heartRate.min)
    days[day].max.push(session.heartRate.max)
    days[day].average.push(session.heartRate.average)
  })

  const dayOrder = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
  return dayOrder.map((day) => ({
    day,
    min: days[day] ? Math.round(days[day].min.reduce((a, b) => a + b) / days[day].min.length) : 0,
    max: days[day] ? Math.round(days[day].max.reduce((a, b) => a + b) / days[day].max.length) : 0,
    average: days[day] ? Math.round(days[day].average.reduce((a, b) => a + b) / days[day].average.length) : 0,
  }))
}

export default function HeartRateChart({ sessions }: HeartRateChartProps) {
  const data = groupByDay(sessions)
  const avgBpm = Math.round(data.reduce((sum, d) => sum + d.average, 0) / data.length)

  return (
    <div>
      <h3 className="text-red-500 text-xl mb-1">{avgBpm} BPM</h3>
      <p className="text-gray-400 text-sm mb-4">Fréquence cardiaque moyenne</p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} domain={[130, 190]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="max" name="Max BPM" fill="#e74c3c" radius={[4, 4, 0, 0]} />
          <Bar dataKey="min" name="Min" fill="#f8b4b4" radius={[4, 4, 0, 0]} />
          <Line dataKey="average" name="Avg BPM" stroke="#3b82f6" dot={{ fill: "#3b82f6" }} type="monotone" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
