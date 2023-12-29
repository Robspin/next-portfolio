import Image from 'next/image'
import WebsiteIcon from '@/components/svgs/website'
import Github from '@/components/svgs/github'
import Eye from '@/components/svgs/eye'
import ExternalALink from '@/components/external-a-link'
import { motion } from 'framer-motion'
import ProjectFramerAnimation from '@/components/projects/project-framer-animation'
import { H4, Paragraph } from '@/components/typography'
import { ImageDialog } from '@/components/image-dialog'
import ImageCarousel from '@/components/image-carousel'

const Solution1LogoFull = ({ ...props }) => (
    <svg {...props} width="47" height="18" viewBox="0 0 47 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.18604 15.0952C4.26807 15.0952 3.604 14.9512 3.19385 14.6631C2.78369 14.3701 2.56641 13.8892 2.54199 13.2202C2.51758 12.8491 2.50781 12.5122 2.5127 12.2095C2.52246 11.9067 2.53955 11.5674 2.56396 11.1914H3.55273C3.52344 11.5674 3.50879 11.9409 3.50879 12.312C3.51367 12.6831 3.52832 13.042 3.55273 13.3887C3.57715 13.6719 3.71143 13.8818 3.95557 14.0186C4.19971 14.1504 4.60254 14.2163 5.16406 14.2163C5.71582 14.2163 6.10645 14.1504 6.33594 14.0186C6.57031 13.8818 6.70215 13.6719 6.73145 13.3887C6.75586 13.042 6.76562 12.7417 6.76074 12.4878C6.76074 12.229 6.75098 11.9092 6.73145 11.5283C6.71191 11.2256 6.63135 10.9717 6.48975 10.7666C6.35303 10.5615 6.04541 10.4272 5.56689 10.3638L4.51953 10.1733C3.96777 10.0806 3.55273 9.94629 3.27441 9.77051C3.00098 9.58984 2.81299 9.36035 2.71045 9.08203C2.61279 8.79883 2.5542 8.45459 2.53467 8.04932C2.52002 7.78076 2.51514 7.49512 2.52002 7.19238C2.5249 6.88477 2.53467 6.58691 2.54932 6.29883C2.55908 5.63477 2.76172 5.16113 3.15723 4.87793C3.55762 4.58984 4.22656 4.4458 5.16406 4.4458C6.02832 4.4458 6.65576 4.58984 7.04639 4.87793C7.44189 5.16602 7.65186 5.64209 7.67627 6.30615C7.69092 6.53564 7.6958 6.82129 7.69092 7.16309C7.68604 7.5 7.67627 7.84912 7.66162 8.21045H6.66553C6.69971 7.86377 6.7168 7.51709 6.7168 7.17041C6.7168 6.82373 6.70459 6.47949 6.68018 6.1377C6.66064 5.85938 6.53125 5.6543 6.29199 5.52246C6.05762 5.39062 5.67432 5.32471 5.14209 5.32471C4.59033 5.32471 4.19482 5.39062 3.95557 5.52246C3.72119 5.6543 3.5918 5.85938 3.56738 6.1377C3.54297 6.4502 3.53076 6.76758 3.53076 7.08984C3.53564 7.41211 3.54785 7.73193 3.56738 8.04932C3.58691 8.40576 3.6626 8.6792 3.79443 8.86963C3.93115 9.05518 4.25098 9.17725 4.75391 9.23584L5.7793 9.39697C6.33105 9.47998 6.74609 9.61426 7.02441 9.7998C7.30273 9.98535 7.49072 10.2222 7.58838 10.5103C7.69092 10.7935 7.74951 11.1328 7.76416 11.5283C7.78857 11.8896 7.79834 12.1826 7.79346 12.4072C7.78857 12.6318 7.77393 12.9028 7.74951 13.2202C7.71533 13.8892 7.49805 14.3701 7.09766 14.6631C6.70215 14.9512 6.06494 15.0952 5.18604 15.0952ZM11.1187 15.0879C10.3228 15.0879 9.76123 14.9512 9.43408 14.6777C9.10693 14.4043 8.93115 13.9502 8.90674 13.3154C8.87744 12.9541 8.85791 12.5537 8.84814 12.1143C8.83838 11.6699 8.83838 11.2231 8.84814 10.7739C8.85791 10.3247 8.87744 9.91699 8.90674 9.55078C8.93115 8.91602 9.10693 8.46191 9.43408 8.18848C9.76611 7.91504 10.3276 7.77832 11.1187 7.77832C11.9194 7.77832 12.4785 7.91504 12.7959 8.18848C13.1182 8.46191 13.2915 8.91602 13.3159 9.55078C13.3452 9.91211 13.3647 10.3149 13.3745 10.7593C13.3843 11.1987 13.3843 11.6431 13.3745 12.0923C13.3647 12.5366 13.3452 12.9443 13.3159 13.3154C13.2915 13.9453 13.1182 14.3994 12.7959 14.6777C12.4785 14.9512 11.9194 15.0879 11.1187 15.0879ZM11.1187 14.2676C11.5679 14.2676 11.8877 14.2139 12.0781 14.1064C12.2686 13.9941 12.3711 13.811 12.3857 13.5571C12.4346 12.7954 12.459 12.0874 12.459 11.4331C12.459 10.7788 12.4346 10.0708 12.3857 9.30908C12.3711 9.05029 12.271 8.86719 12.0854 8.75977C11.8999 8.65234 11.5776 8.59863 11.1187 8.59863C10.6597 8.59863 10.335 8.65234 10.1445 8.75977C9.95898 8.86719 9.85889 9.05029 9.84424 9.30908C9.80029 10.0708 9.77588 10.7812 9.771 11.4404C9.771 12.0947 9.79541 12.8003 9.84424 13.5571C9.854 13.811 9.95654 13.9941 10.1519 14.1064C10.3521 14.2139 10.6743 14.2676 11.1187 14.2676ZM15.7695 15H14.8174V5.49316H15.7695V15ZM18.9263 15.0879C18.3794 15.0879 17.9668 14.9658 17.6885 14.7217C17.415 14.4775 17.2783 14.0747 17.2783 13.5132V7.87354H18.2158V13.5938C18.2158 13.833 18.2915 14.0088 18.4429 14.1211C18.5942 14.2334 18.8408 14.2896 19.1826 14.2896C19.5293 14.2896 19.832 14.231 20.0908 14.1138C20.3545 13.9966 20.5474 13.833 20.6694 13.623V7.87354H21.6216V15H20.6694V14.3262H20.4717C20.1494 14.834 19.6343 15.0879 18.9263 15.0879ZM25.2397 15.0879C24.478 15.0879 23.9629 14.9609 23.6943 14.707C23.4307 14.4531 23.2988 14.0381 23.2988 13.4619V8.69385H22.5957V7.87354H23.3208V5.85205H24.251V7.87354H25.8623V8.69385H24.2437V13.5645C24.2437 13.833 24.2998 14.0186 24.4121 14.1211C24.5244 14.2236 24.8076 14.2749 25.2617 14.2749C25.4473 14.2749 25.5889 14.2725 25.6865 14.2676C25.7891 14.2578 25.9062 14.2505 26.0381 14.2456V15.0293C25.9209 15.0488 25.7939 15.0635 25.6572 15.0732C25.5205 15.083 25.3813 15.0879 25.2397 15.0879ZM27.9277 6.54785H26.9829V5.49316H27.9277V6.54785ZM27.9277 15H26.9756V7.87354H27.9277V15ZM31.6411 15.0879C30.8452 15.0879 30.2837 14.9512 29.9565 14.6777C29.6294 14.4043 29.4536 13.9502 29.4292 13.3154C29.3999 12.9541 29.3804 12.5537 29.3706 12.1143C29.3608 11.6699 29.3608 11.2231 29.3706 10.7739C29.3804 10.3247 29.3999 9.91699 29.4292 9.55078C29.4536 8.91602 29.6294 8.46191 29.9565 8.18848C30.2886 7.91504 30.8501 7.77832 31.6411 7.77832C32.4419 7.77832 33.001 7.91504 33.3184 8.18848C33.6406 8.46191 33.814 8.91602 33.8384 9.55078C33.8677 9.91211 33.8872 10.3149 33.897 10.7593C33.9067 11.1987 33.9067 11.6431 33.897 12.0923C33.8872 12.5366 33.8677 12.9443 33.8384 13.3154C33.814 13.9453 33.6406 14.3994 33.3184 14.6777C33.001 14.9512 32.4419 15.0879 31.6411 15.0879ZM31.6411 14.2676C32.0903 14.2676 32.4102 14.2139 32.6006 14.1064C32.791 13.9941 32.8936 13.811 32.9082 13.5571C32.957 12.7954 32.9814 12.0874 32.9814 11.4331C32.9814 10.7788 32.957 10.0708 32.9082 9.30908C32.8936 9.05029 32.7935 8.86719 32.6079 8.75977C32.4224 8.65234 32.1001 8.59863 31.6411 8.59863C31.1821 8.59863 30.8574 8.65234 30.667 8.75977C30.4814 8.86719 30.3813 9.05029 30.3667 9.30908C30.3228 10.0708 30.2983 10.7812 30.2935 11.4404C30.2935 12.0947 30.3179 12.8003 30.3667 13.5571C30.3765 13.811 30.479 13.9941 30.6743 14.1064C30.8745 14.2139 31.1968 14.2676 31.6411 14.2676ZM36.1089 15H35.1641V7.87354H36.1089V8.54004H36.3359C36.4873 8.2959 36.6851 8.10791 36.9292 7.97607C37.1782 7.84424 37.4907 7.77832 37.8667 7.77832C38.4185 7.77832 38.8286 7.90039 39.0972 8.14453C39.3657 8.38379 39.5 8.78662 39.5 9.35303V15H38.5625V9.27246C38.5625 9.02832 38.4844 8.85254 38.3281 8.74512C38.1768 8.63281 37.9302 8.57666 37.5884 8.57666C37.2466 8.57666 36.9463 8.63525 36.6875 8.75244C36.4287 8.86963 36.2358 9.0332 36.1089 9.24316V15ZM45.4692 15H44.4512V5.66162H43.7261L43.6455 5.23682L44.6196 4.54102H45.4692V15Z"/>
        <line x1="0.5" y1="15" x2="0.5" y2="4" stroke="#66E3FF"/>
    </svg>
)
const Solution1LogoShort = ({ ...props }) => (
    <svg {...props} width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.18604 15.0952C4.26807 15.0952 3.604 14.9512 3.19385 14.6631C2.78369 14.3701 2.56641 13.8892 2.54199 13.2202C2.51758 12.8491 2.50781 12.5122 2.5127 12.2095C2.52246 11.9067 2.53955 11.5674 2.56396 11.1914H3.55273C3.52344 11.5674 3.50879 11.9409 3.50879 12.312C3.51367 12.6831 3.52832 13.042 3.55273 13.3887C3.57715 13.6719 3.71143 13.8818 3.95557 14.0186C4.19971 14.1504 4.60254 14.2163 5.16406 14.2163C5.71582 14.2163 6.10645 14.1504 6.33594 14.0186C6.57031 13.8818 6.70215 13.6719 6.73145 13.3887C6.75586 13.042 6.76562 12.7417 6.76074 12.4878C6.76074 12.229 6.75098 11.9092 6.73145 11.5283C6.71191 11.2256 6.63135 10.9717 6.48975 10.7666C6.35303 10.5615 6.04541 10.4272 5.56689 10.3638L4.51953 10.1733C3.96777 10.0806 3.55273 9.94629 3.27441 9.77051C3.00098 9.58984 2.81299 9.36035 2.71045 9.08203C2.61279 8.79883 2.5542 8.45459 2.53467 8.04932C2.52002 7.78076 2.51514 7.49512 2.52002 7.19238C2.5249 6.88477 2.53467 6.58691 2.54932 6.29883C2.55908 5.63477 2.76172 5.16113 3.15723 4.87793C3.55762 4.58984 4.22656 4.4458 5.16406 4.4458C6.02832 4.4458 6.65576 4.58984 7.04639 4.87793C7.44189 5.16602 7.65186 5.64209 7.67627 6.30615C7.69092 6.53564 7.6958 6.82129 7.69092 7.16309C7.68604 7.5 7.67627 7.84912 7.66162 8.21045H6.66553C6.69971 7.86377 6.7168 7.51709 6.7168 7.17041C6.7168 6.82373 6.70459 6.47949 6.68018 6.1377C6.66064 5.85938 6.53125 5.6543 6.29199 5.52246C6.05762 5.39062 5.67432 5.32471 5.14209 5.32471C4.59033 5.32471 4.19482 5.39062 3.95557 5.52246C3.72119 5.6543 3.5918 5.85938 3.56738 6.1377C3.54297 6.4502 3.53076 6.76758 3.53076 7.08984C3.53564 7.41211 3.54785 7.73193 3.56738 8.04932C3.58691 8.40576 3.6626 8.6792 3.79443 8.86963C3.93115 9.05518 4.25098 9.17725 4.75391 9.23584L5.7793 9.39697C6.33105 9.47998 6.74609 9.61426 7.02441 9.7998C7.30273 9.98535 7.49072 10.2222 7.58838 10.5103C7.69092 10.7935 7.74951 11.1328 7.76416 11.5283C7.78857 11.8896 7.79834 12.1826 7.79346 12.4072C7.78857 12.6318 7.77393 12.9028 7.74951 13.2202C7.71533 13.8892 7.49805 14.3701 7.09766 14.6631C6.70215 14.9512 6.06494 15.0952 5.18604 15.0952ZM10.6499 15H9.63184V5.66162H8.90674L8.82617 5.23682L9.80029 4.54102H10.6499V15Z" />
        <line x1="0.5" y1="15" x2="0.5" y2="4" stroke="#66E3FF"/>
    </svg>
)

