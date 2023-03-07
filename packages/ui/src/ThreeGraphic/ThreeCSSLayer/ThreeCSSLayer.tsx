import React, { useRef, useCallback, ReactNode } from 'react'
import * as THREE from 'three'
import { cx } from '@emotion/css'
import useThreeManager from '../hooks/useThreeManager'
import * as styles from './ThreeCSSLayer.styles'

export type ThreeCSSLayerContextValue = {
  scene?: THREE.Scene
}

export const ThreeCSSLayerContext = React.createContext<ThreeCSSLayerContextValue>({
  scene: undefined,
})

export interface ThreeCSSLayerProps {
  className?: string
  onStartup?: () => void
  children?: ReactNode
  scene?: THREE.Scene
}

const ThreeCSSLayer = (props: ThreeCSSLayerProps): JSX.Element => {
  const { className, scene, children, onStartup } = props
  const rootRef = useRef<HTMLElement>()
  const threeManager = useThreeManager()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (threeManager.layerController.containerElement !== rootRef.current) {
      threeManager.layerController.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(threeManager.layerController.cssApp)

      if (!threeManager.layerController.isStartup) {
        threeManager.layerController.startup()
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
