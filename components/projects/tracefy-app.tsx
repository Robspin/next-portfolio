import Image from 'next/image'
import Github from '@/components/svgs/github'
import Eye from '@/components/svgs/eye'
import ExternalALink from '@/components/external-a-link'
import { motion } from 'framer-motion'
import MobileIcon from '@/components/svgs/mobile'

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
                        <h2 className="tracking-tighter max-sm:text-5xl text-6xl pr-2 font-bold">Tracefy App - Solo & Pro</h2>
                        <MobileIcon className="h-10 w-10 fill-gray-700 max-sm:hidden" />
                    </div>
                    <div className="flex max-md:flex-col justify-between mb-6">
                        <h3 className="tracking-tight mt-1 text-xl font-bold text-red-600">Project lead - Frontend Developer - Designer</h3>
                    </div>
                    <div className="mt-4">
                        <div className="xl:flex">
                            <div className="mb-4 xl:mr-16">
                                <div className="mb-8">
                                    One of my biggest projects while working at Tracefy was the creation of the new consumer apps.
                                    Our existing app was created by an external app development agency.<br/>
                                    And because of our growth and desire flexibility and control the decision was made to create the new Tracefy app inhouse.<br/>
                                </div>
                                <div className="mb-8">
                                    Even though my ux/ui experience was lacking at the time. I was given the task of the design process.
                                    This was a lengthy process of doing customer research and collecting data.
                                    Multiple design iterations and eventually starting over from scratch.
                                </div>
                                <div>
                                    The requirements were:
                                </div>
                                <ul className="pl-4 list-disc mb-8">
                                    <li>Clean and simple responsive design</li>
                                    <li>Use transitions and small animations</li>
                                    <li>Have a working contact form solution</li>
                                    <li>Have a working good looking website fast</li>
                                </ul>
                            </div>
                            <div className="md:max-w-[400px] flex flex-col border border-green-600 mb-8">
                                <Image className="ml-auto" src="/assets/projects/tracefy-app/app-screen.jpeg" alt="Tracefy App" height={400} width={400} />
                                <div className="flex justify-center py-2 gap-4 border-t border-t-green-600 flex-wrap">
                                    {['expo', 'react-native', 'figma', 'typescript', 'reanimated', 'lottie'].map((tech, i) => <div key={i} className="px-2 py-1 text-xs bg-red-400 rounded-3xl font-medium tracking-wider">{tech}</div>)}
                                </div>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Design</h4>
                        <div className="mb-8 md:mr-14">
                            After a few sketches I had an idea for which direction I wanted to go.<br/>
                            For the color scheme I chose a light blue tint color that also worked in light mode.<br/>
                            It was fun creating the solution 1 logo icons.
                        </div>
                        <h4 className="text-lg font-bold mb-2">Development</h4>
                        <div className="mb-8 md:mr-14">
                            My framework of choice is React in combination with Nextjs<br/>
                            Framer-motion was a interesting developer experience for implementing scroll based transitions and animations<br/>
                            I will likely use the library again in the future.<br/>
                            For the contact form I ended up using the shadcn components and used node-mailer as a backend solution for sending the emails<br/>
                            In the end it took me a bit over a weekend to create.<br/>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Links and information</h4>
                        <ul className="pl-4 list-disc mb-8">
                            <ExternalALink href="https://docs.expo.dev/">
                                <li>Expo documentation</li>
                            </ExternalALink>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
