import { css } from '@emotion/css'

// font-size: ${fontSize}px;
// color: ${fontColor};
// background-color: ${ba};
export const root = css`
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
  text-shadow: 0px 0px 6.9px #000000, 0px 0px 6.9px #000000;
  padding: 2px 0px;
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
