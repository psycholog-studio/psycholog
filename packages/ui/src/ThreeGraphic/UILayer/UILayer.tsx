import React, { useCallback, ReactNode } from 'react'
import { cx } from '@emotion/css'
import ThreeManager from '../core/ThreeManager'
import * as styles from './UILayer.styles'

export interface UILayerProps {
  className?: string
  children?: ReactNode
}

const UILayer = (props: UILayerProps): JSX.Element => {
  const { className, children } = props

  const uiWarpper = useCallback((element: HTMLDivElement) => {
    if (element) {
      const handleResize = () => {
        const rect =
          ThreeManager.LayerController.webglApp.getBoundingClientRect()
        element.style.height = `${rect.height}px`
        element.style.width = `${rect.width}px`
      }

      ThreeManager.LayerController.subscribeWebglAppResize(handleResize)

      requestAnimationFrame(() => {
        handleResize()
      })
    }
  }, [])

  return (
    <div className={cx(styles.root, className)}>
      <div ref={uiWarpper}>{children}</div>
    </div>
  )
}

export default UILayer
