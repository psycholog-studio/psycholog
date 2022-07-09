import React, { ReactNode } from 'react'
import * as styles from './MessageLine.styles'

export interface MessageLineProps {
  children?: ReactNode
}

const MessageLine = (props: MessageLineProps): JSX.Element => {
  const { children } = props

  return (
    <div className={styles.root}>
      <span className={styles.lineConatiner}>{children}</span>
      {/* <div className="container"></div> */}
    </div>
  )
}

export default MessageLine
