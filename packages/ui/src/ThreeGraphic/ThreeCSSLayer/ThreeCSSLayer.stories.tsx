import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeCSSLayer from './ThreeCSSLayer'
import * as THREE from 'three'
import ThreeManager from '../core/ThreeManager'
import ThreeBackground from '../core/ThreeBackground'
import ThreeCSSObject from './ThreeCSSObject'
export default {
  title: 'ui/ThreeGraphic/ThreeCSSLayer',
  component: ThreeCSSLayer,
} as Meta

const backgroundScene = (() => {
  const scene = new THREE.Scene()
  const bg1 = new ThreeBackground('assets/B.jpg', {
    color: '#939393',
  })
  scene.add(bg1.mesh)

  return scene
})()

const Template: Story = (args) => {
  useEffect(() => {
    ThreeManager.LayerController.setScene(backgroundScene)
    return () => {
      ThreeManager.LayerController.setScene(undefined)
    }
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ThreeCSSLayer {...args} scene={backgroundScene}>
        {[...Array(7).keys()].map((_v, index) => {
          return (
            <ThreeCSSObject
              key={index}
              ref={(obj) => {
                if (obj) {
                  obj.scale.set(
                    10 - index * 0.3,
                    10 - index * 0.3,
                    10 - index * 0.3
                  )
                  obj.position.set(50 + index * 100, -300 + index * 200, 100)
                  obj.rotateZ((Math.PI * index) / 20)
                  obj.rotateY(Math.PI / 10)
                  obj.rotateX(Math.PI / 5)
                }
              }}
            >
              <span>ThreeCSSLayer </span>
              <span
                style={{ color: 'red', fontSize: '1.3em', fontWeight: 900 }}
              >
                {index}
              </span>
            </ThreeCSSObject>
          )
        })}

        <ThreeCSSObject
          ref={(obj) => {
            if (obj) {
              obj.scale.set(10, 10, 10)
              obj.position.set(-200, 400, 100)
              obj.rotateZ(Math.PI / 2)
              obj.rotateY(Math.PI / 2)
            }
          }}
        >
          ThreeCSSLayer Test!
        </ThreeCSSObject>
        <ThreeCSSObject
          ref={(obj) => {
            if (obj) {
              obj.scale.set(10, 10, 10)
              obj.position.set(-200, -400, 0)
              obj.rotateZ(Math.PI / 2)
              obj.rotateY(-Math.PI / 2)
            }
          }}
        >
          ThreeCSSLayer Test!
        </ThreeCSSObject>
      </ThreeCSSLayer>
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {}
