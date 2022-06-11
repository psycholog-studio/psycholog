import { Story, Meta } from '@storybook/react'
import TextsEffect from './TextsEffect'
import { paddingDecorator } from '../../storyUtils'

export default {
  title: 'ui/Effects/TextsEffect',
  component: TextsEffect,
  decorators: [paddingDecorator],
} as Meta

const Template: Story = (args) => <TextsEffect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
