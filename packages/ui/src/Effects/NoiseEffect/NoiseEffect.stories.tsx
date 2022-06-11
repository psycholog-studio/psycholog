import { Story, Meta } from '@storybook/react'
import NoiseEffect from './NoiseEffect'
import { paddingDecorator } from '../../storyUtils'

export default {
  title: 'ui/Effects/NoiseEffect',
  component: NoiseEffect,
  decorators: [paddingDecorator],
} as Meta

const Template: Story = (args) => <NoiseEffect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
