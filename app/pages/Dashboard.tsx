import ProtectedRoute from "../components/ProtectedRoute"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import StatCard from "~/components/StatCard"
import WeeklyDistanceChart from "../components/charts/WeeklyDistanceChart"
import HeartRateChart from "../components/charts/HeartRateChart"
import { useUserData } from "../hooks/useUserData"

export default function Dashboard() {
  const { userInfo, userActivity, isLoading, error } = useUserData()

  if (isLoading) return <p className="p-10">Chargement...</p>
  if (error) return <p className="p-10 text-red-500">{error}</p>

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 px-page py-10">

          {/* Carte profil */}
          {userInfo && (
            <Card className="flex items-center justify-between mb-20">
              <div className="flex items-center gap-8">
                <img
                  src={userInfo.profile.profilePicture}
                  alt={`${userInfo.profile.firstName} ${userInfo.profile.lastName}`}
                  className="w-[104px] h-[117px] rounded-[10px] object-cover"
                />
                <div>
                  <p className="text-heading-4">
                    {userInfo.profile.firstName} {userInfo.profile.lastName}
                  </p>
                  <p className="text-text-light text-body">
                    Membre depuis le {new Date(userInfo.profile.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric", month: "long", year: "numeric"
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-text-light text-body">Distance totale parcourue</p>
                <StatCard
                  label=""
                  value={userInfo.statistics.totalDistance}
                  unit="km"
                />
              </div>
            </Card>
          )}

          {/* Section graphiques */}
          <h2 className="text-heading-4 mb-6">Vos dernières performances</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-card p-8 shadow-sm">
              <WeeklyDistanceChart weeklyDistance={userActivity.weeklyDistance} />
            </div>
            <div className="bg-white rounded-card p-8 shadow-sm">
              <HeartRateChart sessions={userActivity.sessions} />
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
