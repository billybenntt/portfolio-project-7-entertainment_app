import Wrapper from '@/styles/wrappers/StatItem.jsx'
import React from "react";


interface IProps {
    count: number,
    title: string,
    icon: React.ReactElement,
    color: string
}


function StatItem(props: IProps) {

    const {count, title, icon, color} = props

    return (
        <Wrapper color={color}>
            <header>
                <span className="count">{count}</span>
                <span className="icon">{icon}</span>
            </header>
            <h5 className="title">{title}</h5>
        </Wrapper>
    )
}

export default StatItem
