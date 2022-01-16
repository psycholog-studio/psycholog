import { CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
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
  }
}

export default ReactCSSObject
