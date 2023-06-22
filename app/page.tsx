"use client"
import MovingStars from "@/components/canvas/stars"
import Scene from "@/components/canvas/scene"
import NavigationButton from "@/components/navigation-button"
import { useState } from "react"
import { NavigationClassTypes, PageTypes } from "@/utils/types"


const SpaceBackground = () => (
    <div className="h-full w-full absolute bg-black">
        <Scene>
            <MovingStars />
        </Scene>
    </div>
)

export default function Home() {
    const [navigationClass, setNavigationClass] = useState<NavigationClassTypes>('move-up')

    const navigateTo = (page: PageTypes) => {
        switch (page) {
            case "landing":
                setNavigationClass('move-up')
                break
            case "aboutMe":
                setNavigationClass('')
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
    <main className="h-screen w-screen relative">
        <SpaceBackground />
        <div className="h-full w-full flex justify-center items-center absolute text-white z-50">
            <div className="flex flex-col mt-20 items-center">
                <div className="heading heading-name">Robin Steeman</div>
                <div className="heading heading-effect" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
            </div>
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="bottom-[50px]"/>
        </div>
    </main>
  )
}
