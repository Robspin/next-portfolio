import PageContainer from "@/components/page-container"
import BioTimelineSwitcher from '@/components/bio-timeline-switcher'

const AboutMe = () => {
    return (
        <PageContainer className="translate-y-[100vh]">
            <div className="h-screen w-screen flex justify-center overflow-y-scroll">
                <BioTimelineSwitcher />
            </div>
        </PageContainer>
    )
}

export default AboutMe
