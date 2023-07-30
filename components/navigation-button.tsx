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
        <button onClick={onClick} {...props} className={`absolute select-none uppercase border border-white text-white cursor-pointer ${vertical ? 'button-vertical px-2 py-3' : 'px-4 py-2'} font-bold tracking-[0.2em] ${className}`}>
            {text}
        </button>
    )
}

export default NavigationButton
