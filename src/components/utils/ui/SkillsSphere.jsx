import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Html } from '@react-three/drei'
import * as THREE from 'three'

export default function SkillsSphere({ skills }) {
  const groupRef = useRef()
  const sphereRef = useRef()

  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 256, 256)
    gradient.addColorStop(0, '#60A5FA')
    gradient.addColorStop(1, '#A855F7')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 256)
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * -0.05
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere ref={sphereRef} args={[4, 64, 64]}>
        <meshPhongMaterial
          map={gradientTexture}
          transparent
          opacity={0.7}
          wireframe
        />
      </Sphere>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        const x = 4.5 * Math.cos(theta) * Math.sin(phi)
        const y = 4.5 * Math.sin(theta) * Math.sin(phi)
        const z = 4.5 * Math.cos(phi)

        return (
          <Html key={skill.name} position={[x, y, z]}>
            <div className="skill-container">
              <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                <skill.icon size={20} color="#fff" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          </Html>
        )
      })}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </group>
  )
}