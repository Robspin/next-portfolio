import { ReactNode } from "react"
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'

export default function Scene({ children, ...props }: { children: ReactNode }) {
    return (
        <Canvas {...props}>
            <directionalLight intensity={0.75} />
            <ambientLight intensity={0.75} />
            {children}
            <Preload all />
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    )
}
