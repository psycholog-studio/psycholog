import React, {
  useEffect,
  useRef,
  useContext,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from 'react'
import ReactDom from 'react-dom'
import { css } from '@emotion/css'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { ThreeCSSLayerContext } from './ThreeCSSLayer'
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef'
import useThreeManager from '../hooks/useThreeManager'

const cssRoot = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export interface ThreeCSSLayerProps {
  children?: ReactNode
}

const ThreeCSSObject = forwardRef<CSS3DObject, ThreeCSSLayerProps>(
  (props: ThreeCSSLayerProps, ref: ForwardedRef<CSS3DObject>): null => {
    const { children } = props

    const threeManager = useThreeManager()
    const { scene } = useContext(ThreeCSSLayerContext)

    const rootElementRef = useRef<HTMLElement>(
      (() => {
        const element = document.createElement('div')
        element.classList.add(cssRoot)
        return element
      })()
    )

    const css3DSpriteRef = useForwardedRef<CSS3DObject>(
      ref,
      (() => {
        const css3DSprite = new CSS3DObject(rootElementRef.current)
        return css3DSprite
      })()
    )

    useEffect(() => {
      if (scene) {
        scene.add(css3DSpriteRef.current)
      }

      return () => {
        if (scene) {
          scene.remove(css3DSpriteRef.current)
        }
      }
    }, [scene])

    useEffect(() => {
      ReactDom.render(<>{children}</>, rootElementRef.current, () => {
        // TODO add render queue to ThreeManager
        threeManager.LayerController.renderCss()
      })
    }, [children])

    return null
  }
)

ThreeCSSObject.displayName = 'ThreeCSSObject'

export default ThreeCSSObject
