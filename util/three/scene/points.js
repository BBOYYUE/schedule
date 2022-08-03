import { Renderer, THREE, TextureLoader } from 'expo-three';

export default class Scene {
  constructor(gl) {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    this.width = width
    this.height = height
    this.scene = new THREE.Scene()
    // this.scene.fog = new THREE.Fog(color, 0, 400)
    this.focusPoint = new THREE.Mesh(
      new THREE.SphereGeometry(.1),
      new THREE.MeshBasicMaterial({
        transparent: true,
        color: 0xffffff,
      })
    );
    this.focusPoint.position.set(0, 0, 0)
    this.scene.add(this.focusPoint)

    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    this.camera.position.set(0, 200, 0);
    this.camera.lookAt(this.focusPoint.position);
    this.camera.name = 'camera'
    this.scene.add(this.camera)

    this.renderer = new Renderer({ gl });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    this.renderer.setClearColor(new THREE.Color(0xffffff));
    this.renderer.setSize(width, height);
    this.geom = new THREE.BufferGeometry()
    this.pointMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      sizeAttenuation: true,
      color: 0xffffff
    })
    const vertices = []
    const colors = []
    const values = []
    let i = 0
    for (let x = -75; x < 75; x++) {
      for (let z = -75; z < 75; z++) {
        vertices.push(x * 3, 0, z * 3)
        let randomColor;
        let value = Math.random()
        if (i > 0 && Math.abs(values[i - 1] - value) < 0.25) {
          z--;
          continue;
        }
        randomColor = new THREE.Color("#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "1"))
        colors.push(randomColor.r, randomColor.g, randomColor.b)
        i++;
      }
    }
    this.geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    this.geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    this.geom.name = 'geom'
    this.cloud = new THREE.Points(this.geom, this.pointMaterial)
    this.scene.add(this.cloud)

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
  }
}
