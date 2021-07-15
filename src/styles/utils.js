import { css } from "styled-components";

export const box = css`
  font-weight: 700;
  text-align: right;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
`;

export const inactiveButton = css`
  color: var(--light-grayish-cyan2);
  background-color: var(--very-dark-cyan);
`;

export const activeButton = css`
  color: var(--very-dark-cyan);
  background-color: var(--strong-cyan);
`;
