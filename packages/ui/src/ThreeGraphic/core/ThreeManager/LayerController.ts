import * as THREE from 'three'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

export type LayerControllerOptions = {
  isAutoSize?: boolean
  isAnimating?: boolean
  containerElement?: HTMLElement
  scene?: THREE.Scene
  width?: number
  height?: number
}

class LayerController {
  #containerElement: HTMLElement | undefined = undefined
  #isStartup = false
  #scene: THREE.Scene | undefined = undefined

  renderer: THREE.WebGLRenderer
  cssRenderer: CSS3DRenderer
  camera: THREE.PerspectiveCamera
  containerResizeObserver: ResizeObserver
  webglAppResizeObserver: ResizeObserver
  webglAppResizeFuncs: (() => void)[] = []
  animates: (() => void)[] = []
  startupFuncs: (() => void)[] = []
  isAnimating?: boolean
  isAutoSize?: boolean
  width: number
  height: number

  constructor(options: LayerControllerOptions = {}) {
    const {
      isAnimating = true,
      containerElement,
      isAutoSize = false,
      width = 1440,
      height = 900,
    } = options

    this.isAnimating = isAnimating
    this.isAutoSize = isAutoSize
    this.width = width
    this.height = height

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.domElement.classList.add('webgl-app')

    this.cssRenderer = new CSS3DRenderer()
    this.cssRenderer.domElement.classList.add('css-app')

    this.camera = new THREE.PerspectiveCamera(70, 0, 0.01, 2000)
    this.camera.position.z = 1500

    this.webglAppResizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          for (const func of this.webglAppResizeFuncs) {
            func()
          }

          this.recalculateSize()
        }
      }
    })

    this.webglAppResizeObserver.observe(this.webglApp)

    this.containerResizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          this.recalculateSize()
        }
      }
    })

    this.recalculateSize()

    if (!this.isAutoSize) {
      this.camera.aspect = this.width / this.height
    }

    if (containerElement) {
      this.#containerElement = containerElement
      this.containerResizeObserver.observe(this.#containerElement)
    }
  }

  get isStartup() {
    return this.#isStartup
  }

  get containerElement() {
    return this.#containerElement
  }

  get webglApp() {
    return this.renderer.domElement
  }

  get cssApp() {
    return this.cssRenderer.domElement
  }

  get scene() {
    return this.#scene
  }

  startup() {
    for (const func of this.startupFuncs) {
      func()
    }
    this.#isStartup = true

    this.animate()
  }

  setContainerElement = (element: HTMLElement) => {
    if (this.#containerElement) {
      this.containerResizeObserver.unobserve(this.#containerElement)
    }

    this.#containerElement = element
    this.containerResizeObserver.observe(this.#containerElement)
    this.recalculateSize()
  }

  setScene = (scene?: THREE.Scene) => {
    this.#scene = scene

    if (!this.#scene) {
      this.renderer.clear()
      this.cssRenderer.domElement.style.display = 'none'
    } else {
      this.cssRenderer.domElement.style.display = 'initial'
    }

    this.renderCss()
    this.renderWebgl()
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

  recalculateSize = () => {
    if (!this.#containerElement) {
      console.warn(`containerElement is ${this.#containerElement} !`)
      return
    }

    const rect = this.#containerElement.getBoundingClientRect()

    if (this.isAutoSize) {
      this.renderer.setSize(rect.width, rect.height)
      this.camera.aspect = rect.width / rect.height
    } else {
      this.renderer.setSize(this.width, this.height)
    }

    if (rect.width / rect.height < this.width / this.height) {
      this.renderer.domElement.style.width = '100%'
      this.renderer.domElement.style.height = 'auto'
    } else {
      this.renderer.domElement.style.width = 'auto'
      this.renderer.domElement.style.height = '100%'
    }

    this.cssRenderer.setSize(rect.width, rect.height)

    this.camera.updateProjectionMatrix()
    this.renderCss()
  }

  renderCss = () => {
    if (this.#scene) {
      this.cssRenderer.render(this.#scene, this.camera)
    }
  }

  renderWebgl = () => {
    if (this.#scene) {
      this.renderer.render(this.#scene, this.camera)
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

export default LayerController
