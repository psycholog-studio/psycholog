import { css } from '@emotion/css';

const width = 30;
const textareaHorizonPadding = 0.4;
const textareaVerticlePadding = 1;
const scrollBarPadding = 0.3;
const textareaHeight = 2.4 + textareaVerticlePadding * 2;

export const root = css`
  width: ${width}ch;
`;

export const input = css`
  height: calc(2em + 10px);
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: transparent;
  text-shadow: 0 0 0 #fff;
`;

export const textarea = css`
  height: ${textareaHeight}ch;
  padding: 0 ${scrollBarPadding}ch 0
    ${textareaHorizonPadding + scrollBarPadding}ch;
`;

export const textareaWrap = css`
  padding: ${textareaVerticlePadding}ch ${textareaHorizonPadding}ch;
`;
