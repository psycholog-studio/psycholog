import * as THREE from 'three'

export type THREEContainerOptions = {
  isAnimating?: boolean
  containerElement?: HTMLElement
}

let _containerElement: HTMLElement

class THREEContainer {
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  animates: (() => void)[]
  isAnimating?: boolean

  get app() {
    return this.renderer.domElement
  }

  constructor(options: THREEContainerOptions = {}) {
    this.animates = []
    this.isAnimating = options.isAnimating ?? true

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(0, 0)

    this.camera = new THREE.PerspectiveCamera(70, 0, 0.01, 10)
    this.camera.position.z = 1

    this.scene = new THREE.Scene()

    if (options.containerElement) {
      this.setContainerElement(options.containerElement)
    }

    this.animate()
  }

  get containerElement() {
    return _containerElement
  }

  setContainerElement = (element: HTMLElement) => {
    _containerElement = element
    const rect = _containerElement.getBoundingClientRect()

    this.renderer.setSize(rect.width, rect.height)
    this.camera.aspect = rect.width / rect.height
    this.camera.updateProjectionMatrix()
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
