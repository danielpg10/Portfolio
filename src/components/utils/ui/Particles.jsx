import React, { useRef, useMemo, useCallback } from "react"
import { useFrame } from "@react-three/fiber"

const ParticleBackground = () => {
  const pointsRef = useRef()

  const particleCount = useMemo(() => 50, []) // Reduced from 100 to 50

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      colors[i * 3] = 0.6
      colors[i * 3 + 1] = 0.7
      colors[i * 3 + 2] = 1
    }

    return [positions, colors]
  }, [particleCount])

  const updateParticles = useCallback((time) => {
    if (!pointsRef.current) return

    const positionArray = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < positionArray.length; i += 3) {
      positionArray[i + 1] += Math.sin(time + positionArray[i]) * 0.001
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y += 0.0005 // Reduced rotation speed
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    updateParticles(time)
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default React.memo(ParticleBackground)