import React, { useEffect } from 'react'
import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { LinearEncoding, RepeatWrapping, TextureLoader, } from 'three';
const Ground = () => {
    // const [roughness, normal ] = useTexture([ 'texture/roughness.jpg', 'texture/normal.jpg'
    // ])
    // useEffect(() => {
    //     [normal, roughness].forEach((t) => {
    //         t.wrapS = RepeatWrapping;
    //         t.wrapT = RepeatWrapping;
    //         t.repeat.set(5,5);
    //     });
// normal.encoding = LinearEncoding
//     },[normal, roughness])
  return (
   <mesh castShadow receiveShadow rotation-x={-Math.PI * 0.5}>
    <planeGeometry args={30, 30} />
    <MeshReflectorMaterial 
    envMapIntensity={0}
    dithering={true}
    color={[0.015, 0.015, 0.015]}
    roughness={0.7}
    blur={[1000, 400]}
    mixBlur={30}
    mixStrength={80}
    mixContrast={1}
    resolution={1024}
    mirror={0}
    depthScale={0.01}
    minDepthThreshold={0.9}
    maxDepthThreshold={1}
    debug={0}
    reflectorOffset={0.2}
    />
   </mesh>
  )
}

export default Ground