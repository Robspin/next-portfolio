import { Dispatch } from "react"
import { NavigationClassTypes } from "@/utils/types"

type Props = {
    onClick: () => void
    className: string
    text: string
}


const NavigationButton = ({ onClick, text, className, ...props }: Props) => {
    return (
        <button onClick={onClick} {...props} className={`button ${className}`}>
            {text}
        </button>
    )
}

export default NavigationButton
