import React from 'react'
import { Story, Meta } from '@storybook/react'
import Scene0 from './Scene0'

export default {
  title: 'scenes/Scene0',
  component: Scene0,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <Scene0 {...args} />

export const Normal = Template.bind({})
Normal.args = {}
