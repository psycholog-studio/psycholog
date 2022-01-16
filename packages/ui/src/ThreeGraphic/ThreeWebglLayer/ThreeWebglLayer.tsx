import React, { useRef, useCallback } from 'react'
import ThreeManager from '../core/ThreeManager'
import * as styles from './ThreeWebglLayer.styles'
import { cx } from '@emotion/css'
import * as THREE from 'three'

export interface ThreeWebglLayerProps {
  scene?: THREE.Scene
  className?: string
  onStartup?: () => void
}

const ThreeWebglLayer = (props: ThreeWebglLayerProps): JSX.Element => {
  const { className, onStartup, scene } = props
  const rootRef = useRef<HTMLElement>()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (ThreeManager.LayerController.containerElement !== rootRef.current) {
      ThreeManager.LayerController.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(ThreeManager.LayerController.webglApp)

      if (!ThreeManager.LayerController.isStartup) {
        ThreeManager.LayerController.startup()
        onStartup?.()
      }
    }
  }, [])

  if (scene) {
    ThreeManager.LayerController.setScene(scene)
  }

  return (
    <div ref={rootRefCallback} className={cx(styles.root, className)}></div>
  )
}

export default ThreeWebglLayer
