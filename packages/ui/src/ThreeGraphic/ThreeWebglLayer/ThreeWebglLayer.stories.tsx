import React, { useEffect, useRef } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeWebglLayer from './ThreeWebglLayer'
import ThreeManager from '../core/ThreeManager'
import ThreeGraphic from '../ThreeGraphic'
import * as THREE from 'three'
import ThreeBackground from '../core/ThreeBackground'
import {
  useThreeBackgroundGenerator,
  ThreeBackgroundGenerator,
} from '../core/ThreeBackground/ThreeBackground'

export default {
  title: 'ui/ThreeGraphic/ThreeWebglLayer',
  component: ThreeWebglLayer,
} as Meta

const createBoxScene = (threeManager: ThreeManager) => {
  const scene = new THREE.Scene()
  const layerController = threeManager.layerController

  const geometry = new THREE.BoxGeometry(200, 200, 200)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = 500
  scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  layerController.subscribeAnimate(animatation)
  return scene
}

const Template: Story = (args) => {
  const threeManagerRef = useRef<ThreeManager>(null)

  useEffect(() => {
    if (threeManagerRef.current) {
      const boxScene = createBoxScene(threeManagerRef.current)
      threeManagerRef.current.layerController.setScene(boxScene)
    }
    return () => {
      if (threeManagerRef.current) {
        threeManagerRef.current.layerController.setScene(undefined)
      }
    }
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeGraphic ref={threeManagerRef}>
        <ThreeWebglLayer {...args} />
      </ThreeGraphic>
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}

const createBackgroundScene = (
  threeBackgroundGenerator: ThreeBackgroundGenerator
) => {
  const scene = new THREE.Scene()
  const bg1 = threeBackgroundGenerator('assets/B.jpg', {
    color: '#939393',
  })
  scene.add(bg1.mesh)

  return scene
}

const BackgroundTemplate: Story = (args) => {
  const threeManagerRef = useRef<ThreeManager>(null)
  const threeBackgroundGenerator = useThreeBackgroundGenerator(() => {
    return threeManagerRef.current
  })

  useEffect(() => {
    if (threeManagerRef.current) {
      const backgroundScene = createBackgroundScene(threeBackgroundGenerator)
      threeManagerRef.current.layerController.setScene(backgroundScene)
    }
    return () => {
      if (threeManagerRef.current) {
        threeManagerRef.current.layerController.setScene(undefined)
      }
    }
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeGraphic ref={threeManagerRef}>
        <ThreeWebglLayer {...args} />
      </ThreeGraphic>
    </div>
  )
}

export const withBackground = BackgroundTemplate.bind({})
Normal.args = {}
