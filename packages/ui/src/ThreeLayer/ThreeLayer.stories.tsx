import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeLayer from './ThreeLayer'
import ThreeManager from './ThreeManager'
import * as THREE from 'three'
import Background from './ThreeManager/Background'

export default {
  title: 'ui/ThreeLayer',
  component: ThreeLayer,
} as Meta

const boxRotation = (scene: THREE.Scene) => {
  const ThreeContainer = ThreeManager.ThreeContainer
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 5
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  ThreeContainer.subscribeAnimate(animatation)
}

const Template: Story = (args) => {
  useEffect(() => {
    const scene = new THREE.Scene()
    boxRotation(scene)

    ThreeManager.ThreeContainer.setScene(scene)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeLayer {...args} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}

const BackgroundTemplate: Story = (args) => {
  useEffect(() => {
    const scene = new THREE.Scene()
    boxRotation(scene)
    const bg1 = new Background('assets/B.jpeg')
    scene.add(bg1.mesh)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.z = 15
    scene.add(directionalLight)

    ThreeManager.ThreeContainer.setScene(scene)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeLayer {...args} />
    </div>
  )
}

export const withBackground = BackgroundTemplate.bind({})
Normal.args = {}
