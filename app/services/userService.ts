import { api } from "../api/api"

const getISOWeek = (date: Date) => {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7)
  const week1 = new Date(d.getFullYear(), 0, 4)
  return 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

const getWeekBounds = (weekKey: string) => {
  const [yearStr, weekStr] = weekKey.split('-W')
  const year = parseInt(yearStr)
  const week = parseInt(weekStr)
  const jan4 = new Date(year, 0, 4)
  const jan4DayOfWeek = (jan4.getDay() + 6) % 7
  const monday = new Date(jan4)
  monday.setDate(jan4.getDate() - jan4DayOfWeek + (week - 1) * 7)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return {
    startDate: monday.toISOString().split('T')[0],
    endDate: sunday.toISOString().split('T')[0]
  }
}

export const userService = {
  getUserActivity: async (token: string, startWeek: string, endWeek: string) => {
    const activity = await api.getUserActivity(token, startWeek, endWeek)

    const totalCalories = activity.reduce(
      (sum: number, session: any) => sum + session.caloriesBurned, 0
    )

    const start = new Date(startWeek)
    const end = new Date(endWeek)
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    const restDays = totalDays - activity.length

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
      .reverse()
      .map(([key, distance]) => ({
        weekKey: key,
        ...getWeekBounds(key),
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
