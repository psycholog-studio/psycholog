import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 6px;
`;

export const header = css`
  display: grid;
  grid-template-columns: auto 32px;
  grid-template-rows: 16px 16px 32px;
  padding: 8px 8px 4px 12px;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 500px;
  overflow-y: auto;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #f6f6f6;
`;

export const groupTitle = css`
  grid-column: 1;
  grid-row: 1;
  font-weight: bold;
`;

export const groupSubTitle = css`
  grid-column: 1;
  grid-row: 2;
  font-size: 0.75em;
  align-self: end;
`;

export const close = css`
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  background-color: gray;
  height: 100%;
  width: 100%;
`;

export const options = css`
  grid-column: 2;
  grid-row: 3;
  align-self: center;
  justify-self: center;
  background-color: gray;
  height: 100%;
  width: 100%;
`;
