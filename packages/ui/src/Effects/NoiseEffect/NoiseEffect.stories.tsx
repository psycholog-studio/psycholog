import React from 'react'
import { Story, Meta } from '@storybook/react'
import NoiseEffect from './NoiseEffect'

export default {
  title: 'ui/Effects/NoiseEffect',
  component: NoiseEffect,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <NoiseEffect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
