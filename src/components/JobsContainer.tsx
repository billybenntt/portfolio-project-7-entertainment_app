import Job from './Job.jsx'
import { useEffect } from 'react'
import Loading from './Loading.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../styles/wrappers/JobsContainer.jsx'
import { getAllJobs } from '../store/features/allJobs/allJobsSlice.jsx'
import PageBtnContainer from './PageBtnContainer.jsx'

function JobsContainer () {

  const dispatch = useDispatch()

  const {
    isLoading,
    jobs,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector(store => store.allJobs)

  const hasJobs = jobs.length === 0

  // EFFECT - LOAD ALL ITEMS
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, sort, searchType])

  // LOADING RETURN
  if (isLoading) {
    return (
      <Wrapper>
        <Loading center={true}/>
      </Wrapper>
    )
  }

  // NO JOBS  RETURN
  if (hasJobs) {
    return (
      <Wrapper>
        <h4>No Jobs to Display....</h4>
      </Wrapper>
    )
  }

  const jobsList = jobs.map((item) => {
    const { _id: id } = item

    return (
      <Job key={id} {...item}/>
    )
  })

  // DEFAULT RETURN
  return (
    <Wrapper>
      <h4>{totalJobs} {totalJobs > 1 ? 'Jobs' : 'Job'} Found</h4>
      <div className="jobs">
        {jobsList}
      </div>
      {numOfPages > 1 && <PageBtnContainer/>}
    </Wrapper>
  )
}

export default JobsContainer
