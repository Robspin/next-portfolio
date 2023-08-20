import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import Image from 'next/image'

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="px-24 py-24">
            <NavigationButton onClick={() => navigateTo('myWork')} text="my work" className="button-vertical-left" vertical />
            <NavigationButton onClick={() => navigateTo('contact')} text="contact" className="button-vertical-right" vertical />
            <NavigationButton onClick={() => navigateTo('landing')} text="landing" className="top-[25px]"/>
            <div>
                <div className="rounded overflow-hidden mr-8">
                    <Image src="/assets/projects/akira/shotaro.png" alt="shotaro" height={400} width={400} />
                </div>
            </div>
            <div className="w-full h-full bg-green-300 opacity-80 rounded border border-red-400">
                <div className="p-8 text-lg">
                    <p>
                        Hi! Robin here. <br />
                        <br />
                        Let me share a bit about myself.<br />
                        Before I was a Javascript fanboy I used to fix cars for a living.<br />
                        But after reaching a ceiling and not seeing a future for myself in the car industry I quit.<br/>
                        <br/>
                        I traveled for some time and ended up living in Japan for a while and studied Japanese.<br />
                        Figured that if I could learn Japanese I could probably also learn to code.<br />
                        That's where my coding journey started! <br />
                        <br />
                        After learning myself the basics of web development I focussed on react. <br />
                        Started freelancing and building a portfolio.<br />
                        Then after a while I got hired by Tracefy a late stage startup in creating anti-theft tracking solutions for e-Bikes.<br />
                        Where I am still working to this day. <br />
                        <br />
                    </p>
                </div>
            </div>
        </PageContainer>
    )
}

export default AboutMe
