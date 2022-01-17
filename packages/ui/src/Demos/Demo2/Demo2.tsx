import React from 'react'
import ShellContainer from '../../Containers/ShellContainer'
import TextLine from '../../TextLine'
import MessageLine from '../../MessageLine'
import BaseLayout from '../../Layouts/BaseLayout'
import Box from '../../Containers/Box'
import * as styles from './Demo2.styles'

const Demo1 = () => {
  return (
    <BaseLayout>
      <div className={styles.contentWrapper}>
        <ShellContainer width={500} height={300}>
          <MessageLine>
            <TextLine text={'tes'} />
            <TextLine text={'tes'} />
            <TextLine text={'tes'} />
          </MessageLine>
        </ShellContainer>
        <Box>Test</Box>
      </div>
    </BaseLayout>
  )
}

export default Demo1
