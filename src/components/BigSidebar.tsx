import Wrapper from '../styles/wrappers/BigSidebar.jsx'
import { Logo, NavLinks } from './'
import {useAppSelector} from '../store/hooks.ts';



// SIDEBAR COMPONENT
/* Hidden on Small Screen Sizes*/
function BigSideBar () {

  const { isSidebarOpen } = useAppSelector(store => store.user)

  // CONDITIONAL RENDERING
  const isActive = isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'

  return (
    <Wrapper>
      <div className={isActive}>

        <div className="content">
          <header>
            <Logo/>
          </header>
          <NavLinks/>
        </div>


      </div>
    </Wrapper>
  )
}

export default BigSideBar
