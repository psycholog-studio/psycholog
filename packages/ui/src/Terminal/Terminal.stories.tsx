import { Story, Meta } from '@storybook/react'
import Terminal from './Terminal'
import { paddingDecorator } from '../storyUtils'

export default {
  title: 'ui/Terminal',
  component: Terminal,
  decorators: [paddingDecorator],
} as Meta

const Template: Story = () => {
  return (
    <div
      style={{
        height: '300px',
      }}
    >
      <Terminal />
    </div>
  )
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}
