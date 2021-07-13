import styled from "styled-components";

export const Percentages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > * {
    border: none;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 0.25rem;
    width: calc(50% - 0.5rem);
  }

  input {
    text-align: right;
    color: var(--very-dark-cyan);
    background-color: var(--light-grayish-cyan2);
  }
`;

export const Button = styled.button`
  display: block;
  color: var(--light-grayish-cyan2);
  background-color: var(--very-dark-cyan);

  &:hover,
  &:active {
    color: var(--very-dark-cyan);
    background-color: var(--strong-cyan);
  }
`;
