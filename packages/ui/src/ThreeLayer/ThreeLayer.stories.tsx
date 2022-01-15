import React, { useCallback } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeLayer from './ThreeLayer'
import ThreeManager from './ThreeManager'
import * as THREE from 'three'

export default {
  title: 'ui/ThreeLayer',
  component: ThreeLayer,
} as Meta

const init = () => {
  const ThreeContainer = ThreeManager.ThreeContainer
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  ThreeContainer.scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }
  ThreeContainer.subscribeAnimate(animatation)
}

const Template: Story = (args) => {
  const handleStartup = useCallback(() => {
    init()
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeLayer {...args} onStartup={handleStartup} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}

const BackgroundTemplate: Story = (args) => {
  const handleStartup = useCallback(() => {
    init()
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeLayer {...args} onStartup={handleStartup} />
    </div>
  )
}

export const withBackground = BackgroundTemplate.bind({})
Normal.args = {}
