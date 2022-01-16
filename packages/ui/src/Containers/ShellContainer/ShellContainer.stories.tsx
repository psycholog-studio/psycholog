import React from 'react'
import { Story, Meta } from '@storybook/react'
import ShellContainer, { ShellContainerProps } from './ShellContainer'
import { paddingDecorator } from '../../storyUtils'

export default {
  title: 'ui/Containers/ShellContainer',
  component: ShellContainer,
  argTypes: {
    children: { control: 'text' },
  },
  decorators: [paddingDecorator],
} as Meta

const Template: Story<ShellContainerProps> = (args) => (
  <div
    style={{
      marginLeft: '30px',
    }}
  >
    <ShellContainer {...args} />
  </div>
)

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}

Normal.args = {
  width: 700,
  height: 300,
  children: 'Test',
}
