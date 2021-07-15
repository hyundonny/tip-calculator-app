import styled from "styled-components";

const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 1.5rem;
  }
`;

const Label = styled.div``;

const Title = styled.h1`
  color: var(--white);
  font-size: 1rem;
`;
const Subtitle = styled.h6`
  font-size: 0.75rem;
  color: var(--dark-grayish-cyan2);
`;
const Amount = styled.p`
  font-size: 1.75rem;
  color: var(--strong-cyan);
`;

const Output = ({ title, amount }) => {
  return (
    <ResultWrapper>
      <Label>
        <Title>{title}</Title>
        <Subtitle>/ person</Subtitle>
      </Label>
      <Amount>{`$${amount}`}</Amount>
    </ResultWrapper>
  );
};

export default Output;
