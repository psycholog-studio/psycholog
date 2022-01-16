import React, { ReactNode } from 'react'
import * as styles from './BaseLayout.styles'
import ThreeWebglLayer from '../../ThreeGraphic/ThreeWebglLayer'
import ThreeCSSLayer from '../../ThreeGraphic/ThreeCSSLayer'
import UILayer from './UILayer'

import * as THREE from 'three'

export interface BaseLayoutProps {
  children?: ReactNode
  scene?: THREE.Scene
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { scene, children } = props
  return (
    <div className={styles.root}>
      <UILayer className={styles.uiLayer}></UILayer>
      <ThreeCSSLayer scene={scene} className={styles.threeCssLayer}>
        {children}
      </ThreeCSSLayer>
      <ThreeWebglLayer scene={scene} className={styles.threeWebglLayer} />
    </div>
  )
}

export default BaseLayout
