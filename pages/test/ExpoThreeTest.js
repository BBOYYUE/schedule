import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Dimensions, PanResponder } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { loadding, loaded } from "../../feature/loaddingSlice"
import SceneGrid from "../../util/three/scene/grid"
import ScenePoint from "../../util/three/scene/points"
import { Renderer, THREE, TextureLoader } from 'expo-three';



let isDarkMode
let panEvent
let orit
let pan = PanResponder.create({
  // 要求成为响应者：
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

  onPanResponderGrant: (evt, gestureState) => {
    // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
    // gestureState.{x,y} 现在会被设置为0
  },
  onPanResponderMove: (evt, gestureState) => {
    panEvent = gestureState
    if (orit) {
      orit.move(panEvent)
    }
    // 最近一次的移动距离为gestureState.move{X,Y}
    // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
  },
  onPanResponderTerminationRequest: (evt, gestureState) => true,
  onPanResponderRelease: (evt, gestureState) => {
    // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
    // 一般来说这意味着一个手势操作已经成功完成。
  },
  onPanResponderTerminate: (evt, gestureState) => {
    // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
  },
  onShouldBlockNativeResponder: (evt, gestureState) => {
    // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
    // 默认返回true。目前暂时只支持android。
    return true;
  },
});
class obitContoller {
  constructor(camera, focusPoint, data) {
    let { width, height } = data
    this.width = width;
    this.height = height
    this.camera = camera
    this.focusPoint = focusPoint
    this.zoom = this.camera.zoom
    this.cameraX = this.camera.position.x
    this.cameraY = this.camera.position.y
    this.cameraZ = this.camera.position.z
    this.focusPointX = this.focusPoint.position.x
    this.focusPointY = this.focusPoint.position.y
    this.focusPointZ = this.focusPoint.position.z
    this.panOffset = new THREE.Vector3();
  }
  setCamera (camera) {
    this.camera = camera
    this.cameraX = this.camera.position.x
    this.cameraY = this.camera.position.y
    this.cameraZ = this.camera.position.z
  }
  setTarget (focusPoint) {
    this.focusPoint = focusPoint
    this.focusPointX = this.focusPoint.position.x
    this.focusPointY = this.focusPoint.position.y
    this.focusPointZ = this.focusPoint.position.z
    this.camera.target = this.focusPoint
  }
  panLeft (distance, objectMatrix) {
  }
  panUp (distance, objectMatrix) {
  }
  move (panEvent) {
    let { dx, dy } = panEvent
  }
  update () {
    return this.camera
  }
}

function onContextCreate (gl) {
  let scene = new ScenePoint(gl)
  setInterval(function () {
    scene.pointMaterial.dispose()
    scene.pointMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      sizeAttenuation: true,
      color: "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
    })
    scene.cloud.material = scene.pointMaterial
  }, 10000)
  orit = new obitContoller(scene.camera, scene.focusPoint, { width: Dimensions.get('window').width, height: Dimensions.get('window').height })
  const render = () => {
    requestAnimationFrame(render);
    let sceneColor = isDarkMode ? 'black' : 'white'
    scene.renderer.setClearColor(sceneColor);
    scene.renderer.render(scene.scene, orit.update());
    gl.endFrameEXP();
  };
  render();
}
export default function ExpoThreeTest (props) {
  const dispatch = useDispatch()
  dispatch(loaded())
  isDarkMode = props.isDarkMode
  return (
    <View
      {...pan.panHandlers}
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

