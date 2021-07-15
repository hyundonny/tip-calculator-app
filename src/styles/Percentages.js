import styled from "styled-components";

export const Percentages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > * {
    width: calc(50% - 0.5rem);
  }
`;
