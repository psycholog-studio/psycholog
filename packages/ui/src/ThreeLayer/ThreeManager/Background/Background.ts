import * as THREE from 'three'
import ThreeManager from '../ThreeManager'

const baseScale = 13

class Background {
  geometry: THREE.PlaneGeometry
  material: THREE.MeshBasicMaterial
  mesh: THREE.Mesh

  constructor(textureUrl: string) {
    this.geometry = new THREE.PlaneGeometry(
      ThreeManager.BackgroundSize.aspect * baseScale,
      baseScale
    )

    const texture = new THREE.TextureLoader().load(textureUrl)

    this.material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: texture,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.z = 3
  }
}

export default Background
