import ThreeManager from '../core/ThreeManager'
import * as THREE from 'three'
import ThreeBackground from '../core/ThreeBackground'

export const boxRotation = (scene: THREE.Scene) => {
  const LayerController = ThreeManager.LayerController
  const geometry = new THREE.BoxGeometry(200, 200, 200)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 500
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  LayerController.subscribeAnimate(animatation)
}

export const backgroundWithBoxRotation = (scene: THREE.Scene) => {
  boxRotation(scene)
  const bg1 = new ThreeBackground('assets/B.jpg', {
    color: '#939393',
  })
  scene.add(bg1.mesh)
}
