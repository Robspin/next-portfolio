import { useMemo, useRef } from 'react'
import { Icosahedron, Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export const WireReactLogo = (props: any) => {
    const mesh = useRef<any>(null)

    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        mesh.current.position.y = Math.sin(t) * (Math.PI / 8)
        mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
        mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
        mesh.current.rotation.z -= delta / 4
    })

    return (
        <group ref={mesh} {...props}>
            <Line worldUnits points={points} color='#62dafb' wireframe={true} lineWidth={0.12} />
            <Line worldUnits points={points} color='#62dafb' wireframe={true} lineWidth={0.12} rotation={[0, 0, 1]} />
            <Line worldUnits points={points} color='#62dafb' wireframe={true} lineWidth={0.12} rotation={[0, 0, -1]} />
            <Icosahedron args={[1, 1]} scale={[0.4, 0.4, 0.4]}>
                <meshStandardMaterial wireframe attach="material" color="#62dafb" />
            </Icosahedron>
        </group>
    )
}