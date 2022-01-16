import React from 'react'
import { Story, Meta } from '@storybook/react'
import { css } from '@emotion/css'
import Box, { BoxProps } from './Box'

export default {
  title: 'ui/Box',
  component: Box,
  argTypes: {},
} as Meta

const Template: Story<BoxProps> = (args) => {
  return (
    <Box
      {...args}
      className={css`
        width: 300px;
        height: 300px;
        padding: 50px;
      `}
    />
  )
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}

Normal.args = {}
