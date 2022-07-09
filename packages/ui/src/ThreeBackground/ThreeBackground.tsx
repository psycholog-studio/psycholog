import React, { useRef, useCallback } from 'react'
import ThreeContainer from './ThreeContainer'
import * as styles from './ThreeBackground.styles'

const PixiBackground = (): JSX.Element => {
  const rootRef = useRef()
  const threeContainer = useRef(new ThreeContainer())

  const rootRefCallback = useCallback((element) => {
    rootRef.current = element
    element.appendChild(threeContainer.current.threeController.app)
  }, [])

  return <div ref={rootRefCallback} className={styles.root}></div>
}

export default PixiBackground
