import React, { useEffect, useRef } from 'react'
import { Story, Meta } from '@storybook/react'
import BaseLayout, { BaseLayoutProps } from './BaseLayout'
import * as THREE from 'three'
import Box from '../../Containers/Box'
import ThreeManager from '../../ThreeGraphic/core/ThreeManager'
import { css } from '@emotion/css'

export default {
  title: 'ui/Layouts/BaseLayout',
  component: BaseLayout,
} as Meta

const createScene = (threeManager) => {
  const scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(200, 200, 200)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 500
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  const LayerController = threeManager.LayerController
  LayerController.subscribeAnimate(animatation)
  return scene
}

const cssBox = css`
  width: 700px;
  height: 200px;
  margin-bottom: 50px;
  padding: 20px;
  color: white;
`

const NormalTemplate: Story<BaseLayoutProps> = (args) => {
  const sceneRef = useRef<THREE.Scene>(null)
  const threeManagerRef = useRef<ThreeManager>()

  useEffect(() => {
    if (sceneRef.current) {
      const scene = new THREE.Scene()

      const geometry = new THREE.BoxGeometry(200, 200, 200)
      const material = new THREE.MeshNormalMaterial()
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.z = 500
      scene.add(mesh)
    }

    if (threeManagerRef.current) {
      sceneRef.current = createScene(threeManagerRef.current)
      threeManagerRef.current.LayerController.setScene(sceneRef.current)
    }
    return () => {
      if (threeManagerRef.current) {
        threeManagerRef.current.LayerController.setScene(undefined)
      }
    }
  }, [])

  return (
    <BaseLayout
      {...args}
      scene={sceneRef.current}
      threeManagerRef={threeManagerRef}
    >
      <Box className={cssBox}>BaseLayout test!</Box>
    </BaseLayout>
  )
}

export const Normal = NormalTemplate.bind({})
Normal.args = {}
