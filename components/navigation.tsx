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
        <div className={`absolute flex sm:gap-12 sm:bottom-8 w-screen pointer-events-none ${currentView !== 'landing' ? 'justify-center bottom-8' : 'sm:justify-center max-sm:flex-col max-sm:bottom-20'}`}>
            <AnimatePresence>
                {currentView === 'landing' ?
                    <>
                        <NavigationButton onClick={() => navigateTo('myWork')} title="my work"
                          className="group sm:px-4 max-sm:py-1 sm:py-2 pointer-events-auto"
                          iconLeft={<MoveLeft className="max-md:hidden w-6 text-white translate-x-0 mr-2 group-hover:-translate-x-1 transition" />} />
                        <NavigationButton onClick={() => navigateTo('aboutMe')} title="about me" className="sm:px-4 max-sm:py-1 sm:py-2 pointer-events-auto" />
                        <NavigationButton onClick={() => navigateTo('contact')} title="contact"
                          className="group sm:px-4 max-sm:py-1 sm:py-2 pointer-events-auto"
                          iconRight={<MoveRight className="max-md:hidden w-6 text-white translate-x-0 ml-2 group-hover:translate-x-1 transition" />} />
                    </>
                    :
                        <div>
                            <NavigationButton onClick={() => navigateTo('landing')} title="landing" className="group px-4 max-sm:py-1 sm:py-2 pointer-events-auto"
                                iconLeft={currentView === 'contact' ? <MoveLeft className="w-6 text-white translate-x-0 mr-2 group-hover:-translate-x-1 transition" /> : null}
                                iconRight={currentView === 'myWork' ? <MoveRight className="w-6 text-white translate-x-0 ml-2 group-hover:translate-x-1 transition" /> : null}
                            />
                        </div>
                    }
            </AnimatePresence>
        </div>
    )
}