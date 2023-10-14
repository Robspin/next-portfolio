import * as React from "react"
import { SVGProps } from 'react'


const WebsiteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M160 64v64h320V96c0-17.7-14.3-32-32-32H160zm-32 0H64c-17.7 0-32 14.3-32 32v32h96V64zm-96 96v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
    </svg>
)
export default WebsiteIcon
