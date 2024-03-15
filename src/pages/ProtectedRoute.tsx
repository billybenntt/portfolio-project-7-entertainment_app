import {Navigate} from 'react-router-dom'
import {useAppSelector} from '@/store/hooks.ts';
import React from "react";

function ProtectedRoute(props: { children: React.ReactNode }) {

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
