import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextLine, { TextLineProps } from './TextLine'

export default {
  title: 'ui/TextLine',
  component: TextLine,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story<TextLineProps> = (args) => <TextLine {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: '>>EWFEWQF?EWF?',
}
