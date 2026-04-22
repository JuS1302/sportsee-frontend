import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface WeeklyDistance {
  week: string
  distance: number
}

interface WeeklyDistanceChartProps {
  weeklyDistance: WeeklyDistance[]
}

const CustomLegend = () => (
  <div className="flex items-center gap-2 mt-2">
    <div className="w-2 h-2 rounded-full bg-[#7987FF]"></div>
    <span className="text-[#707070] text-small">Km</span>
  </div>
)

export default function WeeklyDistanceChart({ weeklyDistance }: WeeklyDistanceChartProps) {
  const avg = Math.round(weeklyDistance.reduce((sum, w) => sum + w.distance, 0) / weeklyDistance.length)

  return (
    <div>
      <h3 className="text-primary text-xl mb-1">{avg} km en moyenne</h3>
      <p className="text-text-light text-small mb-4">Total des kilomètres 4 dernières semaines</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyDistance} barSize={14} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#F1F1F1" />
          <XAxis dataKey="week" axisLine={{ stroke: "#717171" }} tickLine={false} tick={{ fill: "#707070", fontSize: 12 }} />
          <YAxis axisLine={{ stroke: "#717171" }} tickLine={false} tick={{ fill: "#707070", fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="distance" fill="#B6BDFC" radius={[7, 7, 7, 7]} />
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend />
    </div>
  )
}
