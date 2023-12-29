'use client'
import { useState } from 'react'
import PageContainer from "@/components/page-container"
import Tilt from 'react-parallax-tilt'
import EndlessText from '@/components/endless-text'
import Image from 'next/image'
import DefaultProject from '@/components/projects/default'
import Solution1 from '@/components/projects/solution-1'
import { AnimatePresence } from 'framer-motion'
import TracefyApp from '@/components/projects/tracefy-app'
import TracefyBackoffice from '@/components/projects/tracefy-backoffice'
import TracefyPortal from '@/components/projects/tracefy-portal'

type ProjectSlug = 'default' | 'solution1' | 'tracefy-app' | 'tracefy-portal' | 'tracefy-backoffice'
type ProjectProps = {
    name: string
    slug: ProjectSlug
}

interface ProjectComponentProps extends ProjectProps {
    activeProject: ProjectSlug
    onClick: () => void
}

const MinifiedProject = ({ name, slug, onClick, activeProject }: ProjectComponentProps) => {
    const isActiveProject = slug === activeProject
    let isLargeScreen = true

    if (typeof window !== 'undefined') {
        isLargeScreen = window.innerWidth > 600
    }

    return (
        <Tilt className={`group w-[200px] h-[168px] shrink-0 bg-red-400 p-1 rounded parallax-effect transition ${isActiveProject ? 'shadow-custom' : 'shadow-none'} shadow-violet-200`} perspective={500}
              tiltReverse tiltEnable={isLargeScreen} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all"
              glareBorderRadius="4px" tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <div onClick={onClick} className="h-40 parallax-effect flex justify-center rounded-t bg-black">
                {!isActiveProject && <button className="h-40 w-[120%] inner-element flex justify-center items-center">
                    <EndlessText
                        className="text-white font-semibold text-4xl opacity-0 transition-opacity group-hover:opacity-70">
                        {`\u00A0\u00A0\u00A0\u00A0${name}\u00A0\u00A0\u00A0\u00A0${name}`}
                    </EndlessText>
                </button>}
                <div className="h-full w-full absolute grayscale-[55%]">
                    <div className="h-40 w-full bg-orange-300 overflow-hidden">
                        <Image src={`/assets/projects/${slug}/card.jpeg`} alt={name} className="object-cover grayscale-[55%]" fill />
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

const projects: ProjectProps[] = [{ name: 'Tracefy App', slug: 'tracefy-app' }, { name: 'Solution 1', slug: 'solution1' }, { name: 'Tracefy Portal', slug: 'tracefy-portal' }, { name: 'Tracefy Backoffice', slug: 'tracefy-backoffice' }, { name: 'Project', slug: 'default' }, { name: 'Project', slug: 'default' }]

const MyWork = () => {
    const [activeProject, setActiveProject] = useState<ProjectSlug>('tracefy-app')

    const renderProject = () => {
        switch (activeProject) {
            case 'solution1':
                return <Solution1 key="solution1" />
            case 'tracefy-app':
                return <TracefyApp key="tracefyApp" />
            case 'tracefy-portal':
                return <TracefyPortal key="tracefyPortal" />
            case 'tracefy-backoffice':
                return <TracefyBackoffice key="tracefyBackoffice" />
            default:
                return <DefaultProject key="defaultProject" />
        }
    }

    return (
        <PageContainer className="translate-x-[-100vw]">
            <div className="max-lg:flex-col max-lg:flex overflow-scroll flex h-screen">
                <div className="w-screen lg:w-[300px] max-lg:py-6 max-lg:px-6 lg:py-24 lg:h-full shrink-0 flex lg:flex-col gap-10 overflow-auto items-center">
                    {projects.map(({ name, slug }, index) =>
                        <MinifiedProject name={name} slug={slug} activeProject={activeProject} key={index} onClick={() => setActiveProject(slug)} />)}
                </div>
                <div className="flex flex-col">
                    <AnimatePresence>
                         {renderProject()}
                    </AnimatePresence>
                </div>
            </div>
        </PageContainer>
    )
}

export default MyWork
