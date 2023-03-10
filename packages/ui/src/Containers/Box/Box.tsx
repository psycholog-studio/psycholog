import React, { ForwardedRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import { cx } from '@emotion/css';
import * as styles from './Box.styles';
import Corners from './Corners';

export type BoxProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>;

export type BoxRef = ForwardedRef<HTMLDivElement>;

const Box = React.forwardRef((inProps: BoxProps, ref: BoxRef): JSX.Element => {
  const { className, children, ...props } = inProps;

  return (
    <div {...props} ref={ref} className={cx(styles.root, className)}>
      <Corners />
      {children}
    </div>
  );
});

Box.displayName = 'Box';

export default Box;
