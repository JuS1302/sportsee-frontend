import { api } from "../api/api"

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

    return {
      sessions: activity,
      totalCalories,
      restDays
    }
  }
}
