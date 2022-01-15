import React, { useRef, useCallback } from 'react'
import ThreeManager from '../ThreeManager'
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

    if (ThreeManager.ThreeContainer.containerElement !== rootRef.current) {
      ThreeManager.ThreeContainer.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(ThreeManager.ThreeContainer.webglApp)

      if (!ThreeManager.ThreeContainer.isStartup) {
        ThreeManager.ThreeContainer.startup()
        onStartup?.()
      }
    }
  }, [])

  if (scene) {
    ThreeManager.ThreeContainer.setScene(scene)
  }

  return (
    <div ref={rootRefCallback} className={cx(styles.root, className)}></div>
  )
}

export default ThreeWebglLayer
