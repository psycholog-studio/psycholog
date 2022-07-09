import React from 'react'
import { Story, Meta } from '@storybook/react'
import Scene1 from './Scene1'

export default {
  title: 'scenes/Scene1',
  component: Scene1,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <Scene1 {...args} />

export const Normal = Template.bind({})
Normal.args = {}
