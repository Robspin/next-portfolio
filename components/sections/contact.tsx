import NavigationButton from "@/components/navigation-button"
import PageContainer from "@/components/page-container"
import { PageProps } from "@/utils/types"
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import ContactForm from '@/components/contact-form'

const Astronaut = ({ ...props }) => {
    const group = useRef()
    const { scene, animations } = useLoader(GLTFLoader, '/assets/astronaut_dancing/scene.gltf')
    const { actions, mixer } = useAnimations(animations, group)


    useEffect(() => {
        // @ts-ignore
        actions['Armature.001|DANCE'].play()
    }, [mixer])

    return <primitive ref={group} object={scene} {...props} />
}

const Contact = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer className="translate-x-[100vw]">
            <NavigationButton onClick={() => navigateTo('aboutMe')} text="contact" className="button-vertical-left" vertical />
            <div className="lg:p-24 w-full h-full flex justify-center items-center flex-col">
                <div className="h-52 w-full pointer-events-none -mt-8 max-lg:w-full max-lg:px-8">
                    <Canvas>
                        <directionalLight intensity={0.75} />
                        <ambientLight intensity={0.25} />
                        <Astronaut position={[0,-2.5,0]} />
                    </Canvas>
                </div>
                <div className="-mt-8 max-lg:w-full max-lg:px-8">
                    <ContactForm />
                </div>
            </div>
        </PageContainer>
    )
}

export default Contact
