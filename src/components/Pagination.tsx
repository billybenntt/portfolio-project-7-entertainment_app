import {changePage} from '@/store/features/allJobs/allJobsSlice.ts'
import Wrapper from '@/styles/wrappers/PageBtnContainer.tsx'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';
import {IconArrowLeft, IconArrowRight} from '@/assets/icons'

function Pagination() {

    const dispatch = useAppDispatch()
    const {page, numOfPages} = useAppSelector(store => store.allJobs)

    const nextPage = () => {
        let currentPage = page + 1
        if (currentPage > numOfPages) {
            currentPage = 1
        }
        dispatch(changePage(currentPage))
    }

    const prevPage = () => {
        let currentPage = page - 1
        if (currentPage < 1) {
            currentPage = numOfPages
        }
        dispatch(changePage(currentPage))

    }

    // GENERATE PAGES ARRAY
    const pages = Array.from({length: numOfPages}, (_, index) => {
        return index + 1
    })

    // GENERATE BUTTONS
    const buttonList = pages.map((item, index) => {
        const isActive = item === page ? 'pageBtn active' : 'pageBtn'
        return (
            <button type="button" className={isActive} key={index}
                onClick={() => dispatch(changePage(item))}>
                {item}
            </button>
        )
    })

    return (
        <Wrapper>
            <button className="prev-btn" onClick={prevPage}>
                <IconArrowLeft/>
                prev
            </button>

            <div className="btn-container">
                {buttonList}
            </div>

            <button className="next-btn" onClick={nextPage}>
                next
                <IconArrowRight/>
            </button>
        </Wrapper>
    )
}

export default Pagination
