import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
const MacbookContainer = () => {
   const textsure1=useTexture("./red.jpg")
   const model= useGLTF('./mac.glb')
   //takes in the invidual mesh so that we can animate
   const meshes={}
    model.scene.traverse((child)=>{
    //   if(child instanceof THREE.Mesh || child instanceof THREE.Group){
        meshes[child.name]=child
    //   } 
    })
    console.log(meshes)
    //initial position closed screen
    meshes.matte.material.map=textsure1
    meshes.matte.material.emissiveIntensity=0
    meshes.matte.material.metalness=1
    meshes.matte.material.roughness=1
    meshes.screen.rotation.x=THREE.MathUtils.degToRad(180)
   const data= useScroll()
   useFrame( (state,delta)=>{
    //    console.log(data.offset)

    meshes.screen.rotation.x=THREE.MathUtils.degToRad(180-(data.offset*90))
   })
  return (
   <group position={[0, -10, 20]}>
   <primitive object={model.scene} /> 
   </group>

  )
}

export default MacbookContainer