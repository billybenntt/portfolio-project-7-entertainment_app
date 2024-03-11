import * as React from "react"

function IconPending(props: React.SVGProps<SVGSVGElement>) {
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
      className="lucide lucide-calendar-clock"
      {...props}
    >
      <path d="M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.5M16 2v4M8 2v4M3 10h5M17.5 17.5L16 16.3V14" />
      <circle cx={16} cy={16} r={6} />
    </svg>
  )
}

export default IconPending
