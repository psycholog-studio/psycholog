import React, { useEffect, useRef } from 'react'
import Layout from '../base/Layout'
import ThreeManager from '@psycholog/ui/ThreeGraphic/core/ThreeManager'
import { scene } from './utils'

const Scene1 = (): JSX.Element => {
  const threeManagerRef = useRef<ThreeManager | null>(null)

  useEffect(() => {
    if (threeManagerRef.current) {
      threeManagerRef.current.LayerController.setScene(scene)
    }
    return () => {
      if (threeManagerRef.current) {
        threeManagerRef.current.LayerController.setScene(undefined)
      }
    }
  }, [])

  return <Layout threeManagerRef={threeManagerRef}></Layout>
}

export default Scene1
