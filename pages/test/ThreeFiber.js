import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native'
// import { OrbitControls } from '@react-three/drei/native'


export default function ThreeFiber() {
    return (
        <Canvas>
            <pointLight/>
            <mesh>
                <sphereBufferGeometry />
                <meshStandardMaterial  />
            </mesh>
        </Canvas>
    )
}