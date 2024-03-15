import Wrapper from '@/styles/wrappers/JobInfo.tsx'

function JobInfo(props: { icon: string, text: string }) {

    const {icon, text} = props

    return (
        <Wrapper>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Wrapper>
    )
}

export default JobInfo
