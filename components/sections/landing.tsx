import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"


const Landing = ({ navigateTo }: PageProps) => {

    return (
        <PageContainer className="translate-y-[-100vh]">
            <div className="flex flex-col text-center justify-center mb-[100px] text-white">
                <div className="heading heading-name font-medium tracking-widest text-6xl">Robin Steeman</div>
                <div className="flex justify-center items-center text-center">
                    <div className="heading heading-effect font-medium tracking-widest text-5xl" data-text="I WRITE JAVASCRIPT">I WRITE JAVASCRIPT</div>
                </div>
            </div>
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
