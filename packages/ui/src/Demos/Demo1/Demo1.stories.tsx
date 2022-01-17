import React from 'react'
import { Story, Meta } from '@storybook/react'
import { paddingDecorator } from '../../storyUtils'
import Demo1 from './Demo1'

export default {
  title: 'ui/Demos/Demo1',
  component: Demo1,
  decorators: [paddingDecorator],
} as Meta

const Template: Story = () => {
  return (
    <div
      style={{
        marginLeft: '30px',
      }}
    >
      <Demo1 />
    </div>
  )
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}
