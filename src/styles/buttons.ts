import styled, { css } from 'styled-components';

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
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  border: none;
  display: block;
  text-align: center;

  @media (min-width: 750px) {
    padding: 0.35rem 1rem;
  }

  &:hover {
    background-color: var(--light-grayish-cyan1);
  }
`;
