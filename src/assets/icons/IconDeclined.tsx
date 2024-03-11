import * as React from "react"

function IconDeclined(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4.2 4.2A2 2 0 003 6v14a2 2 0 002 2h14a2 2 0 001.82-1.18M21 15.5V6a2 2 0 00-2-2H9.5M16 2v4M3 10h7M21 10h-5.5M2 2l20 20" />
    </svg>
  )
}

export default IconDeclined
