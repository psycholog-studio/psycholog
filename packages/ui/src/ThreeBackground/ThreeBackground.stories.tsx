import React from 'react'
import { Story, Meta } from '@storybook/react'
import ThreeBackground from './ThreeBackground'

export default {
  title: 'ui/ThreeBackground',
  component: ThreeBackground,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <ThreeBackground {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: '>>EWFEWQF?EWF?',
}
