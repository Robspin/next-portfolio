'use client'
import { Dispatch, useState } from 'react'
import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Tilt from 'react-parallax-tilt'
import EndlessText from '@/components/endless-text'
import Image from 'next/image'
import DefaultProject from '@/components/projects/default'
import Solution1 from '@/components/projects/solution-1'

type ProjectSlug = 'default' | 'solution1'

type MinifiedProjectProps = {
    name: string
    slug: ProjectSlug
    onClick?: () => void
    videoDisabled?: boolean
}

const MinifiedProject = ({ name, slug, onClick, videoDisabled }: MinifiedProjectProps) => {

    return (
        <Tilt className="group w-[200px] h-[200px] shrink-0 bg-red-400 p-1 rounded parallax-effect" perspective={500}
              tiltReverse glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all"
              glareBorderRadius="4px">
            <div onClick={onClick} className="h-40 parallax-effect flex justify-center rounded-t bg-black">
                <button className="h-40 w-[120%] inner-element flex justify-center items-center">
                    <EndlessText
                        className="text-white font-semibold text-4xl opacity-0 transition-opacity group-hover:opacity-70">
                        {' '}CLICK ME CLICK ME {' '}
                    </EndlessText>
                </button>
                <div className="h-full w-full absolute">
                    {/*{!videoDisabled ? <video src={`/assets/projects/${slug}/preview.mov`} autoPlay={true} loop height={200}*/}
                    {/*                                                                        width={200}/> :*/}
                    {/*    <Image src={`/assets/projects/${slug}/card.jpeg`} alt={name} height={200} width={200}/>}*/}
                    <Image src={`/assets/projects/${slug}/card.jpeg`} alt={name} height={200} width={200}/>
                    <p className="text-xl text-center mt-1 text-gray-800">{name}</p>
                </div>
            </div>
        </Tilt>
    )
}

const projects: MinifiedProjectProps[] = [{ name: 'Solution 1', slug: 'solution1' }, { name: 'Project', slug: 'default' }, { name: 'Project', slug: 'default' }, { name: 'Project', slug: 'default' }, { name: 'Project', slug: 'default' }, { name: 'Project', slug: 'default' }]

const MyWork = ({ navigateTo }: PageProps) => {
    const [activeProject, setActiveProject] = useState<ProjectSlug>('default')

    const renderProject = () => {
        switch (activeProject) {
            case 'solution1':
                return <Solution1 />
            default:
                return <DefaultProject />
        }
    }

    return (
        <PageContainer className="translate-x-[-100vw]">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="button-vertical-right z-50" vertical />
            <div className="max-lg:flex-col max-lg:flex overflow-scroll flex h-screen">
                <div className="w-screen lg:w-[300px] max-lg:py-6 max-lg:pl-6 max-lg:pr-16 lg:py-24 lg:h-full shrink-0 flex lg:flex-col gap-10 overflow-auto items-center">
                    {projects.map(({ name, slug}, index) =>
                        <MinifiedProject name={name} slug={slug} key={index} onClick={() => setActiveProject(slug)} videoDisabled />)}
                </div>
                {renderProject()}
            </div>
        </PageContainer>
    )
}

export default MyWork
