import React from 'react'
import { Story, Meta } from '@storybook/react'
import { css } from '@emotion/css'
import Cancel, { CancelProps } from './Cancel'
import { paddingDecorator } from '../storyUtils'

export default {
  title: 'ui/Cancel',
  component: Cancel,
  decorators: [paddingDecorator],
} as Meta

const Template: Story<CancelProps> = (args) => {
  return (
    <div
      className={css`
        width: 24px;
        height: 24px;
      `}
    >
      <Cancel {...args} />
    </div>
  )
}

export const Normal = Template.bind({})

Normal.args = {
  title: 'SKILL',
  animated: false,
}

Normal.parameters = {
  backgrounds: { default: 'dark' },
}
