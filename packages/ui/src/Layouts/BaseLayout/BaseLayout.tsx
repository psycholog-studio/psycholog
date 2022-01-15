import React from 'react'
import * as styles from './BaseLayout.styles'
import ThreeLayer from '../../ThreeLayer'
import sizes from './sizes'

export type Size = keyof typeof sizes

export interface BaseLayoutProps {
  size?: Size
  width?: number
  height?: number
  isSizeAuto?: boolean
  isCustom?: boolean
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const {
    size = 'HD1080',
    width = sizes.HD1080.width,
    height = sizes.HD1080.height,
    isSizeAuto = false,
    isCustom = false,
  } = props

  let containerSizeStyle = {
    width: '100%',
    height: '100%',
  }

  if (isCustom) {
    containerSizeStyle = {
      width: `${width}px`,
      height: `${height}px`,
    }
  } else if (isSizeAuto) {
    containerSizeStyle = {
      width: '100%',
      height: '100%',
    }
  } else {
    containerSizeStyle = {
      width: `${sizes[size].width}px`,
      height: `${sizes[size].height}px`,
    }
  }

  return (
    <div className={styles.root}>
      <div style={containerSizeStyle}>
        <ThreeLayer />
      </div>
    </div>
  )
}

export default BaseLayout
