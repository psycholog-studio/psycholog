import * as THREE from 'three'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

export type THREEContainerOptions = {
  isAutoSize?: boolean
  isAnimating?: boolean
  containerElement?: HTMLElement
  scene?: THREE.Scene
  width?: number
  height?: number
}

let _containerElement: HTMLElement | undefined
let _isStartup = false
let _scene: THREE.Scene | undefined

class THREEContainer {
  renderer: THREE.WebGLRenderer
  cssRenderer: CSS3DRenderer
  camera: THREE.PerspectiveCamera
  webglAppResizeObserver: ResizeObserver
  webglAppResizeFuncs: (() => void)[]
  animates: (() => void)[]
  startupFuncs: (() => void)[]
  isAnimating?: boolean
  isAutoSize?: boolean
  width: number
  height: number

  get webglApp() {
    return this.renderer.domElement
  }

  get cssApp() {
    return this.cssRenderer.domElement
  }

  constructor(options: THREEContainerOptions = {}) {
    const {
      isAnimating = true,
      containerElement,
      isAutoSize = false,
      width = 1440,
      height = 900,
    } = options

    this.startupFuncs = []
    this.webglAppResizeFuncs = []
    this.animates = []
    this.isAnimating = isAnimating
    this.isAutoSize = isAutoSize
    this.width = width
    this.height = height

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.domElement.style.width = '100%'
    this.renderer.domElement.style.height = 'auto'
    this.renderer.domElement.classList.add('webgl-app')

    this.cssRenderer = new CSS3DRenderer()
    this.cssRenderer.setSize(this.width, this.height)
    this.cssRenderer.domElement.classList.add('css-app')

    this.camera = new THREE.PerspectiveCamera(70, 0, 0.01, 2000)
    this.camera.position.z = 1500

    this.webglAppResizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          for (const func of this.webglAppResizeFuncs) {
            func()
          }

          if (_containerElement) {
            const rect = _containerElement.getBoundingClientRect()
            if (this.isAutoSize) {
              this.renderer.setSize(rect.width, rect.height)
              this.camera.aspect = rect.width / rect.height
            }

            this.cssRenderer.setSize(rect.width, rect.height)
            this.renderCss()
          }
        }
      }
    })

    this.webglAppResizeObserver.observe(this.webglApp)

    if (!this.isAutoSize) {
      this.camera.aspect = this.width / this.height
    }

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
    if (this.isAutoSize) {
      this.renderer.setSize(rect.width, rect.height)
      this.camera.aspect = rect.width / rect.height
    }

    this.cssRenderer.setSize(rect.width, rect.height)

    this.camera.updateProjectionMatrix()
  }

  setScene = (scene: THREE.Scene) => {
    _scene = scene
  }

  subscribeStarup = (func: () => void) => {
    return this.startupFuncs.push(func)
  }

  subscribeWebglAppResize = (func: () => void) => {
    return this.webglAppResizeFuncs.push(func)
  }

  subscribeAnimate = (animate: () => void) => {
    return this.animates.push(animate)
  }

  renderCss = () => {
    if (_scene) {
      this.cssRenderer.render(_scene, this.camera)
    }
  }

  renderWebgl = () => {
    if (_scene) {
      this.renderer.render(_scene, this.camera)
    }
  }

  animate = () => {
    if (this.isAnimating) {
      requestAnimationFrame(this.animate)
    }

    for (const animation of this.animates) {
      animation()
    }

    this.renderWebgl()
  }
}

export default THREEContainer
