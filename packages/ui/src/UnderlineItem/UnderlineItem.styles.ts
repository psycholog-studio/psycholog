import { css } from '@emotion/css'

export const createUnderlineStyle = (color: string) => {
  return css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &::after {
      content: '';
      width: 100%;
      background-color: ${color};
      height: 5px;
      transition: transform 0.5s;
    }

    &::after {
      transform: scaleX(0);
    }

    &.selected {
      &::after {
        transform: scaleX(1);
      }
    }
  `
}
