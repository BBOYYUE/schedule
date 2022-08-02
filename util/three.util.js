import { Renderer, TextureLoader,THREE } from 'expo-three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
class SceneUtil {
  constructor(gl, isDarkMode) {
    this.gl = gl
    this.isDarkMode = isDarkMode
    this.renderer = undefined
    this.camera = undefined
    this.scene = undefined
    this.ctrl = undefined
    this.focusPointMesh = undefined
  }
  createSkyBox (option) {
    const skyBoxGeometry = new THREE.SphereGeometry(option.geometry.size[0], option.geometry.size[1], option.geometry.size[2])
    const skyBoxMaterial = new THREE.MeshBasicMaterial({
      color: option.material.color,
      side: THREE.BackSide
    });
    let skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
    skyBox.position.set(option.geometry.position[0], option.geometry.position[1], option.geometry.position[2])
    skyBox.name = "skyBox"
    this.scene.add(skyBox)

  }
  createAmbientLight (option) {
    let linghtPoint = new THREE.SphereGeometry(0.3);
    let linghtPointMaterial = new THREE.MeshBasicMaterial({
      color: 0xac6c25,
    });
    let linghtPointMesh = new THREE.Mesh(
      linghtPoint,
      linghtPointMaterial
    );
    linghtPointMesh.position.set(option.position[0], option.position[1], option.position[2]);
    let ambientLight = new THREE.AmbientLight(option.color);
    ambientLight.intensity = option.intensity;
    ambientLight.position.set(linghtPointMesh)
    this.scene.add(ambientLight);
  }

  createGroundBox (option) {
    var circleGeometry = new THREE.CircleGeometry(option.geometry.size[0], option.geometry.size[1]);
    var circleMaterial = new THREE.MeshPhongMaterial({
      color: option.material.color,
    });
    // var circle = SceneUtils.createMultiMaterialObject(circleGeometry, [cubeMaterial, circleMaterial])
    var circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.receiveShadow = true;
    // rotate and position the plane
    circle.rotation.x = option.geometry.rotation[0];
    circle.position.set(option.geometry.position[0], option.geometry.position[1], option.geometry.position[2]);
    circle.name = "groundBox"
    // add the plane to the scene
    this.scene.add(circle);
  }

  createController () {
    let Orbit = new OrbitControls(this.camera, this.renderer.domElement);
    /**
     * 移动相机的时候加一点阻尼, 这样有真实感
     */
    Orbit.enableDamping = true;
    Orbit.dampingFactor = 1;
    /**
     * 禁止缩放
     */
    // Orbit.enableZoom = false;

    /**
     * 禁止平移
     */
    // Orbit.enablePan = false;
    /**
     * 限制了围绕Z轴旋转的角度
     */
    Orbit.minPolarAngle = .25 * Math.PI;
    Orbit.maxPolarAngle = .45 * Math.PI;
    Orbit.maxDistance = 500;
    Orbit.minDistance = 60;

    this.scene.add(Orbit)

  }
  __createGround () {
    const geometry = new THREE.PlaneBufferGeometry(1000, 1000, 100, 100);
    const skyBoxMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });
    let mesh = new THREE.Mesh(geometry, skyBoxMaterial)
    mesh.position.set(0, -100, 0)
    mesh.rotation.x = .5 * Math.PI
    // mesh.rotation.y = .25 * Math.PI
    this.scene.add(mesh);
  }
  __createAxes () {
    /**
     * x 轴为红色
     * y 轴为绿色
     * z 轴为紫色
     */
    let axes = new THREE.AxesHelper(20);
    axes.position.set(0, 0, 0)
    this.scene.add(axes)
  }
  __init () {
    this.__createScene()
    this.__createCamera()
    this.__createRenderer()
    this.__createGround()
    // this.__createAxes()
    this.__createController()
    this.renderer.render(this.scene, this.camera)
  }
  __createScene () {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xffffff, .05, 1000)
    this.scene.name = 'scene'
  }


  __createCamera () {

    let focusPoint = new THREE.SphereGeometry(.1);
    let focusPointMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff,
      transparent: true
    });
    let focusPointMesh = new THREE.Mesh(
      focusPoint,
      focusPointMaterial
    );
    this.focusPointMesh = focusPointMesh
    this.scene.add(focusPointMesh)
    focusPointMesh.position.set(0, 50, 0)
    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    /**
     * 相机位置可以自己设置
     */
    camera.position.set(0, 50, 400);
    camera.lookAt(focusPointMesh);

    this.camera = camera;
    this.scene.add(camera)
    camera.name = 'camera'
  }
  __createController () {
    let Orbit = new OrbitControls(this.camera, this.renderer.domElement);
    /**
     * 移动相机的时候加一点阻尼, 这样有真实感
     */
    Orbit.enableDamping = true;
    Orbit.dampingFactor = 1;
    /**
     * 禁止缩放
     */
    // Orbit.enableZoom = false;

    /**
     * 禁止平移
     */
    Orbit.enablePan = false;
    /**
     * 限制了围绕Z轴旋转的角度
     */
    // Orbit.minPolarAngle = .25 * Math.PI;
    // Orbit.maxPolarAngle = .48 * Math.PI;
    // Orbit.minPolarAngle = -.5 * Math.PI;
    // Orbit.maxPolarAngle = 0.49 * Math.PI;

    Orbit.target = this.focusPointMesh.position
    this.ctrl = Orbit;
  }
  __createRenderer () {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = this.gl;
    let renderer
    renderer = new Renderer({ gl: this.gl });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(width, height);
    this.renderer = renderer
  }
}

export default SceneUtil

