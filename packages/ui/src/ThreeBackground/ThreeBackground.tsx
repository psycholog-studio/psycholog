import React, { useRef, useCallback, MutableRefObject } from 'react'
import ThreeContainer from './ThreeContainer'
import * as styles from './ThreeBackground.styles'

export type ThreeBackgroundRefs = {
  rootRef: MutableRefObject<HTMLElement | undefined>
  threeContainerRef: MutableRefObject<ThreeContainer | undefined>
}

export interface ThreeBackgroundProps {
  onStartup?: (refs: ThreeBackgroundRefs) => void
}

const ThreeBackground = (props: ThreeBackgroundProps): JSX.Element => {
  const { onStartup } = props
  const rootRef = useRef<HTMLElement>()
  const threeContainerRef = useRef<ThreeContainer>()

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (!threeContainerRef.current) {
      threeContainerRef.current = new ThreeContainer(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(threeContainerRef.current.app)
    }

    onStartup?.({
      rootRef,
      threeContainerRef,
    })
  }, [])

  return <div ref={rootRefCallback} className={styles.root}></div>
}

export default ThreeBackground
