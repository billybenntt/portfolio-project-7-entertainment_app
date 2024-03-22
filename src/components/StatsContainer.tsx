import {StatCard} from '@/components'
import Wrapper from '@/styles/wrappers/StatsContainer.tsx'
import {useAppSelector} from '@/store/hooks.ts';
import {IconPending, IconScheduled, IconDeclined} from '@/assets/icons'


function StatsContainer() {

    const {stats} = useAppSelector(store => store.allJobs)
    const {interview, pending, declined} = stats

    const defaultStats = [
        {
            title: 'Pending Applications',
            count: pending || 20,
            icon: <IconPending/>,
            color: '#e9b949',
        },
        {
            title: 'Interviews Scheduled',
            count: interview || 20,
            icon: <IconScheduled/>,
            color: '#647acb',
        }, {
            title: 'Jobs Declined',
            count: declined || 20,
            icon: <IconDeclined/>,
            color: '#d66a6a',
        }
    ]

    const statList = defaultStats.map(((item, index) => {
        return (
            <StatCard key={index} {...item}/>
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
