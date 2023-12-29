import PageContainer from "@/components/page-container"
import TopNavbar from '@/components/top-navbar'


const Landing = () => {

    return (
        <PageContainer>
            <TopNavbar />
            <div className="flex flex-col justify-center mb-[100px] text-white">
                <div className="heading uppercase font-medium tracking-[8.5px] text-4xl md:text-5xl">Robin Steeman</div>
                <div className="heading heading-effect font-medium tracking-[7.4px] text-4xl md:text-5xl" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
            </div>
        </PageContainer>
    )
}

export default Landing
