import { css } from '@emotion/css'

export const root = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`

export const threeCssLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`

export const threeWebglLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`

export const uiLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
`
