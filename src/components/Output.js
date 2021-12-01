import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 1.5rem;
  }
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 1rem;
`;

const Subtitle = styled.h6`
  font-size: 0.75rem;
  color: var(--dark-grayish-cyan2);
`;

const Amount = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--strong-cyan);

  @media (min-width: 768px) {
    line-height: 1;
    font-size: 2rem;
  }
`;

const Output = ({ title, amount }) => {
  return (
    <ResultWrapper>
      <div>
        <Title>{title}</Title>
        <Subtitle>/ person</Subtitle>
      </div>
      <Amount>{`$${amount}`}</Amount>
    </ResultWrapper>
  );
};

export default Output;
