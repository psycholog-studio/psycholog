import React, { ReactNode } from 'react'
import * as styles from './UILayer.styles'
import { cx } from '@emotion/css'

export interface UILayerProps {
  className?: string
  children?: ReactNode
}

const UILayer = (props: UILayerProps): JSX.Element => {
  const { className, children } = props

  return <div className={cx(styles.root, className)}>{children}</div>
}

export default UILayer
