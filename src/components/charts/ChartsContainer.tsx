import {useState} from 'react'
import {BarChart, AreaChart} from '@/components/charts'
import Wrapper from '@/styles/wrappers/ChartsContainer.tsx'
import {chartData} from '@/utils/data.placeholder.ts'

function ChartsContainer() {


    const [barChart, setBarChart] = useState(true)


    function toggleChart() {
        setBarChart(!barChart)
    }

    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            <button type="button" onClick={toggleChart}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </button>
            {barChart ? <BarChart data={chartData}/> : <AreaChart data={chartData}/>}
        </Wrapper>
    )
}

export default ChartsContainer
