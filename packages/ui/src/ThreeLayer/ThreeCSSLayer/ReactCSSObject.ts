import { CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import ThreeManager from '../ThreeManager'
import { css } from '@emotion/css'
export const ratio = 1

const cssRoot = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

class ReactCSSObject {
  css3DSprite: CSS3DSprite
  rootElement: HTMLDivElement

  constructor() {
    this.rootElement = document.createElement('div')
    this.css3DSprite = new CSS3DSprite(this.rootElement)
    this.css3DSprite.scale.set(ratio, ratio, ratio)
    this.css3DSprite.position.set(0, 0, 800)

    this.rootElement.classList.add(cssRoot)

    const handleResize = () => {
      const rect = ThreeManager.ThreeContainer.webglApp.getBoundingClientRect()
      this.rootElement.style.height = `${rect.height}px`
      this.rootElement.style.width = `${rect.width}px`
    }

    requestAnimationFrame(() => {
      handleResize()
    })

    ThreeManager.ThreeContainer.subscribeWebglAppResize(handleResize)
  }
}

export default ReactCSSObject
