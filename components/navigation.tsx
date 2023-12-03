import { Views } from '@/utils/types'
import NavigationButton from '@/components/navigation-button'
import { MoveLeft, MoveRight } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

type Props = {
    currentView: Views
    navigateTo: (view: Views) => void
}

export default function Navigation ({ currentView, navigateTo }: Props) {

    return (
        <div className="absolute flex max-sm:flex-col sm:gap-12 bottom-8 sm:justify-center w-screen">
            <AnimatePresence>
                {currentView === 'landing' ?
                    <>
                        <NavigationButton onClick={() => navigateTo('myWork')} title="my work"
                          className="group"
                          iconLeft={<MoveLeft className="max-md:hidden w-6 text-white translate-x-0 mr-2 group-hover:-translate-x-1 transition" />} />
                        <NavigationButton onClick={() => navigateTo('aboutMe')} title="about me" />
                        <NavigationButton onClick={() => navigateTo('contact')} title="contact"
                          className="group"
                          iconRight={<MoveRight className="max-md:hidden w-6 text-white translate-x-0 ml-2 group-hover:translate-x-1 transition" />} />
                    </>
                    : <NavigationButton onClick={() => navigateTo('landing')} title="landing" className="group"
                        iconLeft={currentView === 'contact' ? <MoveLeft className="w-6 text-white translate-x-0 mr-2 group-hover:-translate-x-1 transition" /> : null}
                        iconRight={currentView === 'myWork' ? <MoveRight className="w-6 text-white translate-x-0 ml-2 group-hover:translate-x-1 transition" /> : null}
                    />}
            </AnimatePresence>
        </div>
    )
}