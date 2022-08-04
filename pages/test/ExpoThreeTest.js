import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import React, { useState } from 'react';
import { View, Text, PanResponder, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { loadding, loaded } from "../../feature/loaddingSlice"
import SceneGrid from "../../util/three/scene/grid"
import ScenePoint from "../../util/three/scene/points"
import { Renderer, THREE, TextureLoader } from 'expo-three';
import { OrbitControls } from '../../util/three/controller/OrbitControls';
// import { useSharedValue } from 'react-native-reanimated';


let isDarkMode
let orbit
let camera
let times = 0
let panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  onPanResponderGrant ({ nativeEvent }) {
    if (!orbit) return;
    orbit.onTouchStart(nativeEvent)
    camera = orbit.object
  },
  onPanResponderMove ({ nativeEvent }) {
    if (!orbit) return;
    orbit.onTouchMove(nativeEvent)
    camera = orbit.object
  },
});

export default function ExpoThreeTest (props) {
  const dispatch = useDispatch()
  isDarkMode = props.isDarkMode

  async function onContextCreate (gl) {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    let scene = await new ScenePoint(gl)
    dispatch(loaded())
    setInterval(function () {
      scene.pointMaterial.dispose()
      scene.pointMaterial = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        sizeAttenuation: true,
        color: "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
      })
      scene.cloud.material = scene.pointMaterial
    }, 1000)
    orbit = new OrbitControls(scene.camera, scene.renderer.domElement)
    orbit.height = height
    camera = scene.camera
    const render = () => {
      requestAnimationFrame(render);
      let sceneColor = isDarkMode ? 'black' : 'white'
      scene.renderer.setClearColor(sceneColor);
      scene.scene.fog = new THREE.Fog(sceneColor, 0, 400)
      scene.renderer.render(scene.scene, camera);
      gl.endFrameEXP();
    };
    render();
  }
  return (
    <View
      {...panResponder.panHandlers}
      style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <GLView
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        onContextCreate={onContextCreate}
      />
    </View>
  );
}


