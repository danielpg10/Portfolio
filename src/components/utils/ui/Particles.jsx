import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const ParticleBackground = () => {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const temp = []
    const count = 100
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      temp.push({ x, y, z })
    }
    return temp
  }, [])

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particles.length * 3)
    const colors = new Float32Array(particles.length * 3)

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.x
      positions[i * 3 + 1] = particle.y
      positions[i * 3 + 2] = particle.z

      colors[i * 3] = 0.6
      colors[i * 3 + 1] = 0.7
      colors[i * 3 + 2] = 1
    })

    return [positions, colors]
  }, [particles])

  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()
    const positionArray = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < positionArray.length; i += 3) {
      positionArray[i + 1] += Math.sin(time + positionArray[i]) * 0.001
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y += 0.001
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.length}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default ParticleBackground