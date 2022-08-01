import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import * as React from 'react';
import {  View, Text } from 'react-native';
import { Dimensions } from 'react-native'
import SceneUtil from "../../util/three.util.js"

let isDarkMode
export default function ExpoThreeTest(props) {
  isDarkMode = props.isDarkMode
  return (
    <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, justifyContent: 'center', alignItems: 'center'}}>
    <GLView
      style={{width: Dimensions.get('window').width, height:Dimensions.get('window').height}}
      onContextCreate={onContextCreate} 
    />
    </View>

  );
}

function onContextCreate(gl) {
  let scene = new SceneUtil(gl, isDarkMode)
    scene.__init()
    const render = () => {
      requestAnimationFrame(render);
      let sceneColor = isDarkMode?'black':'white'
      scene.renderer.setClearColor(sceneColor);
      scene.renderer.render(scene.scene, scene.camera);
      gl.endFrameEXP();
      scene.ctrl.update()
    };
    render();
}


// function onContextCreate(gl) {
//     const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
//     let sceneColor = isDarkMode?'black':'#fff'

//     // Create a WebGLRenderer without a DOM element
//     const renderer = new Renderer({ gl });
//     renderer.setSize(width, height);
//     renderer.setClearColor(sceneColor);

//     const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
//     camera.position.set(2, 5, 5);

//     const scene = new Scene();
//     scene.fog = new Fog(sceneColor, 1, 10000);

//     // scene.add(new GridHelper(100, 50));

//     const ambientLight = new AmbientLight(0x101010);
//     scene.add(ambientLight);

//     const pointLight = new PointLight(0xffffff, 2, 1000, 1);
//     pointLight.position.set(0, 200, 200);
//     scene.add(pointLight);

//     const spotLight = new SpotLight(0xffffff, 0.5);
//     spotLight.position.set(0, 500, 100);
//     spotLight.lookAt(scene.position);
//     scene.add(spotLight);

//     const cube = new IconMesh();
//     scene.add(cube);

//     camera.lookAt(cube.position);

//     function update() {
//       cube.rotation.y += 0.05;
//       cube.rotation.x += 0.025;
//     }

//     // Setup an animation loop
//     const render = () => {
//       requestAnimationFrame(render);
//       update();
//       renderer.render(scene, camera);
//       gl.endFrameEXP();
//       let sceneColor = isDarkMode?'black':'#fff'
//       renderer.setClearColor(sceneColor);
//     };
//     render();
// }

// class IconMesh extends Mesh {
//   constructor() {
//     super(
//       new BoxBufferGeometry(1.0, 1.0, 1.0),
//       new MeshStandardMaterial({
//         // map: new TextureLoader().load(require('./assets/icon.png')),
//         color: 0xff0000
//       }),
//     );
//   }
// }
