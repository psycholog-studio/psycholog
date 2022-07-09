import React from 'react'
import * as styles from './TextLine.styles'
import { cx } from '@emotion/css'

export interface TextLineProps {
  text: string
  type?: 'button' | 'string'
}

const TextLine = (props: TextLineProps): JSX.Element => {
  const { text, type = 'string' } = props
  const textInside = text.replace(/ /g, '\u00A0')

  return (
    <span
      className={cx(styles.root, {
        [styles.textButton]: type === 'button',
      })}
    >
      {textInside}
    </span>
  )
}

export default TextLine
