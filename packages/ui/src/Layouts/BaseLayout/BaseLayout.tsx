import {
  ReactNode,
  MutableRefObject,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { cx } from '@emotion/css'
import * as styles from './BaseLayout.styles'
import ThreeGraphic from '../../ThreeGraphic'
import ThreeManager from '../../ThreeGraphic/core/ThreeManager'
import ThreeWebglLayer from '../../ThreeGraphic/ThreeWebglLayer'
import ThreeCSSLayer from '../../ThreeGraphic/ThreeCSSLayer'
import UILayer from '../../ThreeGraphic/UILayer'
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef'

export type BaseLayoutClassesKey =
  | 'root'
  | 'uiLayer'
  | 'cssLayer'
  | 'webglLayer'

export interface BaseLayoutProps {
  children?: ReactNode
  threeManagerRef?: MutableRefObject<ThreeManager | null>
  threeManager?: ThreeManager
  cssLayerContent?: ReactNode | undefined
  className?: string
  classes?: {
    [k in BaseLayoutClassesKey]?: string
  }
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const {
    threeManager,
    threeManagerRef = null,
    children,
    cssLayerContent,
    className,
    classes = {},
  } = props
  const [cssLayerScene, setCssLayerScene] = useState<THREE.Scene | undefined>(
    undefined
  )
  const targetThreeManagerRef = useForwardedRef<ThreeManager | null>(
    threeManagerRef,
    null
  )

  const targetThreeManagerRefCallback = useCallback(
    (threeManager: ThreeManager | null) => {
      if (!targetThreeManagerRef.current) {
        targetThreeManagerRef.current = threeManager
        if (cssLayerScene !== threeManager?.layerController.scene) {
          setCssLayerScene(threeManager?.layerController.scene)
        }
      }
      threeManager?.layerController.addEventListener('scene-changed', (e) => {
        setCssLayerScene(e.detail?.scene)
      })
    },
    []
  )

  useEffect(() => {
    threeManagerRef?.current?.layerController.renderCss()
  }, [cssLayerScene])

  return (
    <div className={cx(styles.root, classes.root, className)}>
      <ThreeGraphic
        ref={targetThreeManagerRefCallback}
        threeManager={threeManager}
      >
        <UILayer className={cx(styles.uiLayer, classes?.uiLayer)}>
          {children}
        </UILayer>
        <ThreeCSSLayer
          className={cx(styles.threeCssLayer, classes.cssLayer)}
          scene={cssLayerScene}
        >
          {cssLayerContent}
        </ThreeCSSLayer>
        <ThreeWebglLayer
          className={cx(styles.threeWebglLayer, classes.webglLayer)}
        />
      </ThreeGraphic>
    </div>
  )
}

export default BaseLayout
