import { Outlet } from 'react-router-dom'
import Wrapper from '../../styles/wrappers/SharedLayout.tsx'
import { BigSideBar, Navbar, SmallSideBar } from '../../components'

// DASHBOARD PAGE 
function SharedLayout () {
  return (
    <Wrapper>
      <main className="dashboard">

        {/*SHARED COMPONENTS */}
        <BigSideBar/>
        <SmallSideBar/>

        <div className="dashboard-content">
          <Navbar/>

          {/*DYNAMIC PAGES */}
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
