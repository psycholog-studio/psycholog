import { css } from '@emotion/css'

export const root = css`
  position: relative;

  svg {
    z-index: 0;
    position: absolute;
  }
`

export const content = css`
  position: absolute;
  overflow: hidden;
  color: white;
  z-index: 1;
  padding: 20px;
  width: 100%;
  height: 100%;
`
