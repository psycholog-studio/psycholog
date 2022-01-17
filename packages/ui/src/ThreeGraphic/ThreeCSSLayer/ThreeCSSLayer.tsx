import React, { useRef, useCallback, ReactNode, createContext } from 'react'
import * as THREE from 'three'
import { cx } from '@emotion/css'
import ThreeManager from '../core/ThreeManager'
import * as styles from './ThreeCSSLayer.styles'

export type ThreeCSSLayerContextValue = {
  scene?: THREE.Scene
}

export const ThreeCSSLayerContext = createContext<ThreeCSSLayerContextValue>({
  scene: undefined,
})

export const ThreeCSSLayerConsumer = ThreeCSSLayerContext.Consumer

export interface ThreeCSSLayerProps {
  className?: string
  onStartup?: () => void
  children?: ReactNode
  scene?: THREE.Scene
}

const ThreeCSSLayer = (props: ThreeCSSLayerProps): JSX.Element => {
  const { className, scene, children, onStartup } = props
  const rootRef = useRef<HTMLElement>()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (ThreeManager.LayerController.containerElement !== rootRef.current) {
      ThreeManager.LayerController.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(ThreeManager.LayerController.cssApp)

      if (!ThreeManager.LayerController.isStartup) {
        ThreeManager.LayerController.startup()
        onStartup?.()
      }
    }
  }, [])

  return (
    <ThreeCSSLayerContext.Provider
      value={{
        scene,
      }}
    >
      {children}
      <div ref={rootRefCallback} className={cx(styles.root, className)}></div>
    </ThreeCSSLayerContext.Provider>
  )
}

export default ThreeCSSLayer
