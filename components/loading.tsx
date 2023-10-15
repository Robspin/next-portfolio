'use client'
import { useAtom } from 'jotai'
import { backgroundLoadingAtom } from '@/utils/atoms'

export default function Loading() {
    const [backgroundLoading] = useAtom(backgroundLoadingAtom)

    if (backgroundLoading) return (
        <div className="absolute w-screen h-screen bg-black">
            <div className="loading-bar" />
        </div>
    )

    return null
}
