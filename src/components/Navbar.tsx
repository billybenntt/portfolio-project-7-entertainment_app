import Wrapper from '@/styles/wrappers/Navbar.jsx'
import {toggleSidebar, logoutUser} from '@/store/features/user/userSlice.ts'
import {useState} from 'react'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';
import {IconCollapse, IconUser, IconArrowDown} from '@/assets/icons'


function Navbar() {

    // STATE MANAGEMENT
    const dispatch = useAppDispatch()
    const [showLogout, setShowLogout] = useState(false)
    const {user} = useAppSelector(store => store.user)
    const userName = user?.email.split('@')[0] || "username"


    // EVENT HANDLERS
    const handleSidebarToggle = () => {
        dispatch(toggleSidebar())
    }

    const handleLogoutToggle = () => {
        setShowLogout(!showLogout)
    }

    const handleLogout = () => {
        dispatch(logoutUser("logging out"))
    }


    // CONDITIONAL RENDERING
    const isLogoutActive = showLogout ? 'dropdown show-dropdown' : 'dropdown'

    return (
        <Wrapper>
            <div className="nav-center">

                {/*TOGGLE BUTTON*/}
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={handleSidebarToggle}>
                    <IconCollapse/>
                </button>

                {/*  TEXT */}
                <div>
                    <h3 className="logo-text">Dashboard</h3>
                </div>

                {/*  LOGIN CONTAINER*/}
                <div className="btn-container">
                    <button
                        onClick={handleLogoutToggle}
                        className="btn">
                        <IconUser/>
                        {userName}
                        <IconArrowDown/>
                    </button>

                    {/* Logout Dropdown */}
                    <div className={isLogoutActive}>
                        <button
                            type="button"
                            className="dropdown-btn"
                            onClick={handleLogout}>
                            logout
                        </button>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Navbar
