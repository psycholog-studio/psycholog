import React, { ReactNode, RefObject } from 'react'
import * as styles from './BaseLayout.styles'
import ThreeGraphic from '../../ThreeGraphic'
import ThreeManager from '../../ThreeGraphic/core/ThreeManager'
import ThreeWebglLayer from '../../ThreeGraphic/ThreeWebglLayer'
import ThreeCSSLayer from '../../ThreeGraphic/ThreeCSSLayer'
import UILayer from '../../ThreeGraphic/UILayer'

export interface BaseLayoutProps {
  children?: ReactNode
  threeManagerRef?: RefObject<ThreeManager>
  threeManager?: ThreeManager
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { threeManager, threeManagerRef, children } = props
  return (
    <main className={styles.root}>
      <ThreeGraphic ref={threeManagerRef} threeManager={threeManager}>
        <UILayer className={styles.uiLayer}>{children}</UILayer>
        <ThreeCSSLayer className={styles.threeCssLayer} />
        <ThreeWebglLayer className={styles.threeWebglLayer} />
      </ThreeGraphic>
    </main>
  )
}

export default BaseLayout
