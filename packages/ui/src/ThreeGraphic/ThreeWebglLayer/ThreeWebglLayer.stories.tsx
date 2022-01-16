import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeWebglLayer from './ThreeWebglLayer'
import ThreeManager from '../core/ThreeManager'
import * as THREE from 'three'
import { backgroundWithBoxRotation, boxRotation } from './utils'

export default {
  title: 'ui/ThreeGraphic/ThreeWebglLayer',
  component: ThreeWebglLayer,
} as Meta

const Template: Story = (args) => {
  useEffect(() => {
    const scene = new THREE.Scene()
    boxRotation(scene)

    ThreeManager.LayerController.setScene(scene)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeWebglLayer {...args} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}

const BackgroundTemplate: Story = (args) => {
  useEffect(() => {
    const scene = new THREE.Scene()
    backgroundWithBoxRotation(scene)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeWebglLayer {...args} />
    </div>
  )
}

export const withBackground = BackgroundTemplate.bind({})
Normal.args = {}
