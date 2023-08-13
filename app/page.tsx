"use client"
import MovingStars from "@/components/canvas/stars"
import Scene from "@/components/canvas/scene"
import { useState } from "react"
import { NavigationClassTypes, PageTypes } from "@/utils/types"
import Landing from '@/components/sections/landing'
import AboutMe from '@/components/sections/about-me'
import MyWork from '@/components/sections/my-work'
import Contact from '@/components/sections/contact'


const SpaceBackground = () => (
    <div className="h-full w-full absolute bg-black">
        <Scene>
            <MovingStars />
        </Scene>
    </div>
)

export default function Home() {
    const [navigationClass, setNavigationClass] = useState<NavigationClassTypes>('move-down')

    const navigateTo = (page: PageTypes) => {
        switch (page) {
            case "landing":
                setNavigationClass('move-up')
                break
            case "aboutMe":
                setNavigationClass('move-down')
                break
            case "contact":
                setNavigationClass('move-left')
                break
            case "myWork":
                setNavigationClass('move-right')
                break
        }
    }


  return (
    <main className="h-screen w-screen overflow-hidden">
        <SpaceBackground />
        <div className={`duration-600 transition ${navigationClass}`}>
            <Landing navigateTo={navigateTo} />
            <AboutMe navigateTo={navigateTo} />
            <MyWork navigateTo={navigateTo} />
            <Contact navigateTo={navigateTo} />
        </div>
    </main>
  )
}
