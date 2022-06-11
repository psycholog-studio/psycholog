import { Story, Meta } from '@storybook/react'
import PixiBackground from './PixiBackground'

export default {
  title: 'ui/PixiBackground',
  component: PixiBackground,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => <PixiBackground {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: '>>EWFEWQF?EWF?',
}
