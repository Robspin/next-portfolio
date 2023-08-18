import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Tilt from 'react-parallax-tilt'
import EndlessText from '@/components/endless-text'
import Image from 'next/image'

const MinifiedProject = () => (
    <Tilt className="group w-[200px] h-[200px] shrink-0 bg-red-400 p-1 rounded parallax-effect" perspective={500} tiltReverse glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all" glareBorderRadius="4px">
        <div className="h-40 parallax-effect flex justify-center rounded-t bg-green-300">
            <button className="h-40 w-[120%] inner-element flex justify-center items-center">
                <EndlessText className="text-white font-semibold text-4xl opacity-0 transition-opacity group-hover:opacity-70">
                    {' '}CLICK ME CLICK ME {' '}
                </EndlessText>
            </button>
        </div>
    </Tilt>
)

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[-100vw]">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="button-vertical-right z-50" vertical />
            <div className="max-lg:flex-col max-lg:flex overflow-scroll flex h-screen">
                <div className="w-screen lg:w-[300px] max-lg:py-6 max-lg:pl-6 max-lg:pr-16 lg:py-24 lg:h-full shrink-0 flex lg:flex-col gap-10 overflow-auto items-center">
                    <MinifiedProject />
                    <MinifiedProject />
                    <MinifiedProject />
                    <MinifiedProject />
                    <MinifiedProject />
                </div>
                <div className="max-lg:mx-6 py-6 lg:py-24 lg:h-screen lg:overflow-auto">
                    <div className="bg-green-300 opacity-80 lg:mr-24 rounded p-8 border border-red-400">
                        <div className="flex justify-between border-b border-b-green-600">
                            <h2 className="tracking-tighter text-6xl pr-2 font-bold">PROJECT TITLE</h2>
                        </div>
                        <h3 className="tracking-tight mt-1 mb-6 text-xl font-bold text-red-600">Frontend Developer - Designer</h3>
                        <div className="xl:flex mt-4">
                            <p className="max-xl:mb-8 xl:mr-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="xl:min-w-[600px] flex flex-col border border-green-600 mb-8">
                                <Image className="ml-auto" src="/assets/projects/akira/akira-scene.jpeg" alt="akira" height={300} width={1100} />
                                <div className="flex justify-center py-2 gap-4 border-t border-t-green-600 flex-wrap">
                                    {['react', 'tailwind', 'figma', 'typescript', 'framer-motion'].map((tech, i) => <div key={i} className="px-2 py-1 text-xs bg-red-400 rounded-3xl font-medium tracking-wider">{tech}</div>)}
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default MyWork
