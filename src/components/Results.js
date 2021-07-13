import styled from "styled-components";

const StyledResults = styled.div`
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  background-color: var(--very-dark-cyan);
  border-radius: 1rem;

  .result {
    display: flex;
    justify-content: space-between;

    & + & {
      border-left: 1px solid;
    }
  }

  .title {
    font-size: 1rem;
    color: var(--white);
    position: relative;
  }

  .subtitle {
    font-size: 0.75rem;
    color: var(--dark-grayish-cyan2);
  }

  .price {
    font-size: 1.75rem;
    color: var(--strong-cyan);
  }
`;

const Results = ({ bill, people, percentage }) => {
  const tip = ((bill / people) * (percentage / 100)).toFixed(2) || 0;
  const total = (bill / people || 0) + Number(tip);
  return (
    <StyledResults>
      <div className="result">
        <div className="label">
          <p className="title">Tip Amount</p>
          <p className="subtitle">/ person</p>
        </div>
        <p className="price">{`$${tip}`}</p>
      </div>
      <div className="result">
        <div className="label">
          <p className="title">Total</p>
          <p className="subtitle">/ person</p>
        </div>
        <p className="price">{`$${total}`}</p>
      </div>
    </StyledResults>
  );
};

export default Results;
