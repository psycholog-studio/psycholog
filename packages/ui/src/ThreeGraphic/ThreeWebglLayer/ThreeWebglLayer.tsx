import { useRef, useCallback } from 'react'
import useThreeManager from '../hooks/useThreeManager'
import * as styles from './ThreeWebglLayer.styles'
import { cx } from '@emotion/css'

export interface ThreeWebglLayerProps {
  className?: string
  onStartup?: () => void
}

const ThreeWebglLayer = (props: ThreeWebglLayerProps): JSX.Element => {
  const { className, onStartup } = props
  const rootRef = useRef<HTMLElement>()
  const threeManager = useThreeManager()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (threeManager.layerController.containerElement !== rootRef.current) {
      threeManager.layerController.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(threeManager.layerController.webglApp)

      if (!threeManager.layerController.isStartup) {
        threeManager.layerController.startup()
        onStartup?.()
      }
    }
  }, [])

  return (
    <div ref={rootRefCallback} className={cx(styles.root, className)}></div>
  )
}

export default ThreeWebglLayer
