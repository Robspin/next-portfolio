import PageContainer from "@/components/page-container"
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import ContactForm from '@/components/contact-form'

const Alien = ({ ...props }) => {
    const group = useRef()
    const { scene, animations } = useLoader(GLTFLoader, '/assets/gltf/dancing_alien/scene.gltf')
    const { actions, mixer } = useAnimations(animations, group)

    // model author attribution
    // "Dancing Alien" (https://skfb.ly/oyVGw) by nthmn.exe is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/).

    useEffect(() => {
        const action = actions['mixamo.com']
        action?.play()
    }, [mixer])

    return <primitive ref={group} object={scene} {...props} />
}

const Astronaut = ({ ...props }) => {
    const group = useRef()
    const { scene, animations } = useLoader(GLTFLoader, '/assets/gltf/astronaut_dancing/scene.gltf')
    const { actions, mixer } = useAnimations(animations, group)

    // model author attribution
    // https://skfb.ly/oHDRW) by teknikfyndet is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

    useEffect(() => {
        const action = actions['Armature.001|DANCE']
        action?.play()
    }, [mixer])

    return <primitive ref={group} object={scene} {...props} />
}

const Contact = () => {
    return (
        <PageContainer className="translate-x-[100vw]">
            <div className="lg:p-24 w-full h-full flex items-center flex-col">
                <div className="h-52 w-full flex pointer-events-none -mt-8">
                    <Canvas>
                        <directionalLight intensity={0.75} />
                        <ambientLight intensity={0.25} />
                        <Astronaut position={[-2.5,-3,0]} rotation={[-0.4, 0, 0]} scale={0.7} />
                        <Alien position={[2.5, -2.7, 0]} scale={2.8} rotation={[-0.4, 0, 0]} />
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
