import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native'
import SceneUtil from "../../util/three.util.js"
import { Renderer, THREE, TextureLoader } from 'expo-three';
import { Asset } from 'expo-asset';
// import { OrbitControls } from '@react-three/drei/native'
// import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let isDarkMode
export default function ExpoThreeTest(props) {
  isDarkMode = props.isDarkMode
  return (
    <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, justifyContent: 'center', alignItems: 'center' }}>
      <GLView
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        onContextCreate={onContextCreate}
      />
    </View>

  );
}
class Scene {
  constructor(gl) {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0xffffff, .05, 1000)
    this.focusPointMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1),
      new THREE.MeshBasicMaterial({
        transparent: true,
        color: 0xfff,
      })
    );
    this.focusPointMesh.position.set(0, 50, 0)
    this.scene.add(this.focusPointMesh)

    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    this.camera.position.set(0, 500, 0);
    this.camera.lookAt(this.focusPointMesh.position);
    this.scene.add(this.camera)

    this.renderer = new Renderer({ gl });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    this.renderer.setClearColor(new THREE.Color(0xffffff));
    this.renderer.setSize(width, height);
    this.ground = new THREE.GridHelper(1000, 100)
    this.scene.add(this.ground)

    this.linghtPoint = new THREE.Mesh(
      new THREE.SphereGeometry(0.3),
      new THREE.MeshBasicMaterial({
        color: 0xfff,
        transparent: true,
        opacity: 0
      })
    )
    this.linghtPoint.position.set(0, 0, 0)
    this.scene.add(this.linghtPoint)

    this.ambientLight = new THREE.AmbientLight(0xfff)
    this.ambientLight.intensity = 8
    this.ambientLight.position.set(0, 0, 0)
    this.scene.add(this.ambientLight)


    // this.orbit = new OrbitControls(this.camera, gl)
    // this.orbit.enableDamping = true;
    // this.orbit.dampingFactor = 1;
    // this.orbit.minPolarAngle = .25 * Math.PI;
    // this.orbit.maxPolarAngle = .45 * Math.PI;
    // this.orbit.maxDistance = 500;
    // this.orbit.minDistance = 20;
  }
}

function onContextCreate(gl) {
  // let scene = new SceneUtil(gl, isDarkMode)
  // scene.__init()
  let scene = new Scene(gl)
  const render = () => {
    requestAnimationFrame(render);
    let sceneColor = isDarkMode ? 'black' : 'white'
    scene.renderer.setClearColor(sceneColor);
    scene.renderer.render(scene.scene, scene.camera);
    // scene.orbit.update()
    gl.endFrameEXP();
  };
  render();
}