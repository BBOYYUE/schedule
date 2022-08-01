import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'
import {  View, Text } from 'react-native';
import { Dimensions } from 'react-native'


function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeFiber() {
  return (
    <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, justifyContent: 'center', alignItems: 'center'}}>
    <Canvas
         style={{width: Dimensions.get('window').width, height:Dimensions.get('window').height}}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    </View>
  )
}