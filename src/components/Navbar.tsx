import Wrapper from '../styles/wrappers/Navbar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, clearStore } from '../store/features/user/userSlice.jsx'
import { Logo } from '../components'
import { useEffect, useState } from 'react'

function Navbar () {

  // STATE MANAGEMENT
  const dispatch = useDispatch()
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector(store => store.user)

  // EVENT HANDLERS
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }

  const handleLogoutToggle = () => {
    setShowLogout(!showLogout)
  }

  const handleLogout = () => {
    dispatch(clearStore('Logged out'))
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
          <FaAlignLeft/>
        </button>

        {/*  TEXT */}
        <div>
          <Logo/>
          <h3 className="logo-text">Dashboard</h3>
        </div>

        {/*  LOGIN CONTAINER*/}
        <div className="btn-container">
          <button
            onClick={handleLogoutToggle}
            className="btn">
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown/>
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
