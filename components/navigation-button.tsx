import { Dispatch } from "react"
import { NavigationClassTypes } from "@/utils/types"

type Props = {
    onClick: () => void
    className: string
    text: string
    vertical?: boolean
}


const NavigationButton = ({ onClick, text, className, vertical, ...props }: Props) => {
    return (
        <div onClick={onClick} {...props} className={`absolute select-none uppercase border border-white text-white cursor-pointer bg-black ${vertical ? 'button-vertical p-2 md:px-2 md:py-3' : 'p-2 md:px-4 md:py-2'} font-bold tracking-[5px] ${className}`}>
            {text}
        </div>
    )
}

export default NavigationButton
