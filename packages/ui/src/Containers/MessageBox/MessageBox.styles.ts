import { css } from '@emotion/css';
import Color from 'color';

export const root = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${new Color('#111111').alpha(0.15).toString()};
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 7px rgba(0, 255, 255, 0.6);
  transform: translateX(0);
  transition: transform 0.5s;

  &.collapsed {
    transform: translateX(-100%);
  }
`;
