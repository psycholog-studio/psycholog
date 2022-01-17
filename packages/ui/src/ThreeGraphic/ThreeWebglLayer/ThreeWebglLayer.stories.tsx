import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeWebglLayer from './ThreeWebglLayer'
import ThreeManager from '../core/ThreeManager'
import * as THREE from 'three'
import ThreeBackground from '../core/ThreeBackground'

export default {
  title: 'ui/ThreeGraphic/ThreeWebglLayer',
  component: ThreeWebglLayer,
} as Meta

const boxScene = (() => {
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

const Template: Story = (args) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeWebglLayer {...args} scene={boxScene} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}

const backgroundScene = (() => {
  const scene = new THREE.Scene()
  const bg1 = new ThreeBackground('assets/B.jpg', {
    color: '#939393',
  })
  scene.add(bg1.mesh)

  return scene
})()

const BackgroundTemplate: Story = (args) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeWebglLayer {...args} scene={backgroundScene} />
    </div>
  )
}

export const withBackground = BackgroundTemplate.bind({})
Normal.args = {}
