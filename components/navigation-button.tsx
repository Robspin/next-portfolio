import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    onClick: () => void
    className?: string
    title: string
    iconLeft?: ReactNode
    iconRight?: ReactNode
}

const NewNavigationButton = ({ onClick, title, className, iconRight, iconLeft }: Props) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.7 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            key={title}
            onClick={onClick} className={`select-none uppercase text-white bg-black flex rounded tracking-widest ${className}`}>
            {iconLeft}
            {title}
            {iconRight}
        </ motion.button>
    )
}

export default NewNavigationButton
