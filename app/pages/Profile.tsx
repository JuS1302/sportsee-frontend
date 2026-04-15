import ProtectedRoute from "../components/ProtectedRoute"

export default function Profile() {
  return (
    <ProtectedRoute>
      <h1>Profile</h1>
    </ProtectedRoute>
  )
}
