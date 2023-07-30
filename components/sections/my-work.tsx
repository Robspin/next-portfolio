import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[-100vw]">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="my work" className="button-vertical-right" vertical />
        </PageContainer>
    )
}

export default MyWork
