'use client'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

type Props = {
    children: ReactNode
}

const Timeline = () => {
    return <div className="text-white min-w-[1024]">
        timeline
    </div>
}

export default function BioTimelineSwitcher({ children }: Props) {
    const [showTimeline, setShowTimeline] = useState(false)

    return (
        <div className="max-w-[1024px] p-24">
            <div className="w-full mt-8 mb-4 flex justify-end">
                <button onClick={() => setShowTimeline(!showTimeline)} className="text-white border-b border-b-transparent hover:border-b-white">view {showTimeline ? 'bio' : 'timeline'}</button>
            </div>
            {showTimeline ? <Timeline /> : children}
        </div>
    )
}