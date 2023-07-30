import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"


const Landing = ({ navigateTo }: PageProps) => {

    return (
        <PageContainer className="translate-y-[-100vh]">
            <div className="flex flex-col text-center justify-center mb-[100px] text-white">
                <div className="heading heading-name font-medium tracking-widest text-5xl">Robin Steeman</div>
                <div className="heading heading-effect font-medium tracking-widest text-5xl" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
            </div>
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
