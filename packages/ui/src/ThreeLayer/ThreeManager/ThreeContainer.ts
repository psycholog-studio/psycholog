import * as THREE from 'three'

export type THREEContainerOptions = {
  isAnimating?: boolean
  containerElement?: HTMLElement
  scene?: THREE.Scene
}

let _containerElement: HTMLElement | undefined
let _isStartup = false
let _scene: THREE.Scene | undefined

class THREEContainer {
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  animates: (() => void)[]
  startupFuncs: (() => void)[]
  isAnimating?: boolean

  get app() {
    return this.renderer.domElement
  }

  constructor(options: THREEContainerOptions = {}) {
    const { isAnimating, containerElement } = options

    this.startupFuncs = []
    this.animates = []
    this.isAnimating = isAnimating ?? true

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(0, 0)

    this.camera = new THREE.PerspectiveCamera(70, 0, 0.01, 10)
    this.camera.position.z = 10

    if (containerElement) {
      this.setContainerElement(containerElement)
    }
  }

  get isStartup() {
    return _isStartup
  }

  get containerElement() {
    return _containerElement
  }

  get scene() {
    return _scene
  }

  startup() {
    for (const func of this.startupFuncs) {
      func()
    }
    _isStartup = true

    this.animate()
  }

  setContainerElement = (element: HTMLElement) => {
    _containerElement = element
    const rect = _containerElement.getBoundingClientRect()

    this.renderer.setSize(rect.width, rect.height)
    this.camera.aspect = rect.width / rect.height
    this.camera.updateProjectionMatrix()
  }

  setScene = (scene: THREE.Scene) => {
    _scene = scene
  }

  subscribeStarup = (func: () => void) => {
    return this.startupFuncs.push(func)
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

    if (_scene) {
      this.renderer.render(_scene, this.camera)
    }
  }
}

export default THREEContainer
