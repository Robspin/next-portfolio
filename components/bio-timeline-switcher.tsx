'use client'
import { useEffect, useState } from 'react'
import Bio from '@/components/bio'
import Timeline from '@/components/timeline'
import Image from 'next/image'
import { View } from '@/utils/routes'

type Props = {
    currentView: View
}

export default function BioTimelineSwitcher({ currentView }: Props) {
    const [showTimeline, setShowTimeline] = useState(false)
    const [bioAnimationFinished, setBioAnimationFinished] = useState(false)

    return (
        <div className="max-w-[1024px] lg:w-[1024px] max-md:py-20 max-md:px-[60px] md:p-24">
            <div className="mt-8 mb-4 flex max-md:justify-center md:justify-end">
                <button onClick={() => {
                    setShowTimeline(!showTimeline)
                    setBioAnimationFinished(true)
                }} className="text-white border-b border-b-transparent hover:border-b-white select-none">view {showTimeline ? 'bio' : 'timeline'}</button>
            </div>
            <div className="flex max-md:flex-col pb-24 min-w-[220px]">
                <div className="max-md:self-center h-40 w-40 max-md:mb-8">
                    <div className="rounded h-40 w-40 overflow-hidden grayscale-[55%] mr-4 border border-gray-200">
                        <Image src="/assets/images/randomguy.jpeg" alt="randomguy" height={220} width={220} />
                    </div>
                </div>
            {showTimeline ? <Timeline /> : <Bio currentView={currentView} bioAnimationFinished={bioAnimationFinished} setBioAnimationFinished={setBioAnimationFinished} />}
            </div>
        </div>
    )
}
