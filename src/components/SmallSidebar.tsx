import { Logo, NavLinks } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../styles/wrappers/SmallSidebar.jsx'
import { toggleSidebar } from '../store/features/user/userSlice.jsx'




// SIDEBAR COMPONENT
/* Hidden on Large Screen Sizes*/
function SmallSideBar () {

  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector(store => store.user)

  // EVENT HANDLER - CLOSE SIDEBAR
  function handleToggleSidebar () {
    dispatch(toggleSidebar())
  }

  // CONDITIONAL RENDERING
  const isActive = isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'

  return (
    <Wrapper>
      <div className={isActive}>
        <div className="content">

          {/*CLOSE BUTTON */}
          <button className="close-btn"
            onClick={handleToggleSidebar}>
            <FaTimes/>
          </button>
          {/*HEADER */}
          <header>
            <Logo/>
          </header>

          {/*SIDEBAR LINKS */}
          <NavLinks toggleSidebar={handleToggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar
