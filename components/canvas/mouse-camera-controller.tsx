"use client"
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'

export default function MouseCameraController() {
    const { camera } = useThree()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: -(event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useFrame(() => {
        const factorX = 0.5
        const factorY = 0.5

        camera.rotation.x += (mousePosition.y * factorY - camera.rotation.x) * 0.1
        camera.rotation.y += (mousePosition.x * factorX - camera.rotation.y) * 0.1
    })

    return null
}