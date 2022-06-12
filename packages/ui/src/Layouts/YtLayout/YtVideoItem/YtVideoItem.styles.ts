import { css } from '@emotion/css'

export const root = css`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 16px;
`

export const imgWrap = css`
  position: relative;
  width: 100px;
  height: 56px;
`

export const thumbnail = css`
  width: 100%;
  height: 100%;
  background-color: grey;
`

export const timeStatus = css`
  position: absolute;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75em;
  bottom: 5px;
  right: 5px;
  padding: 3px 4px;
`

export const progressTrack = css`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #1b1b1b;
`

export const progressThumb = css`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  background-color: red;
`

export const content = css`
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const title = css`
  font-weight: bold;
  font-size: 1em;
`

export const desc = css`
  font-size: 0.75em;
`
