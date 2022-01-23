import { css } from '@emotion/css'

export const root = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

export const uiContentWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`
