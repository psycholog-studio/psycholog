import React from 'react'
import { Story, Meta } from '@storybook/react'
import Demo2 from './Demo2'

export default {
  title: 'ui/Demos/Demo2',
  component: Demo2,
} as Meta

const Template: Story = () => {
  return <Demo2 />
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}
