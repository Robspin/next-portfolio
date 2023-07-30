import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer>
            <NavigationButton onClick={() => navigateTo('myWork')} text="my work" className="button-vertical-left" vertical />
            <NavigationButton onClick={() => navigateTo('contact')} text="contact" className="button-vertical-right" vertical />
            <NavigationButton onClick={() => navigateTo('landing')} text="landing" className="top-[25px]"/>
        </PageContainer>
    )
}

export default AboutMe
