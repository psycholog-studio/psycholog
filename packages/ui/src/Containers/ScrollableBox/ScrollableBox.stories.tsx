import { Story, Meta } from '@storybook/react'
import ScrollableBox, { ScrollableBoxProps } from './ScrollableBox'
import { paddingDecorator } from '../../storyUtils'

export default {
  title: 'ui/Containers/ScrollableBox',
  component: ScrollableBox,
  decorators: [paddingDecorator],
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
