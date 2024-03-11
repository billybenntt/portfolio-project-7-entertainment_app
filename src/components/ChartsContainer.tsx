import { useState } from 'react'
import BarChart from './BarChart.tsx'
import AreaChart from './AreaChart.tsx'
import { useSelector } from 'react-redux'
import Wrapper from '../styles/wrappers/ChartsContainer.tsx'

function ChartsContainer () {

  const { monthlyApplications: data } = useSelector(store => store.allJobs)
  const [barChart, setBarChart] = useState(true)

  function toggleChart () {
    setBarChart(!barChart)
  }

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={toggleChart}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer
