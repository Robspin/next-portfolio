import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[-100vw] px-24 py-16">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="my work" className="button-vertical-right" vertical />
            <div className="w-full h-full flex gap-10">
                <div className="w-[200px] shrink-0 flex flex-col gap-10 overflow-y-auto">
                    <div className="w-[200px] h-[200px] shrink-0 bg-red-400"></div>
                    <div className="w-[200px] h-[200px] shrink-0 bg-red-400"></div>
                    <div className="w-[200px] h-[200px] shrink-0 bg-red-400"></div>
                    <div className="w-[200px] h-[200px] shrink-0 bg-red-400"></div>
                </div>
                <div className="w-full h-full bg-green-300"></div>
            </div>
        </PageContainer>
    )
}

export default MyWork
