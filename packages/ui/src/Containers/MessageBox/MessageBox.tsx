import { forwardRef } from 'react'
import { cx } from '@emotion/css'
import Box, { BoxProps, BoxRef } from '../Box'
import * as styles from './MessageBox.styles'

export interface MessageBoxProps extends BoxProps {
  collapsed?: boolean
}

const MessageBox = forwardRef(
  (inProps: MessageBoxProps, ref: BoxRef): JSX.Element => {
    const { collapsed, className, ...props } = inProps

    return (
      <Box
        {...props}
        ref={ref}
        className={cx(
          styles.root,
          {
            collapsed,
          },
          className
        )}
      />
    )
  }
)

MessageBox.displayName = 'MessageBox'

export default MessageBox
