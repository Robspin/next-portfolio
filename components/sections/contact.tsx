import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"

const Contact = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[100vw]">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="contact" className="button-vertical-left" vertical />
        </PageContainer>
    )
}

export default Contact
