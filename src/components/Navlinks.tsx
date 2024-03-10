import links from '../utils/links.jsx'
import { NavLink } from 'react-router-dom'

function NavLinks ({ toggleSidebar }) {

  // NAV LINK CLASS HANDLER
  const handleClass = (status) => {
    const { isActive } = status
    return isActive ? 'nav-link active' : 'nav-link'
  }

  // GENERATE ELEMENTS
  const sidebarLinks = links.map((item) => {
    const { id, path, icon, text } = item
    return (
      <NavLink key={id}
        to={path} className={handleClass}
        onClick={toggleSidebar}>
        <span className="icon">{icon}</span>
        {text}
      </NavLink>
    )
  })

  return (
    <div className="nav-links">
      {sidebarLinks}
    </div>
  )
}

export default NavLinks
