import PageContainer from "@/components/page-container"
import BioTimelineSwitcher from '@/components/bio-timeline-switcher'
import { View } from '@/utils/routes'

type Props = {
    currentView: View
}

const AboutMe = ({ currentView }: Props) => {
    return (
        <PageContainer className="translate-y-[100vh]">
            <div className="h-screen w-screen flex justify-center overflow-y-scroll">
                <BioTimelineSwitcher currentView={currentView} />
            </div>
        </PageContainer>
    )
}

export default AboutMe
