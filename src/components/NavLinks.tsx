import dataLinks from '@/utils/data.links.tsx'
import {NavLink} from 'react-router-dom'

function NavLinks() {

    // NAV LINK CLASS HANDLER
    const handleClass = (status: any) => {
        const {isActive} = status
        return isActive ? 'nav-link active' : 'nav-link'
    }

    // GENERATE ELEMENTS
    const sidebarLinks = dataLinks.map((item) => {
        const {id, path, icon, text} = item
        return (
            <NavLink key={id}
                to={path} className={handleClass}>
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
