import React from 'react'
import { Story, Meta } from '@storybook/react'
import TerminalLine, { TerminalLineProps } from './TerminalLine'

export default {
  title: 'ui/TerminalLine',
  component: TerminalLine,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story<TerminalLineProps> = (args) => <TerminalLine {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: '>>EWFEWQF?EWF?',
}
