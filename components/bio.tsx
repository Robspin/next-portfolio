import { ReactNode } from 'react'
import { calculateYearsFromDate } from '@/utils/datetime'

const TextContainer = ({ children, className }: { children: ReactNode, className?: string }) => (
    <div className={`bg-green-300 opacity-80 animate-appear-80 rounded border border-red-400 md:ml-7 p-4 md:p-8 md:text-lg ${className}`}>
        {children}
    </div>
)

export default function Bio() {
    return (
        <div>
            <TextContainer>
                        Hi! Robin here. <br/>
                        <br/>
                        Let me share a bit about myself.<br/>
                        A while ago I used to fix cars for a living.<br/>
                        Nowadays I am a Javascript fanboy who likes tinkering in frontend code.<br/>
                        Some technologies which I am passionate about are react, react-native, threejs and deno.<br/>
            </TextContainer>
            <TextContainer className="mt-8">
                    For the past {calculateYearsFromDate("2021-06-01")} years I have been working at Tracefy, a late stage startup focussing on gps solutions and preventing e-bike theft.<br/>
                    Because we had a small team I had a wide variety of responsibilities.<br/>
                    For example:<br/>
                    <ul className="list-disc pl-4 mt-2">
                        <li>Creating web applications</li>
                        <li>Creating mobile applications</li>
                        <li>Creating small backend services</li>
                        <li>Designing new features</li>
                        <li>Helping to design the new micro-architecture landscape</li>
                        <li>Drawing out our existing micro-architecture to improve stability and oversight</li>
                        <li>Designing the new mobile app from scratch.</li>
                        <li>Leading the development of the new mobile app along with two external developers</li>
                        <li>Teaching react and react-native to interns and external developers</li>
                    </ul>
                    <br/>
                    I am currently open to working other projects.<br /> Interested? Feel free to send me an email throught my contact form.<br /><br />
                    Wish to see some of my past projects first?<br /> Please head over to my work.<br/>
            </TextContainer>
        </div>
    )
}