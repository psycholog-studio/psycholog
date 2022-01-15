import React, { useRef, useCallback } from 'react'
import ThreeManager from './ThreeManager'
import * as styles from './ThreeLayer.styles'

export interface ThreeLayerProps {
  onStartup?: () => void
}

const ThreeLayer = (props: ThreeLayerProps): JSX.Element => {
  const { onStartup } = props
  const rootRef = useRef<HTMLElement>()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (ThreeManager.ThreeContainer.containerElement !== rootRef.current) {
      ThreeManager.ThreeContainer.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(ThreeManager.ThreeContainer.app)
    }

    onStartup?.()
  }, [])

  return <div ref={rootRefCallback} className={styles.root}></div>
}

export default ThreeLayer
