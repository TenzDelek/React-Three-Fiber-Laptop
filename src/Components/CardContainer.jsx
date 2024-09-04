'use client'
import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export default function CardContainer() {
  const { scene } = useGLTF('./rcard.glb')
  const texture = useTexture('./red.jpg')
  const backtexture=useTexture('./mains.png')
    scene.traverse((child) => {
      if (child.isMesh && child.name === 'plate') {
        // Apply texture to both sides
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          side: THREE.DoubleSide,
          emissiveIntensity: 0,
          metalness: 0,
          roughness: 0,
        })

      }
      else if(child.isMesh && child.name === 'backplate'){
        child.material = new THREE.MeshStandardMaterial({
          map: backtexture,
          side: THREE.DoubleSide,
          emissiveIntensity: 0,
          metalness: 0.2,
          roughness: 0,
        })
      }
      else{
        child.material = new THREE.MeshStandardMaterial({
          map: backtexture,
          side: THREE.DoubleSide,
          emissiveIntensity: 0,
          metalness: 0,
          roughness: 0,
        })
      }
    })
 

  return (
    <group  
      position={[0, 0, 0]} 
      rotation={[Math.PI, 0, 0]} // Rotate 180 degrees around X-axis
      scale={[1,1,1]} // Scale down the model if it's too large
    >
      <primitive object={scene} />
    </group>
  )
}