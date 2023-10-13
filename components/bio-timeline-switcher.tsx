'use client'
import { useState } from 'react'
import Bio from '@/components/bio'
import Timeline from '@/components/timeline'
import Image from 'next/image'

export default function BioTimelineSwitcher() {
    const [showTimeline, setShowTimeline] = useState(false)

    return (
        <div className="max-w-[1024px] max-md:py-20 max-md:px-6 md:p-24">
            <div className="mt-8 mb-4 flex max-md:justify-center md:justify-end">
                <button onClick={() => setShowTimeline(!showTimeline)} className="text-white border-b border-b-transparent hover:border-b-white select-none">view {showTimeline ? 'bio' : 'timeline'}</button>
            </div>
            <div className="flex max-md:flex-col pb-24 min-w-[220px]">
                <div className="max-md:self-center">
                    <div className="rounded overflow-hidden max-md:mb-6">
                        <Image src="/assets/projects/akira/shotaro.png" alt="shotaro" height={280} width={280}/>
                    </div>
                </div>
            {showTimeline ? <Timeline /> : <Bio />}
            </div>
        </div>
    )
}