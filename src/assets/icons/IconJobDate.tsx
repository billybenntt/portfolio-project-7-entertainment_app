import * as React from "react"

function IconJobDate(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M8 2v4M16 2v4"/>
            <rect width={18} height={18} x={3} y={4} rx={2}/>
            <path d="M3 10h18"/>
        </svg>
    )
}

export default IconJobDate