export default function Solution1() {
    return (
        <ProjectFramerAnimation>
            <div className="max-w-[1048px] max-lg:mx-6 py-6 lg:py-24 lg:h-screen lg:overflow-auto">
                <div className="bg-green-300 opacity-80 lg:mr-12 rounded p-8 border border-red-400">
                    <div className="flex justify-between items-center border-b border-b-green-600">
                        <h2 className="tracking-tighter max-sm:text-5xl text-6xl pr-2 font-bold">Solution 1</h2>
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
                        <div className="grid xl:grid-cols-2">
                            <div className="mb-4 xl:mr-16">
                                <H4>Introduction</H4>
                                <Paragraph>
                                    This project came to life when I started playing with the idea of freelancing again.
                                    But mostly I wanted to test my skills and see if I could create a brand and website
                                    within a weekend.
                                    It was also a great opportunity to play with framer-motion as an animation library.
                                </Paragraph>
                                <H4>Requirements</H4>
                                <Paragraph>
                                    <ul className="pl-4 list-disc mb-8">
                                        <li>Clean and simple responsive design</li>
                                        <li>Use transitions and small animations</li>
                                        <li>Have a working contact form solution</li>
                                        <li>Have it finished in a weekend</li>
                                    </ul>
                                </Paragraph>
                            </div>
                            <div className="flex justify-end">
                                <div className="border border-green-600 mb-8 w-full">
                                    <ImageDialog src="/assets/projects/solution1/2.jpg" alt="Solution 1">
                                        <Image className="ml-auto" src="/assets/projects/solution1/2.jpg"
                                               alt="Solution 1" height={400} width={1200}/>
                                    </ImageDialog>
                                    <div
                                        className="flex justify-center py-2 gap-4 border-t border-t-green-600 flex-wrap">
                                        {['react', 'tailwind', 'figma', 'typescript', 'framer-motion'].map((tech, i) =>
                                            <div key={i}
                                                 className="px-2 py-1 text-xs bg-red-400 rounded-3xl font-medium tracking-wider">{tech}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <H4>Design</H4>
                        <Paragraph>
                            After a few sketches I had an idea for which direction I wanted to go.<br/>
                            For the color scheme I chose a light blue tint color that also worked in light mode.<br/>
                            It was fun creating the solution 1 logo icons.
                        </Paragraph>
                        <div className="py-4 flex max-sm:flex-col gap-8 mb-8">
                            <div className="bg-black rounded lg p-4">
                                <Solution1LogoShort className="h-10 w-10 fill-white"  />
                            </div>
                            <div className="bg-black rounded lg p-4">
                                <Solution1LogoFull className="h-10 w-32 fill-white" />
                            </div>
                        </div>
                        <H4>Development</H4>
                        <Paragraph>
                            My framework of choice is Nextjs.<br/>
                            Framer-motion was a nice developer experience for implementing scroll based transitions and animations<br/>
                            I am likely to use this library again in the future.<br/>
                            For the contact form I ended up using the shadcn components with react-hook-form and used node-mailer as a backend solution for sending the emails.<br/>
                        </Paragraph>
                        <ImageCarousel imageUrls={['/assets/projects/solution1/1.jpg', '/assets/projects/solution1/2.jpg', '/assets/projects/solution1/3.jpg']} />
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
