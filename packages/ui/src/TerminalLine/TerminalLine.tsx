import React from 'react'
import * as styles from './TerminalLine.styles'

export interface TerminalLineProps {
  text: string
  cmdHead: string
  type: 'button'
}

const TerminalLine = (props: TerminalLineProps): JSX.Element => {
  const { cmdHead } = props

  return (
    <div className={styles.root}>
      <span className={styles.cmdLine}>
        <span className="text cmd-line last-cmd-line first-cmd-line">
          <span className="cmd-line-header">{cmdHead}</span>
        </span>
      </span>
    </div>
  )
}

export default TerminalLine
