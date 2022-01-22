import React, {
  ReactNode,
  MutableRefObject,
  useState,
  useCallback,
  useEffect,
} from 'react'
import * as styles from './BaseLayout.styles'
import ThreeGraphic from '../../ThreeGraphic'
import ThreeManager from '../../ThreeGraphic/core/ThreeManager'
import ThreeWebglLayer from '../../ThreeGraphic/ThreeWebglLayer'
import ThreeCSSLayer from '../../ThreeGraphic/ThreeCSSLayer'
import UILayer from '../../ThreeGraphic/UILayer'
import useForwardedRef from '@psycholog-studio/utils/hooks/useForwardedRef'

export interface BaseLayoutProps {
  children?: ReactNode
  threeManagerRef?: MutableRefObject<ThreeManager | null>
  threeManager?: ThreeManager
  cssLayerContent?: ReactNode | undefined
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const {
    threeManager,
    threeManagerRef = null,
    children,
    cssLayerContent,
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
    <main className={styles.root}>
      <ThreeGraphic
        ref={targetThreeManagerRefCallback}
        threeManager={threeManager}
      >
        <UILayer className={styles.uiLayer}>{children}</UILayer>
        <ThreeCSSLayer className={styles.threeCssLayer} scene={cssLayerScene}>
          {cssLayerContent}
        </ThreeCSSLayer>
        <ThreeWebglLayer className={styles.threeWebglLayer} />
      </ThreeGraphic>
    </main>
  )
}

export default BaseLayout
