import { api } from "../api/api"

const getISOWeek = (date: Date) => {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7)
  const week1 = new Date(d.getFullYear(), 0, 4)
  return 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

export const userService = {
  getUserActivity: async (token: string, startWeek: string, endWeek: string) => {
    const activity = await api.getUserActivity(token, startWeek, endWeek)

    // Calories totales brûlées
    const totalCalories = activity.reduce(
      (sum: number, session: any) => sum + session.caloriesBurned, 0
    )

    const start = new Date(startWeek)
    const end = new Date(endWeek)
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    const restDays = totalDays - activity.length

    // Groupement par semaine ISO — 4 dernières semaines
    const sorted = [...activity].sort((a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const weeks: { [key: string]: number } = {}
    sorted.forEach((session: any) => {
      const date = new Date(session.date)
      const key = `${date.getFullYear()}-W${getISOWeek(date)}`
      weeks[key] = (weeks[key] || 0) + session.distance
    })
    const weeklyDistance = Object.entries(weeks)
      .slice(0, 4)
      .reverse()
      .map(([_, distance], index) => ({
        week: `S${index + 1}`,
        distance: Math.round((distance as number) * 10) / 10
      }))

    return {
      sessions: activity,
      totalCalories,
      restDays,
      weeklyDistance
    }
  }
}
