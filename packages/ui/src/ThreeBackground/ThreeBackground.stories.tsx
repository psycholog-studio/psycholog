import React, { useCallback } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeBackground, { ThreeBackgroundRefs } from './ThreeBackground'
import ThreeContainer from './ThreeContainer'
import * as THREE from 'three'

export default {
  title: 'ui/ThreeBackground',
  component: ThreeBackground,
} as Meta

const init = (threeContainer: ThreeContainer) => {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  threeContainer.scene.add(mesh)

  const animatation = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }
  threeContainer.subscribeAnimate(animatation)
}

const Template: Story = (args) => {
  const handleStartup = useCallback((refs: ThreeBackgroundRefs) => {
    if (refs.threeContainerRef?.current) {
      init(refs.threeContainerRef.current)
    }
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeBackground {...args} onStartup={handleStartup} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}
