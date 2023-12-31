'use client'
import { useEffect, useMemo, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import starPng from '@/public/assets/images/star.png'
import { useAtom } from 'jotai'
import { backgroundLoadingAtom } from '@/utils/atoms'

const Stars = ({ startingZ }: { startingZ: number }) => {
    const count = 1000
    const starSprite = useLoader(TextureLoader, starPng.src)
    const starsRef = useRef<undefined | any>()

    useFrame(({ camera}) => {
        starsRef.current.position.z += 0.08
        // camera.rotation.z += 1
        starsRef.current.rotation.z -= 0.0003

        if (starsRef.current.position.z > 400) {
            starsRef.current.position.z = -800
        }
    })

    const positions = useMemo(() => {
        const positions = []

        for (let xi = 0; xi < count; xi++) {
            const vertice = () => Math.random() * 600 - 300
            positions.push(vertice(), vertice(), vertice())
        }

        return new Float32Array(positions)
    }, [count])

    return (
        <points ref={starsRef} position={[0, 0, startingZ]}>
            <bufferGeometry attach="geometry" >
                <bufferAttribute
                    attach={'attributes-position'}
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" map={starSprite} color={0xaaaaaa} size={0.8} transparent={false}
                            alphaTest={0.5} opacity={1.0} />
        </points>
    )
}

export default function StarsLoop() {
    const [, setBackgroundLoading] = useAtom(backgroundLoadingAtom)

    useEffect(() => {
        setBackgroundLoading(false)
    }, [])

    return (
        <>
            <Stars startingZ={0} />
            <Stars startingZ={-400} />
            <Stars startingZ={-800} />
        </>
    )
}
