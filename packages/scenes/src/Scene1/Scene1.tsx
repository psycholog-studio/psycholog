import React, { useEffect } from 'react'
import BaseLayout from '@psycholog/ui/Layouts/BaseLayout'
import ThreeManager from '@psycholog/ui/ThreeGraphic/core/ThreeManager'
import { scene } from './utils'

const Scene1 = (): JSX.Element => {
  useEffect(() => {
    ThreeManager.LayerController.setScene(scene)
    return () => {
      ThreeManager.LayerController.setScene(undefined)
    }
  }, [])

  return <BaseLayout scene={scene}></BaseLayout>
}

export default Scene1
