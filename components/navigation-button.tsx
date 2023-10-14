type Props = {
    onClick: () => void
    className: string
    text: string
    vertical?: boolean
}


const NavigationButton = ({ onClick, text, className, vertical, ...props }: Props) => {
    return (
        <div onClick={onClick} {...props} className={`absolute m-0 select-none uppercase border border-white text-white cursor-pointer bg-black ${vertical ? 'button-vertical px-[6px] py-2 md:px-2 md:py-3' : 'px-2 py-[6px] md:px-4 md:py-2'} font-bold tracking-[5px] ${className}`}>
            {text}
        </div>
    )
}

export default NavigationButton
