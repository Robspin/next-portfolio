'use client'
import { useAtom } from 'jotai'
import { backgroundLoadingAtom } from '@/utils/atoms'
import { useEffect, useState } from 'react'

export default function Loading() {
    const [backgroundLoading] = useAtom(backgroundLoadingAtom)
    const [emptyAnimationStarted, setEmptyAnimationStarted] = useState(false)
    const [startFadeOut, setStartFadeOut] = useState(false)

    useEffect(() => {
        if (!backgroundLoading) {
            setTimeout(() => setEmptyAnimationStarted(true), 1500)
            setTimeout(() => setStartFadeOut(true), 2600)
        }
    }, [backgroundLoading])

    if (!startFadeOut) return (
        <div className="absolute w-screen min-h-screen bg-black flex items-center justify-center">
            <div className="w-7/12 h-[2px] relative">
                <div className={`h-full bg-white absolute ${emptyAnimationStarted ? 'animate-empty' : 'animate-fill left-0 right-0'}`} />
            </div>
        </div>
    )

    if (startFadeOut) return <div className="w-screen min-h-screen bg-black pointer-events-none animate-disappear opacity-0" />
}
