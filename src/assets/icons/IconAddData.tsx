import * as React from "react"

function IconAddData(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 22h14a2 2 0 002-2V7l-5-5H6a2 2 0 00-2 2v4" />
      <path d="M14 2v4a2 2 0 002 2h4M3 15h6M6 12v6" />
    </svg>
  )
}

export default IconAddData
