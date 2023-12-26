import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function ProjectFramerAnimation({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    )
}