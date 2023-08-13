import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="px-24 py-24">
            <NavigationButton onClick={() => navigateTo('myWork')} text="my work" className="button-vertical-left" vertical />
            <NavigationButton onClick={() => navigateTo('contact')} text="contact" className="button-vertical-right" vertical />
            <NavigationButton onClick={() => navigateTo('landing')} text="landing" className="top-[25px]"/>
            <div className="w-full h-full bg-green-300 opacity-70 rounded"></div>
        </PageContainer>
    )
}

export default AboutMe
