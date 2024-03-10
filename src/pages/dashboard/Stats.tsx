import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../store/features/allJobs/allJobsSlice.jsx'
import { Loading, StatsContainer, ChartsContainer } from '../../components'

function Stats() {

  const { isLoading, monthlyApplications } = useSelector(store => store.allJobs)
  const showCharts = monthlyApplications.length > 0
  const dispatch = useDispatch()

  // EFFECT - LOAD DATA
  useEffect(() => {
    dispatch(showStats())
  }, [])



  // LOADING RETURN
  if (isLoading) {
    return (
      <Loading />
    )
  }

  // DEFAULT RETURN
  return (
    <>
      <StatsContainer />
      {showCharts && <ChartsContainer />}
    </>
  )
}

export default Stats
