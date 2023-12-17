"use client"
import MovingStars from "@/components/canvas/stars"
import Scene from "@/components/canvas/scene"
import { useState } from "react"
import { NavigationClassTypes, View } from "@/utils/types"
import Landing from '@/components/sections/landing'
import AboutMe from '@/components/sections/about-me'
import MyWork from '@/components/sections/my-work'
import Contact from '@/components/sections/contact'
import Loading from '@/components/loading'
import Navigation from '@/components/navigation'

const SpaceBackground = () => (
    <div className="h-full w-full absolute bg-black">
        <Scene>
            <MovingStars />
        </Scene>
    </div>
)

const viewPositionClass: { [key in View]: NavigationClassTypes } = {
    landing: 'move-up',
    aboutMe: 'move-down',
    contact: 'move-left',
    myWork: 'move-right'
}

export default function Home() {
    const [view, setView] = useState<View>('landing')

    const navigateTo = (view: View) => setView(view)


  return (
    <div className="h-screen w-screen overflow-hidden">
        <SpaceBackground />
        <div className={`duration-600 transition ${viewPositionClass[view]}`}>
            <Landing />
            <AboutMe currentView={view} />
            <MyWork />
            <Contact />
        </div>
        <Navigation currentView={view} navigateTo={navigateTo} />
        <Loading />
    </div>
  )
}
