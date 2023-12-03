import * as React from "react"
import { SVGProps } from "react"

const MobileIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        {...props}
    >
        <path
            fill="#1E3050"
            d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zm128 336h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        />
    </svg>
)
export default MobileIcon
