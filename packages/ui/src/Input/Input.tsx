import React, { forwardRef, ForwardedRef } from 'react'
import { cx } from '@emotion/css'
import Box from '../Containers/Box'
import { scrollable } from '../Containers/ScrollableBox/ScrollableContent/ScrollableContent.styles'
import * as styles from './Input.styles'

type BaseInputCategory = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

export type InputClassesKey = 'root' | 'input' | 'textarea' | 'textareaWrap'

export type InputComponent = 'input' | 'textarea'

export type InputProps = {
  component?: InputComponent
  classes?: {
    [k in InputClassesKey]?: string
  }
} & BaseInputCategory

export type InputRef = ForwardedRef<HTMLInputElement & HTMLTextAreaElement>

const Input = forwardRef((inProps: InputProps, ref: InputRef): JSX.Element => {
  const { component = 'input', classes = {}, className, ...props } = inProps

  return (
    <Box className={cx(styles.root, classes.root, className)}>
      {component === 'input' && (
        <input
          ref={ref}
          {...props}
          className={cx(styles.input, classes.input)}
        />
      )}
      {component === 'textarea' && (
        <div className={styles.textareaWrap}>
          <textarea
            ref={ref}
            {...props}
            className={cx(scrollable, styles.textarea, classes.textarea)}
          />
        </div>
      )}
    </Box>
  )
})

Input.displayName = 'Input'

export default Input
