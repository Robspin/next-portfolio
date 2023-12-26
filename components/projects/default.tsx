import Image from 'next/image'
import ProjectFramerAnimation from '@/components/projects/project-framer-animation'
import WebsiteIcon from '@/components/svgs/website'
import Eye from '@/components/svgs/eye'
import Github from '@/components/svgs/github'
import ExternalALink from '@/components/external-a-link'


export default function DefaultProject() {
    return (
    <ProjectFramerAnimation>
        <div className="max-w-[1048px] max-lg:mx-6 py-6 lg:py-24 lg:h-screen lg:overflow-auto">
            <div className="bg-green-300 opacity-80 lg:mr-12 rounded p-8 border border-red-400">
                <div className="flex justify-between items-center border-b border-b-green-600">
                    <h2 className="tracking-tighter max-sm:text-5xl text-6xl pr-2 font-bold">Project title</h2>
                    <WebsiteIcon className="h-10 w-10 fill-gray-700 max-sm:hidden" />
                </div>
                <div className="flex max-md:flex-col justify-between mb-6">
                    <h3 className="tracking-tight mt-1 text-xl font-bold text-red-600">Frontend Developer - Designer</h3>
                    <div className="flex py-2 gap-3">
                        <a href="https://next-solution1.vercel.app/" target="_blank">
                            <Eye className="h-6 w-6 fill-gray-700 hover:fill-black transition" />
                        </a>
                        <a href="https://github.com/Robspin/next-solution1" target="_blank">
                            <Github className="h-6 w-6 fill-gray-700 hover:fill-black transition" />
                        </a>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="xl:flex">
                        <div className="mb-4 xl:mr-16">
                            <div className="mb-8">
                                Akira (Japanese: アキラ) is a 1988 Japanese animated cyberpunk action film[4] directed by Katsuhiro Otomo, produced by Ryōhei Suzuki and Shunzō Katō, and written by Otomo and Izo Hashimoto, based on Otomo's 1982 manga of the same name. Set in a dystopian 2019, it tells the story of Shōtarō Kaneda, the leader of a biker gang whose childhood friend, Tetsuo Shima, acquires incredible telekinetic abilities after a motorcycle accident, eventually threatening an entire military complex amid chaos and rebellion in the sprawling futuristic metropolis of Neo-Tokyo.
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
                        <div className="md:max-w-[400px] md:min-w-[400px] flex flex-col border border-green-600 max-lg:mb-8 xl:mb-auto">
                            <Image className="ml-auto" src="/assets/projects/akira/akira-scene.jpeg" alt="akira" height={300} width={1100} />
                            <div className="flex justify-center py-2 gap-4 border-t border-t-green-600 flex-wrap">
                                {['react', 'tailwind', 'figma', 'typescript', 'framer-motion'].map((tech, i) => <div key={i} className="px-2 py-1 text-xs bg-red-400 rounded-3xl font-medium tracking-wider">{tech}</div>)}
                            </div>
                        </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 mt-8">Design</h4>
                    <div className="mb-8 md:mr-14">
                        While most of the character designs and settings were adapted from the manga, the plot differs considerably and does not include much of the last half of the manga, which continued publication for two years after the film's release. The soundtrack, which draws heavily from traditional Indonesian gamelan as well as Japanese noh music, was composed by Shōji Yamashiro and performed by Geinoh Yamashirogumi.
                    </div>
                    <h4 className="text-lg font-bold mb-2">Development</h4>
                    <div className="mb-8 md:mr-14">
                        Akira was released in Japan on July 16, 1988, by Toho; it was released the following year in the United States by Streamline Pictures. It garnered an international cult following after various theatrical and VHS releases, eventually earning over $80 million worldwide in home video sales.[5] It has been cited as a masterpiece and is widely regarded by audiences and critics as one of the greatest films ever made, especially in the field of animation and in the action and science fiction genres. It is regarded as a landmark in Japanese animation, and the most influential and iconic anime film ever made.[6][7][8][9][10] It is also a pivotal film in the cyberpunk genre, particularly the Japanese cyberpunk subgenre,[11] as well as adult animation.[12] The film had a significant impact on popular culture worldwide, paving the way for the growth of anime and Japanese popular culture in the Western world as well as influencing numerous works in animation, comics, film, music, television and video games.[3][12][13] An iconic motorcycle maneuver from the film, known as the "Akira slide", has been widely referenced and homaged in many works of animation, film and television.
                    </div>
                    <h4 className="text-lg font-bold mb-2">Links and information</h4>
                    <ul className="pl-4 list-disc mb-8">
                        <ExternalALink href="https://next-solution1.vercel.app">
                            <li>View the website</li>
                        </ExternalALink>
                        <ExternalALink href="https://github.com/Robspin/next-solution1">
                            <li>View the code</li>
                        </ExternalALink>
                        <ExternalALink href="https://www.framer.com/motion/introduction/">
                            <li>Framer-motion</li>
                        </ExternalALink>
                        <ExternalALink href="https://ui.shadcn.com/">
                            <li>Shadcn</li>
                        </ExternalALink>
                    </ul>
                </div>
            </div>
        </div>
    </ProjectFramerAnimation>
    )
}