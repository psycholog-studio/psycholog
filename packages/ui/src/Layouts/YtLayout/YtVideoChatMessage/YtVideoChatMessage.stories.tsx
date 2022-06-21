import { Story, Meta } from '@storybook/react'
import YtVideoChatMessage, {
  YtVideoChatMessageProps,
} from './YtVideoChatMessage'

export default {
  title: 'ui/Layouts/YtVideo/YtVideoChatMessage',
  component: YtVideoChatMessage,
} as Meta

const NormalTemplate: Story<YtVideoChatMessageProps> = (args) => {
  return <YtVideoChatMessage {...args}></YtVideoChatMessage>
}

export const Normal = NormalTemplate.bind({})
Normal.args = {
  name: 'User',
  message: `I'm User.`,
}
