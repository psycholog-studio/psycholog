import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
`;

export const header = css`
  border: 1px solid #e1e1e1;
  padding: 8px 24px;
`;

export const content = css`
  background-color: #fafafa;
  border: 1px solid #e1e1e1;
  border-top: none;
  border-bottom: none;
`;

export const footer = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 64px;
  border: 1px solid #e1e1e1;
  border-top: none;
  padding: 12px 24px;
  font-size: 12px;
  color: #a1a1a1;
`;
