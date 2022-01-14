import React from 'react'
import { Story, Meta } from '@storybook/react'
import BaseLayout, { BaseLayoutProps } from './BaseLayout'

export default {
  title: 'ui/Layouts/BaseLayout',
  component: BaseLayout,
  argTypes: {},
} as Meta

const Template: Story<BaseLayoutProps> = (args) => <BaseLayout {...args} />

export const Auto = Template.bind({})
Auto.args = {
  isSizeAuto: true,
}

export const VGA = Template.bind({})
VGA.args = {
  size: 'VGA',
}

export const SVGA = Template.bind({})
SVGA.args = {
  size: 'SVGA',
}

export const XGA = Template.bind({})
XGA.args = {
  size: 'XGA',
}

export const SXGA = Template.bind({})
SXGA.args = {
  size: 'SXGA',
}

export const WXGAPLUS = Template.bind({})
WXGAPLUS.args = {
  size: 'WXGAPLUS',
}

export const HD1080 = Template.bind({})
HD1080.args = {
  size: 'HD1080',
}

export const WQHD = Template.bind({})
WQHD.args = {
  size: 'WQHD',
}
