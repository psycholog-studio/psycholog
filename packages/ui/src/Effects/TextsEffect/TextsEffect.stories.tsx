import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextsEffect from './TextsEffect'

export default {
  title: 'ui/Effects/TextsEffect',
  component: TextsEffect,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <TextsEffect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
