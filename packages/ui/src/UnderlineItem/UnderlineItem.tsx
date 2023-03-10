import React, { cloneElement } from 'react';
import { cx } from '@emotion/css';
import * as styles from './UnderlineItem.styles';

export interface UnderlineItemProps {
  children?: React.ReactElement;
  className?: string;
  color?: string;
  selected?: boolean;
}

export const UnderlineItem = (
  props: UnderlineItemProps,
): JSX.Element | null => {
  const { color = '#39ebeb', children, className, selected } = props;

  if (!children) {
    return null;
  }

  return cloneElement(children, {
    className: cx(styles.createUnderlineStyle(color), { selected }, className),
  });
};

export default UnderlineItem;
