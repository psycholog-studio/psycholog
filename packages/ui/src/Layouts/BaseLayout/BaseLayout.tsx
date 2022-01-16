import React, { ReactNode } from 'react'
import * as styles from './BaseLayout.styles'
import ThreeWebglLayer from '../../ThreeGraphic/ThreeWebglLayer'
import ThreeCSSLayer from '../../ThreeGraphic/ThreeCSSLayer'
import UILayer from '../../ThreeGraphic/UILayer'

import * as THREE from 'three'

export interface BaseLayoutProps {
  children?: ReactNode
  scene?: THREE.Scene
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { scene, children } = props
  return (
    <main className={styles.root}>
      <UILayer className={styles.uiLayer}>{children}</UILayer>
      <ThreeCSSLayer scene={scene} className={styles.threeCssLayer} />
      <ThreeWebglLayer scene={scene} className={styles.threeWebglLayer} />
    </main>
  )
}

export default BaseLayout
