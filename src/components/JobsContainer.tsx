import { useEffect } from 'react'
import {Loading, Pagination, Job} from '@/components'
import Wrapper from '@/styles/wrappers/JobsContainer.tsx'
import { getAllJobs } from '@/store/features/allJobs/allJobsSlice.ts'
import {useAppSelector, useAppDispatch} from '@/store/hooks.ts';
import {JobType} from "@/types/app";

function JobsContainer () {

  const dispatch = useAppDispatch()

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
  } = useAppSelector(store => store.allJobs)

  const hasJobs = jobs.length === 0

  // EFFECT - LOAD ALL ITEMS
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, sort, searchType, dispatch])

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

  const jobsList = jobs.map((item: JobType) => {
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
      {numOfPages > 1 && <Pagination/>}
    </Wrapper>
  )
}

export default JobsContainer
