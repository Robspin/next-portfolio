import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Tilt from 'react-parallax-tilt'
import EndlessText from '@/components/endless-text'

const MinifiedProject = () => (
    <Tilt className="group w-[200px] h-[200px] shrink-0 bg-red-400 p-1 rounded parallax-effect" perspective={500} tiltReverse glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all" glareBorderRadius="4px">
        <div className="h-40 parallax-effect flex justify-center rounded-t bg-green-300">
            <button className="h-40 w-[130%] inner-element flex justify-center items-center">
                <EndlessText className="text-white font-semibold text-4xl opacity-0 transition-opacity group-hover:opacity-70">
                    {' '}CLICK ME CLICK ME {' '}
                </EndlessText>
            </button>
        </div>
    </Tilt>
)

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[-100vw] max-lg:flex-col-reverse max-lg:flex">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="my work" className="button-vertical-right z-50" vertical />
            <div className="w-screen lg:w-[300px] max-lg:pb-8 max-lg:px-16 lg:ml-8 lg:py-24 lg:h-full shrink-0 flex lg:flex-col gap-10 overflow-auto items-center">
                <MinifiedProject />
                <MinifiedProject />
                <MinifiedProject />
                <MinifiedProject />
                <MinifiedProject />
            </div>
            <div className="max-lg:mx-16 my-6 mb-12 flex-1 flex-col bg-green-300 opacity-70 rounded lg:my-24 lg:mr-24"></div>
        </PageContainer>
    )
}

export default MyWork
