import React from 'react'
import ShellContainer from '../../Containers/ShellContainer'
import TextLine from '../../TextLine'
import MessageLine from '../../MessageLine'

const Demo1 = () => {
  return (
    <ShellContainer width={500} height={300}>
      <MessageLine>
        <TextLine text={'tes'} />
        <TextLine text={'tes'} />
        <TextLine text={'tes'} />
      </MessageLine>
    </ShellContainer>
  )
}

export default Demo1
