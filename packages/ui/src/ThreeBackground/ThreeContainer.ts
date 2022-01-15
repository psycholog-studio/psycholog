import * as THREE from 'three'

type THREEContainerOptions = {
  isAnimating?: boolean
}

class THREEContainer {
  containerElement: HTMLElement
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  animates: (() => void)[]
  isAnimating?: boolean

  get app() {
    return this.renderer.domElement
  }

  constructor(
    containerElement: HTMLElement,
    options: THREEContainerOptions = {}
  ) {
    this.containerElement = containerElement
    this.animates = []
    this.isAnimating = options.isAnimating ?? true

    const rect = containerElement.getBoundingClientRect()

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(rect.width, rect.height)

    this.camera = new THREE.PerspectiveCamera(
      70,
      rect.width / rect.height,
      0.01,
      10
    )
    this.camera.position.z = 1

    this.scene = new THREE.Scene()

    this.animate()
  }

  subscribeAnimate = (animate: () => void) => {
    return this.animates.push(animate)
  }

  animate = () => {
    if (this.isAnimating) {
      requestAnimationFrame(this.animate)
    }

    for (const animation of this.animates) {
      animation()
    }

    this.renderer.render(this.scene, this.camera)
  }
}

export default THREEContainer
