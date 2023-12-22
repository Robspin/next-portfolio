import Image from 'next/image'
import ExternalALink from '@/components/external-a-link'
import { motion } from 'framer-motion'
import MobileIcon from '@/components/svgs/mobile'
import { ImageDialog } from '@/components/image-dialog'
import ImageCarousel from '@/components/image-carousel'
import { H2, H4, Paragraph } from '@/components/typography'

export default function TracefyApp() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
        >
            <div className="max-w-[1048px] max-lg:mx-6 py-6 lg:py-24 lg:h-screen lg:overflow-auto">
                <div className="bg-green-300 opacity-80 lg:mr-12 rounded p-8 border border-red-400">
                    <div className="flex justify-between items-center border-b border-b-green-600">
                        <H2>Tracefy App - Solo & Pro</H2>
                        <MobileIcon className="h-10 w-10 fill-gray-700 max-sm:hidden" />
                    </div>
                    <div className="flex max-md:flex-col justify-between mb-6">
                        <h3 className="tracking-tight mt-1 text-xl font-bold text-red-600">Project lead - Frontend Developer - Designer</h3>
                    </div>
                    <div className="mt-4">
                        <div className="grid xl:grid-cols-2">
                            <div className="mb-4 xl:mr-16">
                                <H4>Introduction</H4>
                                <Paragraph>
                                    One of my biggest projects while working at Tracefy was the creation of the new
                                    consumer app('s).<br/>
                                    Tracefy is a Netherlands based company which anti theft solutions mainly focussed on
                                    e-bikes.
                                    Their main product is a tracker which which is sold through local bicycle shops.
                                    After purchase the customer can download and connect the Tracefy app.
                                </Paragraph>
                                <Paragraph>
                                    The app can be used for several things, for example viewing the current bike
                                    location or viewing your past
                                    trips.
                                    But most importantly if the bicycle gets stolen. It can be used to activate
                                    Tracefy's recovery service.
                                    This means members of an authorized team will go out and recover your bike for you!
                                </Paragraph>
                                <H4>Wait there's two?</H4>
                                <Paragraph>
                                    Far into the development of the Tracefy app was working on the release of a new
                                    product.
                                    Namely a tracker called Tracefy Solo, a lighter version of Tracefy's main product
                                    (now called the Tracefy Pro).
                                    This meant another lighter version app also needed to be built.
                                </Paragraph>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <div className="border border-green-600 mb-8 w-full">
                                        <ImageDialog src="/assets/projects/tracefy-app/figma-1.png" alt="Tracefy App">
                                            <Image src="/assets/projects/tracefy-app/figma-1.png" alt="Tracefy App"
                                                   height={400} width={1200}/>
                                        </ImageDialog>
                                        <div
                                            className="flex justify-center py-2 gap-4 border-t border-t-green-600 flex-wrap">
                                            {['expo', 'react-native', 'figma', 'typescript', 'reanimated', 'lottie'].map((tech, i) =>
                                                <div key={i}
                                                     className="px-2 py-1 text-xs bg-red-400 rounded-3xl font-medium tracking-wider">{tech}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <H4>Design</H4>
                        <Paragraph>
                            Even though my ux/ui experience was lacking at the time. I was also given the task of the
                            design process.
                            This was a lengthy process of doing customer research and collecting data.
                            Multiple design iterations, a brief collaboration with an external designer and starting
                            over from scratch more than once.
                        </Paragraph>
                        <Paragraph>
                            In the end I am happy with the resulting clean and modern style.
                        </Paragraph>
                        <H4>Development</H4>
                        <Paragraph>
                            As an experienced react developer I chose expo (react-native) as my framework for app
                            development.
                            We at Tracefy were low on developer capacity so a large part of the development of the Pro
                            app was me working together two developers from an app agency.
                            Helpful with their app building experience they did not however have any prior react-native
                            experience.
                            It was up to me to teach them the basics and best practices.
                        </Paragraph>
                        <Paragraph>
                            We created a customisable google map with several map bounds to be changed by a button
                            press.
                            For transitions and simple animations we used the Reanimated library and for complex
                            animations we used Lottie.
                            The Expo workflow allows for a really fast cross platform mobile development pace.
                            I have become quite the Expo fan in the process. And any future projects will also be in
                            Expo when given the choice.
                        </Paragraph>
                        <ImageCarousel imageUrls={['/assets/projects/tracefy-app/figma-1.png', '/assets/projects/tracefy-app/figma-1.png', '/assets/projects/tracefy-app/figma-1.png']} />
                        <H4>Links and information</H4>
                        <ul className="pl-4 list-disc mb-8">
                            <ExternalALink href="https://docs.expo.dev/">
                                <li>Expo documentation</li>
                            </ExternalALink>
                            <ExternalALink href="https://docs.swmansion.com/react-native-reanimated/">
                                <li>Reanimated documentation</li>
                            </ExternalALink>
                            <ExternalALink href="https://github.com/react-native-maps/react-native-maps">
                                <li>React native maps github</li>
                            </ExternalALink>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
