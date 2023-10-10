import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Navbar from '@/components/navbar'


const Landing = ({ navigateTo }: PageProps) => {

    return (
        <PageContainer className="translate-y-[-100vh]">
            <Navbar />
            <div className="flex flex-col justify-center mb-[100px] text-white">
                <div className="heading uppercase font-medium tracking-[8.5px] text-4xl md:text-5xl">Robin Steeman</div>
                <div className="heading heading-effect font-medium tracking-[7px] text-4xl md:text-5xl" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
            </div>
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="about me" className="bottom-[140px] md:bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
