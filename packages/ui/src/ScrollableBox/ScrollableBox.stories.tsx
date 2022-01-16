import React from 'react'
import { Story, Meta } from '@storybook/react'
import { css } from '@emotion/css'
import ScrollableBox, { ScrollableBoxProps } from './ScrollableBox'

export default {
  title: 'ui/ScrollableBox',
  component: ScrollableBox,
  argTypes: {},
} as Meta

const Template: Story<ScrollableBoxProps> = (args) => {
  return (
    <ScrollableBox
      {...args}
      style={{
        padding: '10px',
        width: '300px',
        height: '100px',
        overflow: 'hidden',
      }}
    />
  )
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}

Normal.args = {
  children:
    'fqewkfopewqjfoewqjfopeqwjfopiewqjiopfwjiopfewqiopfjeiqwopjfqwejfwqepfjpoewjfopejofpewjqpofjewpiofjopiewqjfpoweqjfpoewjfopiewqjfopqewjfpoqewjpofewpoqfjewpoqjfpioeqwjfpoieqwjfpoeqwjfpoqwejpofiqwejpoifweqpiofjqwopiefjopiqewfjipoeqwjfopeqwjipfipj',
}
