import { css } from '@emotion/css';
import Color from 'color';

const backgroundColor = new Color('#22b6db');

export const root = css`
  position: relative;
  border: 1px solid ${backgroundColor.lighten(0.5).alpha(0.8).toString()};
  background-color: ${backgroundColor.alpha(0.4).toString()};
`;
