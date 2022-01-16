import * as THREE from 'three'
import ThreeManager from '../ThreeManager'

const baseScale = 2200

class ThreeBackground {
  geometry: THREE.PlaneGeometry
  material: THREE.MeshBasicMaterial
  mesh: THREE.Mesh

  constructor(
    textureUrl: string,
    options: THREE.MeshBasicMaterialParameters = {}
  ) {
    this.geometry = new THREE.PlaneGeometry(
      ThreeManager.BackgroundController.aspect * baseScale,
      baseScale
    )

    const texture = new THREE.TextureLoader().load(textureUrl)

    this.material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: texture,
      ...options,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.z = 0
  }
}

export default ThreeBackground
