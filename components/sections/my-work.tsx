import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Tilt from 'react-parallax-tilt'

const MinifiedProject = () => (
    <Tilt className="w-[200px] h-[200px] shrink-0 bg-red-400 rounded parallax-effect" perspective={500} tiltReverse glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all" glareBorderRadius="4px">
        <button className="inner-element w-full h-full flex justify-center items-center opacity-70">
            <p className="font-medium text-2xl">TESTERINO</p>
        </button>
    </Tilt>
)

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[-100vw] px-24 py-16">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="my work" className="button-vertical-right" vertical />
            <div className="w-[232px] shrink-0 flex flex-col gap-10 h-full overflow-y-scroll left-20 top-0 py-16 absolute items-center">
                <MinifiedProject />
                <MinifiedProject />
                <MinifiedProject />
                <MinifiedProject />
            </div>
            <div className="w-full ml-[240px] h-full bg-green-300 opacity-70 rounded"></div>
        </PageContainer>
    )
}

export default MyWork
