"use client"
import MovingStars from "@/components/canvas/stars"
import Scene from "@/components/canvas/scene"
import { useState } from "react"
import { NavigationClassTypes, View } from "@/utils/routes"
import Landing from '@/components/sections/landing'
import AboutMe from '@/components/sections/about-me'
import MyWork from '@/components/sections/my-work'
import Contact from '@/components/sections/contact'
import Loading from '@/components/loading'
import MobileNavigation from '@/components/mobile-navigation'
import DesktopNavigation from '@/components/desktop-navigation'
import MouseCameraController from '@/components/canvas/mouse-camera-controller'

const SpaceBackground = () => (
    <div className="h-full w-full absolute bg-black">
        <Scene>
            <MouseCameraController />
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

  return (
    <div className="min-h-screen w-screen overflow-hidden">
        <SpaceBackground />
        <div className={`duration-600 transition ${viewPositionClass[view]}`}>
            <Landing />
            <AboutMe currentView={view} />
            <MyWork />
            <Contact />
        </div>
        <DesktopNavigation view={view} setView={setView} className="max-md:hidden" />
        <MobileNavigation view={view} setView={setView} className="md:hidden" />
        <Loading />
    </div>
  )
}
