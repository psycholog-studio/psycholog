import * as THREE from 'three'

export type ThreeController = {
  app?: HTMLCanvasElement
}

class THREEContainer {
  threeController: ThreeController

  constructor() {
    this.threeController = {}

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    )
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    renderer.setSize(window.innerWidth, window.innerHeight)
    this.threeController.app = renderer.domElement

    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.02

      renderer.render(scene, camera)
    }
    animate()
  }
}

export default THREEContainer
