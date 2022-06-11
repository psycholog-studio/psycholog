import {
  useEffect,
  useRef,
  useContext,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from 'react'
import { createRoot } from 'react-dom/client'
import { cx } from '@emotion/css'
import { CSS3DObject } from '@psycholog-studio/base'
import { ThreeCSSLayerContext } from '../ThreeCSSLayer'
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef'
import useThreeManager from '../../hooks/useThreeManager'
import * as styles from './ThreeCSSObject.styles'
import { Object3D } from 'three'

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
        if (typeof document !== 'undefined') {
          const element = document.createElement('div')
          element.classList.add(...cx(styles.root, className).split(' '))
          return element
        } else {
          return null
        }
      })()
    )

    const css3DSpriteRef = useForwardedRef<CSS3DObject | null>(
      ref,
      (() => {
        if (rootElementRef.current !== null) {
          const css3DSprite = new CSS3DObject(rootElementRef.current)
          css3DSprite.element.style.pointerEvents = ''
          css3DSprite.element.style.userSelect = ''
          return css3DSprite
        } else {
          return null
        }
      })()
    )

    useEffect(() => {
      if (scene && css3DSpriteRef.current) {
        scene.add(css3DSpriteRef.current as unknown as Object3D)
        threeManager.layerController.renderCss()
      }

      return () => {
        if (scene && css3DSpriteRef.current) {
          scene.remove(css3DSpriteRef.current as unknown as Object3D)
          threeManager.layerController.renderCss()
        }
      }
    }, [scene])

    useEffect(() => {
      if (rootElementRef.current) {
        const root = createRoot(rootElementRef.current)
        root.render(
          <div
            ref={() => {
              // TODO add render queue to ThreeManager
              threeManager.layerController.renderCss()
            }}
          >
            {children}
          </div>
        )
      }
    }, [children])

    return null
  }
)

ThreeCSSObject.displayName = 'ThreeCSSObject'

export default ThreeCSSObject
