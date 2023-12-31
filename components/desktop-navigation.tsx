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

const DesktopNavigation = ({ view, setView, className }: Props) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (view === 'landing' || view === 'contact') setHovered(true)
    }, [view])

    const enlargementDuration = 0.5

    const containerVariants = {
        initial: { width: '42px', height: '42px' },
        animate: { width: '460px' }

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
                onMouseEnter={() => view !== "landing" && view !== "contact" && setHovered(true)}
                onMouseLeave={() => view !== "landing" && view !== "contact" && setHovered(false)}
                className={`h-8 w-12 group transition-all delay-300 ${view !== 'landing' && view !== 'contact' && 'border border-white bg-black'} rounded-3xl pointer-events-auto flex justify-center items-center`}>
                <motion.div className="absolute pointer-events-none" variants={iconVariants} animate={hovered ? "animate" : "initial"}>
                    <Menu className="h-4 w-4 text-white rotate-90" />
                </motion.div>
                <ul className={`flex gap-8 ${!hovered && 'pointer-events-none'}`}>
                    {routes.map((link, index) => (
                        <motion.li
                            className={`${view === link.key ? 'text-white cursor-default' : 'text-stone-400 cursor-pointer hover:text-white'} transition`}
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

export default DesktopNavigation