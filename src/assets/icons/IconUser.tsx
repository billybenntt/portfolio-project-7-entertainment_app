import * as React from "react"

function IconUser(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 20a6 6 0 00-12 0"/>
            <circle cx={12} cy={10} r={4}/>
            <circle cx={12} cy={12} r={10}/>
        </svg>
    )
}

export default IconUser
