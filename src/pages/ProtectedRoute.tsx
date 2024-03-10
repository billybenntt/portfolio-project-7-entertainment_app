import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute ({ children }) {

  const { user } = useSelector(state => state.user)

  // RETURN TO LANDING
  if (!user) {
    return <Navigate to="/landing"/>
  }

  // RETURN SHARED LAYOUT
  return children
}

export default ProtectedRoute
