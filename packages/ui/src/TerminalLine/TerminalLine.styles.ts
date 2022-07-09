import { css, keyframes } from '@emotion/css'

// font-size: ${fontSize}px;
// color: ${fontColor};
// background-color: ${ba};
export const root = css`
  font-size: 1px;
  text-align: justify;
  margin: 0px;

  span {
    padding: 2px 0px;
  }
`

export const textButton = css`
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #c0d4f2;

  &:hover {
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #c0d4f2;
    background-color: #386d9c;
  }
`

export const text = css`
  font-size: var(--font-size);
  //color: rgb(125, 255, 244);
  color: var(--font-color);
  padding: 2px 0px;
  margin: 0px;
  vertical-align: middle;
`
const blinker = keyframes`
  from {
    opacity: 0.9;
  }
  to {
    opacity: 0;
  }
`

export const blink = css`
  text-decoration: blink;
  animation-name: ${blinker};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
`

export const cursor = css`
  color: rgb(40, 40, 40);
  min-width: 6px;
  margin: auto;
  position: absolute;
  z-index: 3;
`

export const transparentBackground = css`
  //background-color: transparent !important;
`

export const divInput = css`
  caret-color: transparent;
  padding: 0px 0px;
  width: auto;
  background-color: transparent;
  color: white;
  font-size: var(--font-size);
  outline: none;
  border: none;

  &:focus {
    background-color: rgb(150, 150, 150);
  }
`

export const cmdLine = css`
  display: inline-block;
  white-space: nowrap;
`
