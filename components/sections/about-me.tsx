import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import BioTimelineSwitcher from '@/components/bio-timeline-switcher'

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer>
            <div className="h-screen w-screen flex justify-center overflow-y-scroll">
                <BioTimelineSwitcher />
            </div>
            <NavigationButton onClick={() => navigateTo('myWork')} text="my work" className="button-vertical-left" vertical />
            <NavigationButton onClick={() => navigateTo('contact')} text="contact" className="button-vertical-right" vertical />
            <NavigationButton onClick={() => navigateTo('landing')} text="landing" className="top-[25px]"/>
        </PageContainer>
    )
}

export default AboutMe
