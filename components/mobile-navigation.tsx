"use client"
import { Menu } from 'lucide-react'
import { Dispatch, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { View, routes } from '@/utils/routes'

type Props = {
    view: View
    setView: Dispatch<View>
    className?: string
}

const MobileNavigation = ({ view, setView, className }: Props) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        setTimeout(() => setHovered(false), 1000)
    }, [view])

    const enlargementDuration = 0.3

    const containerVariants = {
        initial: { width: '50px', height: '50px' },
        animate: { width: '140px', height: '280px' }

    }

    const iconVariants = {
        initial: { opacity: 1 },
        animate: { opacity: 0, transition: { duration: 0.2 } }
    }

    const linkVariants = {
        initial: { opacity: 0 },
        animate: (i: number) => ({
            opacity: 1,
            transition: {
                delay: enlargementDuration + 0.2 + i * 0.1,
                duration: 0.3
            }
        })
    }


    return (
        <div className={`absolute bottom-16 w-screen pointer-events-none flex justify-center ${className}`}>
            <motion.div
                initial="initial"
                animate={hovered ? "animate" : "initial"}
                variants={containerVariants}
                onClick={() => setHovered(true)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`h-8 w-12 group transition-all delay-75 border border-white rounded-3xl pointer-events-auto flex justify-center items-center bg-black`}>
                <motion.div className="absolute pointer-events-none" variants={iconVariants} animate={hovered ? "animate" : "initial"}>
                    <Menu className="h-4 w-4 text-white" />
                </motion.div>
                <ul className={`flex flex-col gap-8 ${!hovered && 'hidden'}`}>
                    {routes.map((link, index) => (
                        <motion.li
                            className={`${view === link.key ? 'text-white' : 'text-stone-400 cursor-pointer hover:text-white'} transition`}
                            key={link.key}
                            onClick={() => setView(link.key)}
                            custom={index}
                            initial="initial"
                            animate={hovered ? "animate" : "initial"}
                            variants={linkVariants}
                        >
                            {link.title}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default MobileNavigation