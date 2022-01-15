import React, {
  ForwardedRef,
  forwardRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'
import { cx } from '@emotion/css'
import * as styles from './Box.styles'
import Corners from './Corners'

export type BoxProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>

const Box = forwardRef(
  (inProps: BoxProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { className, children, ...props } = inProps
    return (
      <div {...props} ref={ref} className={cx(styles.root, className)}>
        <Corners />
        {children}
      </div>
    )
  }
)

Box.displayName = 'Box'

export default Box
