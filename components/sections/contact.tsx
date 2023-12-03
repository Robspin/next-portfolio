import PageContainer from "@/components/page-container"
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useAnimations } from '@react-three/drei'
import ContactForm from '@/components/contact-form'

const Astronaut = ({ ...props }) => {
    const group = useRef()
    // const [reversed, setReversed] = useState(true)
    const { scene, animations } = useLoader(GLTFLoader, '/assets/astronaut_dancing/scene.gltf')
    const { actions, mixer } = useAnimations(animations, group)

    // model author attribution
    // https://skfb.ly/oHDRW) by teknikfyndet is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

    // const animateWithReverse = useCallback((reversed: boolean) => {
    //     console.log('reversed: ', reversed)
    //     const action = actions['Armature.001|DANCE']
    //     // @ts-ignore
    //     action.repetitions = 1
    //     action.clampWhenFinished = true
    //     if (reversed) {
    //         action.timeScale = -1
    //         action.paused = false
    //     }
    //     else {
    //         action.timeScale = 1
    //         action.paused = false
    //     }
    //     console.log(action)
    //     // @ts-ignore
    // }, [reversed])
    //
    // const callback = (e: any) => {
    //     animateWithReverse(reversed)
    //     setReversed(prev => !prev)
    // }

    useEffect(() => {
        // mixer.addEventListener('finished', callback)
        const action = actions['Armature.001|DANCE']
        // @ts-ignore
        // action.clampWhenFinished = true
        // // @ts-ignore
        // action.repetitions = 1
        // @ts-ignore
        action.play()
        // return () => mixer.removeEventListener('finished', callback)
    }, [mixer])

    return <primitive ref={group} object={scene} {...props} />
}

const Contact = () => {
    return (
        <PageContainer className="translate-x-[100vw]">
            <div className="lg:p-24 w-full h-full flex justify-center items-center flex-col">
                <div className="h-52 w-full pointer-events-none -mt-8 max-md:w-full max-md:px-16">
                    <Canvas>
                        <directionalLight intensity={0.75} />
                        <ambientLight intensity={0.25} />
                        <Astronaut position={[0,-3.2,0]} rotation={[-0.4, 0, 0]} />
                    </Canvas>
                </div>
                <div className="-mt-8 max-md:w-full max-sm:px-[60px] max-md:px-16">
                    <ContactForm />
                </div>
            </div>
        </PageContainer>
    )
}

export default Contact
