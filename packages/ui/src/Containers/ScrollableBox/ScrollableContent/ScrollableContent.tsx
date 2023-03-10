import React from 'react';
import { cx } from '@emotion/css';
import { scrollable } from './ScrollableContent.styles';

export type ScrollableContentProps = React.HTMLAttributes<HTMLDivElement>;

export const ScrollableContent = (
  inProps: ScrollableContentProps,
): JSX.Element => {
  const { className, ...props } = inProps;

  return <div {...props} className={cx(scrollable, className)}></div>;
};

export default ScrollableContent;
