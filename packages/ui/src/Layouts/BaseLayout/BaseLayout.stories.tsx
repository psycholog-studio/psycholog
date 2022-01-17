import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import BaseLayout, { BaseLayoutProps } from './BaseLayout'
import * as THREE from 'three'
import Box from '../../Containers/Box'
import { css } from '@emotion/css'
import ThreeManager from '../../ThreeGraphic/core/ThreeManager'

export default {
  title: 'ui/Layouts/BaseLayout',
  component: BaseLayout,
} as Meta

const scene = (() => {
  const scene = new THREE.Scene()
  const LayerController = ThreeManager.LayerController

  const geometry = new THREE.BoxGeometry(200, 200, 200)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 500
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  LayerController.subscribeAnimate(animatation)
  return scene
})()

const cssBox = css`
  width: 700px;
  height: 200px;
  margin-bottom: 50px;
  padding: 20px;
  color: white;
`

const NormalTemplate: Story<BaseLayoutProps> = (args) => {
  useEffect(() => {
    ThreeManager.LayerController.setScene(scene)
    return () => {
      ThreeManager.LayerController.setScene(undefined)
    }
  }, [])

  return (
    <BaseLayout {...args} scene={scene}>
      <Box className={cssBox}>BaseLayout test!</Box>
    </BaseLayout>
  )
}

export const Normal = NormalTemplate.bind({})
Normal.args = {}
