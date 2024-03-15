import Wrapper from '@/styles/wrappers/JobInfo.tsx'
import React from "react";

function JobInfo(props: { text: string, icon: React.ReactElement }) {

    const {icon, text} = props

    return (
        <Wrapper>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Wrapper>
    )
}

export default JobInfo
