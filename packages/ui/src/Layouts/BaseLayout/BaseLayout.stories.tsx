import React from 'react'
import { Story, Meta } from '@storybook/react'
import BaseLayout, { BaseLayoutProps } from './BaseLayout'
import * as THREE from 'three'
import { backgroundWithBoxRotation } from '../../ThreeGraphic/ThreeWebglLayer/utils'
import Box from '../../Containers/Box'
import { css } from '@emotion/css'
export default {
  title: 'ui/Layouts/BaseLayout',
  component: BaseLayout,
} as Meta

const scene = new THREE.Scene()

backgroundWithBoxRotation(scene)

const cssBox = css`
  width: 700px;
  height: 200px;
  margin-bottom: 50px;
  padding: 20px;
  color: white;
`

const cssRoot = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const NormalTemplate: Story<BaseLayoutProps> = (args) => {
  return (
    <BaseLayout {...args} scene={scene}>
      <div className={cssRoot}>
        <Box className={cssBox}>BaseLayout test!</Box>
      </div>
    </BaseLayout>
  )
}

export const Normal = NormalTemplate.bind({})
Normal.args = {}
