'use client'
import { useEffect, useState } from 'react'

const useMusicPlayer = () => {
    const [music, setAudio] = useState<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (!music) {
            setAudio(new Audio('assets/music/Moon-Landing-Countdown.mp3'))
        } else {
            music.volume = 0.3
            music.loop = true
        }
    }, [music])

    useEffect(() => {
        if (!music) return
        if (isPlaying) music.play()
        else music.pause()
    }, [isPlaying])

    return { isPlaying, setIsPlaying }
}

export default function MusicPlayer() {
    const { isPlaying, setIsPlaying } = useMusicPlayer()
    return (
        <button className="-mt-4 px-4" onClick={() => setIsPlaying(!isPlaying)}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="0.577778in" height="0.411111in"
                 viewBox="0 0 52 37">
                <path className={`fill-white ${isPlaying && 'music-playing'}`}
                      strokeWidth="1"
                      d='M 50.00,20         C 50.00,20 50.00,35.00 50.00,35.00             50.00,35.00 47.00,35.00 47.00,35.00             47.00,35.00 47.00,20 47.00,20             47.00,20 50.00,20 50.00,20 Z           M 41.00,20           C 41.00,20 41.00,35.00 41.00,35.00             41.00,35.00 38.00,35.00 38.00,35.00             38.00,35.00 38.00,20 38.00,20             38.00,20 41.00,20 41.00,20 Z           M 32.00,20           C 32.00,20 32.00,35.00 32.00,35.00             32.00,35.00 29.00,35.00 29.00,35.00             29.00,35.00 29.00,20 29.00,20             29.00,20 32.00,20 32.00,20 Z           M 23.00,20           C 23.00,20 23.00,35.00 23.00,35.00             23.00,35.00 20.00,35.00 20.00,35.00             20.00,35.00 20.00,20 20.00,20             20.00,20 23.00,20 23.00,20 Z           M 14.00,20           C 14.00,20 14.00,35.00 14.00,35.00             14.00,35.00 11.00,35.00 11.00,35.00             11.00,35.00 11.00,20 11.00,20             11.00,20 14.00,20 14.00,20 Z           M 5.00,20           C 5.00,20 5.00,35.00 5.00,35.00             5.00,35.00 2.00,35.00 2.00,35.00             2.00,35.00 2.00,20 2.00,20             2.00,20 5.00,20 5.00,20 Z'/>
            </svg>
        </button>
    )
}