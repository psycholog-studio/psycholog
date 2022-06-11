import { Story } from '@storybook/react'

export const paddingDecorator = (Story: Story) => (
  <div style={{ padding: '20px' }}>
    <Story />
  </div>
)
