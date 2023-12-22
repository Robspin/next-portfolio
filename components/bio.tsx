"use client"
import { Dispatch, ReactNode, useEffect, useState } from 'react'
import { calculateYearsFromDate } from '@/utils/datetime'
import { TypeAnimation } from 'react-type-animation'
import { View } from '@/utils/types'

const TextContainer = ({ children, className }: { children: ReactNode, className?: string }) => (
    <div className={`bg-green-300 opacity-80 animate-appear-80 rounded border border-red-400 md:ml-7 p-4 md:p-8 md:text-lg ${className}`}>
        {children}
    </div>
)

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

type Props = {
    currentView: View
    bioAnimationFinished: boolean
    setBioAnimationFinished: Dispatch<boolean>
}

const Bio = ({ currentView, setBioAnimationFinished, bioAnimationFinished }: Props) => {
    const [step, setStep] = useState(0)

    useEffect(() => {
        if (currentView === 'aboutMe' && !bioAnimationFinished) setTimeout(() => setStep(1), 1000)
        return () => {
            if (step === 2) setBioAnimationFinished(true)
        }
    }, [currentView])

    if (!bioAnimationFinished) return (
        <div className="w-full">
            {step > 0 && <TextContainer>
                     <TypeAnimation speed={70} style={{whiteSpace: 'pre-line', display: 'block'}} cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    2000, `Hi! Robin here.`,
                                    2000, `Hi! Robin here.
                                    Let me share a bit about myself.`,
                                    1000, `Hi! Robin here.
                                    Let me share a bit about myself.
                                    A while ago I used to fix cars for a living.
                                    Nowadays I am a Javascript fanboy who likes tinkering in frontend code.
                                    Passionate about technologies like react, react-native, threejs and deno.`,
                                    1000, (el) => {
                                        el?.classList.remove(CURSOR_CLASS_NAME)
                                        setStep(2)
                                    }
                                ]}/>
                    </TextContainer>}
            {step > 1 && <TextContainer className="mt-8">
                    <TypeAnimation speed={70} style={{whiteSpace: 'pre-line', display: 'block'}} cursor={false}
                                   className={CURSOR_CLASS_NAME} sequence={[
                        `For the past ${calculateYearsFromDate("2021-06-01")} years I have been working at Tracefy, a late stage
                        startup focussing on gps solutions and preventing e-bike theft.
                        Because we had a small team I had a wide variety of responsibilities. \n
                        For example:
                        - Creating web applications
                        - Creating mobile applications
                        - Creating small backend services
                        - Designing new features
                        - Helping to design the new micro-architecture landscape
                        - Drawing out our existing micro-architecture to improve stability and oversight
                        - Designing the new mobile app from scratch
                        - Leading the development of the new mobile app along with two external developers
                        - Teaching react and react-native to interns and external developers \n
                        I am currently open to working other projects.
                        Interested? Feel free to send me an email through my contact form. \n
                        Wish to see some of my past projects first?
                        Please head over to my work.`
                    ]} />
            </TextContainer>}
        </div>
    )

    return (
        <div>
            <TextContainer>
                Hi! Robin here. <br/>
                Let me share a bit about myself.<br/>
                A while ago I used to fix cars for a living.<br/>
                Nowadays I am a Javascript fanboy who likes tinkering in frontend code.<br/>
                Passionate about technologies like react, react-native, threejs and deno.<br/>
            </TextContainer>
            <TextContainer className="mt-8">
                For the past {calculateYearsFromDate("2021-06-01")} years I have been working at Tracefy, a late stage startup focussing on gps solutions and preventing e-bike theft.<br/>
                Because we had a small team I had a wide variety of responsibilities.<br/><br/>
                For example:<br/>
                    - Creating web applications<br/>
                    - Creating mobile applications<br/>
                    - Creating small backend services<br/>
                    - Designing new features<br/>
                    - Helping to design the new micro-architecture landscape<br/>
                    - Drawing out our existing micro-architecture to improve stability and oversight<br/>
                    - Designing the new mobile app from scratch.<br/>
                    - Leading the development of the new mobile app along with two external developers<br/>
                    - Teaching react and react-native to interns and external developers<br/>
                <br/>
                I am currently open to working other projects.<br /> Interested? Feel free to send me an email through my contact form.<br /><br />
                Interested in seeing some of my past projects?<br /> Please head over to my work.<br/>
            </TextContainer>
        </div>
    )
}

export default Bio