import React from 'react'
import BaseLayout from '@psycholog-studio/ui/Layouts/BaseLayout'
import ShellContainer from '@psycholog-studio/ui/Containers/ShellContainer'
import TextLine from '@psycholog-studio/ui/TextLine'
import MessageLine from '@psycholog-studio/ui/MessageLine'

const Scene0 = (): JSX.Element => {
  return (
    <BaseLayout>
      <ShellContainer width={500} height={300}>
        <MessageLine>
          <TextLine text={'test  '} />
          <TextLine text={'test'} />
          <TextLine text={'test'} />
        </MessageLine>
      </ShellContainer>
    </BaseLayout>
  )
}

export default Scene0
