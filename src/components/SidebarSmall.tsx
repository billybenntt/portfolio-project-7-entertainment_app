import {Logo, NavLinks} from '@/components'
import Wrapper from '@/styles/wrappers/SmallSidebar.tsx'
import {toggleSidebar} from '@/store/features/user/userSlice.ts'
import {IconClose} from '@/assets/icons'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';


// SIDEBAR COMPONENT
/* Hidden on Large Screen Sizes*/
function SidebarSmall() {

    const dispatch = useAppDispatch()
    const {isSidebarOpen} = useAppSelector(store => store.user)

    // EVENT HANDLER - CLOSE SIDEBAR
    function handleToggleSidebar() {
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
                        <IconClose/>
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

export default SidebarSmall
