import React from 'react'
import { Story, Meta } from '@storybook/react'
import ShellContainer, {
  ShellContainerProps,
} from '../Containers/ShellContainer'
import TextLine from '../TextLine'
import MessageLine from '../MessageLine'
import { paddingDecorator } from '../storyUtils'
export default {
  title: 'ui/Demos/Demo1',
  component: ShellContainer,
  decorators: [paddingDecorator],
} as Meta

const Template: Story<ShellContainerProps> = () => {
  return (
    <div
      style={{
        marginLeft: '30px',
      }}
    >
      <ShellContainer width={500} height={300}>
        <MessageLine>
          <TextLine text={'tes'} />
          <TextLine text={'tes'} />
          <TextLine text={'tes'} />
        </MessageLine>
      </ShellContainer>
    </div>
  )
}

export const Normal = Template.bind({})

Normal.parameters = {
  backgrounds: { default: 'dark' },
}
