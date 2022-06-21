import { Story, Meta } from '@storybook/react'
import YtLayout, { YtLayoutProps } from './YtLayout'

export default {
  title: 'ui/Layouts/YtVideo/YtLayout',
  component: YtLayout,
} as Meta

const NormalTemplate: Story<YtLayoutProps> = (args) => {
  return <YtLayout {...args}></YtLayout>
}

export const Normal = NormalTemplate.bind({})
Normal.args = {
  messages: [
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
  ],
}
