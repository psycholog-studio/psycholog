import { Story, Meta } from '@storybook/react'
import TextLine, { TextLineProps } from './TextLine'
import { paddingDecorator } from '../storyUtils'

export default {
  title: 'ui/TextLine',
  component: TextLine,
  decorators: [paddingDecorator],
} as Meta

const Template: Story<TextLineProps> = (args) => <TextLine {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: '>>EWFEWQF?EWF?',
}
