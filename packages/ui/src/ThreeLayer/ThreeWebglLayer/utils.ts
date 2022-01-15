import ThreeManager from '../ThreeManager'
import * as THREE from 'three'
import Background from '../ThreeManager/Background'

export const boxRotation = (scene: THREE.Scene) => {
  const ThreeContainer = ThreeManager.ThreeContainer
  const geometry = new THREE.BoxGeometry(200, 200, 200)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 500
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  ThreeContainer.subscribeAnimate(animatation)
}

export const backgroundWithBoxRotation = (scene: THREE.Scene) => {
  boxRotation(scene)
  const bg1 = new Background('assets/B.jpg', {
    color: '#939393',
  })
  scene.add(bg1.mesh)

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  // directionalLight.position.z = 15
  // scene.add(directionalLight)

  ThreeManager.ThreeContainer.setScene(scene)
}
