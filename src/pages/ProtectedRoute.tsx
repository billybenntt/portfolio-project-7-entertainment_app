import {Navigate} from 'react-router-dom'
import {useAppSelector} from '../store/hooks.ts';

function ProtectedRoute(props) {

    const {children} = props


    const {user} = useAppSelector(state => state.user)

    // RETURN TO LANDING
    if (!user) {
        return <Navigate to="/landing"/>
    }

    // RETURN SHARED LAYOUT
    return children
}

export default ProtectedRoute
