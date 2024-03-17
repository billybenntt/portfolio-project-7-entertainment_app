import Wrapper from '@/styles/wrappers/JobInfo.tsx'
import React from "react";


interface IProps {
    text: string,
    icon: React.ReactElement
}

function JobInfo(props: IProps) {

    const {icon, text} = props

    return (
        <Wrapper>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Wrapper>
    )
}

export default JobInfo
