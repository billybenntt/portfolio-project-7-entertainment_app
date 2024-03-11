import * as React from "react"

function IconCollapse(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width={18} height={18} x={3} y={3} rx={2}/>
            <path d="M15 3v18M10 15l-3-3 3-3"/>
        </svg>
    )
}

export default IconCollapse
