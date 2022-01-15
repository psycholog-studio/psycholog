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
    <div
      className={css`
        padding: 30px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #101010;
      `}
    >
      <Box
        {...args}
        className={css`
          width: 300px;
          height: 300px;
          padding: 50px;
        `}
      ></Box>
    </div>
  )
}

export const NormalCard = Template.bind({})

NormalCard.args = {}
