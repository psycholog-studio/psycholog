import React, {
  useEffect,
  useRef,
  useContext,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from 'react'
import ReactDom from 'react-dom'
import { cx } from '@emotion/css'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { ThreeCSSLayerContext } from '../ThreeCSSLayer'
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef'
import useThreeManager from '../../hooks/useThreeManager'
import * as styles from './ThreeCSSObject.styles'

export interface ThreeCSSLayerProps {
  children?: ReactNode
  className?: string
}

const ThreeCSSObject = forwardRef<CSS3DObject, ThreeCSSLayerProps>(
  (props: ThreeCSSLayerProps, ref: ForwardedRef<CSS3DObject>): null => {
    const { className, children } = props

    const threeManager = useThreeManager()
    const { scene } = useContext(ThreeCSSLayerContext)

    const rootElementRef = useRef<HTMLElement>(
      (() => {
        const element = document.createElement('div')
        element.classList.add(...cx(styles.root, className).split(' '))
        return element
      })()
    )

    const css3DSpriteRef = useForwardedRef<CSS3DObject>(
      ref,
      (() => {
        const css3DSprite = new CSS3DObject(rootElementRef.current)
        css3DSprite.element.style.pointerEvents = ''
        css3DSprite.element.style.userSelect = ''
        return css3DSprite
      })()
    )

    useEffect(() => {
      if (scene) {
        scene.add(css3DSpriteRef.current)
        threeManager.layerController.renderCss()
      }

      return () => {
        if (scene) {
          scene.remove(css3DSpriteRef.current)
          threeManager.layerController.renderCss()
        }
      }
    }, [scene])

    useEffect(() => {
      ReactDom.render(<>{children}</>, rootElementRef.current, () => {
        // TODO add render queue to ThreeManager
        threeManager.layerController.renderCss()
      })
    }, [children])

    return null
  }
)

ThreeCSSObject.displayName = 'ThreeCSSObject'

export default ThreeCSSObject
