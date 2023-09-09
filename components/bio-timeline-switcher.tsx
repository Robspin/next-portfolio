'use client'
import { ReactNode, useState } from 'react'

type Props = {
    children: ReactNode
}

const Timeline = () => {
    return <div className="text-white lg:w-[1024px]">
        timeline
    </div>
}

export default function BioTimelineSwitcher({ children }: Props) {
    const [showTimeline, setShowTimeline] = useState(false)

    return (
        <div className="max-w-[1024px] max-md:py-20 max-md:px-6 md:p-24">
            <div className="mt-8 mb-4 flex max-md:justify-center md:justify-end">
                <button onClick={() => setShowTimeline(!showTimeline)} className="text-white border-b border-b-transparent hover:border-b-white">view {showTimeline ? 'bio' : 'timeline'}</button>
            </div>
            {showTimeline ? <Timeline /> : children}
        </div>
    )
}