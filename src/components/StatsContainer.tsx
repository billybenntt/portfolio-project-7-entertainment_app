import StatItem from './StatItem.jsx'
import Wrapper from '../styles/wrappers/StatsContainer.jsx'
import {useAppSelector} from '../store/hooks.ts';
import {IconArrowRight} from '../assets/icons'


function StatsContainer () {

  const { stats } = useAppSelector(store => store.allJobs)
  const { interview, pending, declined } = stats

  const defaultStats = [
    {
      title: 'Pending Applications',
      count: pending || 0,
      icon: <IconArrowRight/>,
      color: '#e9b949',
      bcg: '#fcefc7'
    },
    {
      title: 'Interviews Scheduled',
      count: interview || 0,
      icon: <IconArrowRight/>,
      color: '#647acb',
      bcg: '#e0e8f9'
    }, {
      title: 'Jobs Declined',
      count: declined || 0,
      icon: <IconArrowRight/>,
      color: '#d66a6a',
      bcg: '#ffeeee'
    }
  ]

  const statList = defaultStats.map(((item, index) => {
    return (
      <StatItem key={index} {...item}/>
    )
  }))

  return (
    <Wrapper>
      <>
        {statList}
      </>
    </Wrapper>
  )
}

export default StatsContainer
