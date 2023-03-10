import { css, keyframes } from '@emotion/css';

const blinker = keyframes`
  from {opacity: 1.0;}
  to {opacity: 0.0;}
`;

export const root = css`
  padding: 4px;
  font-family: 'Menlo';
  font-size: 12px;
  background-color: #202020;
  flex-direction: column;
  height: 100%;
  color: white;
  overflow: auto;
  overflow-wrap: break-word;

  p {
    line-height: 1.4em;
    margin: 0;
  }
`;

export const input = css`
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  opacity: 0;

  &:focus ~ .terminal-input:after {
    background: rgba(255, 255, 255, 0.3);
    color: transparent;
    content: '.';
    text-decoration: blink;
    animation-name: ${blinker};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
`;

export const terminalInput = css`
  outline: none;
  background-color: transparent;
  font: inherit;
  border: none;
  resize: none;
  color: white;
`;
