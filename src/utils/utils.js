import styled, { css } from "styled-components";

export const box = css`
  font-weight: 700;
  text-align: right;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem 1.25rem;
`;

export const BasicWrapper = styled.div`
  padding: 2rem;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
`;

export const ButtonClicked = css`
  color: var(--very-dark-cyan);
  background-color: var(--strong-cyan);
`;

export const ButtonNotClicked = css`
  color: var(--light-grayish-cyan2);
  background-color: var(--very-dark-cyan);
`;

export const ButtonDisabled = css`
  cursor: not-allowed;
  color: var(--very-dark-cyan);
  background-color: var(--dark-grayish-cyan1);

  &:hover {
    color: var(--very-dark-cyan);
    background-color: var(--dark-grayish-cyan1);
  }
`;

export const BasicButton = styled.button`
  ${box}

  border: none;
  display: block;
  text-align: center;

  &:hover {
    background-color: var(--light-grayish-cyan1);
  }
`;
