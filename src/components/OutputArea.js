import styled from 'styled-components';

import Output from './Output';
import ResetButton from './ResetButton';

const OutputWrapper = styled.div`
  padding: 2.15rem 1.85rem;
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;

  background-color: var(--very-dark-cyan);
  justify-content: space-between;

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 750px) {
    padding: 2.25rem 1.5rem;
  }
`;

const OutputArea = ({ bill, people, percentage, reset }) => {
  const tip =
    bill > 0 && people > 0 && percentage > 0
      ? ((bill / people) * (percentage / 100)).toFixed(2)
      : '0.00';

  const total =
    bill > 0 && people > 0 && percentage > 0
      ? ((bill / people || 0) + Number(tip)).toFixed(2)
      : '0.00';

  return (
    <OutputWrapper>
      <div>
        <Output title='Tip Amount' amount={tip} />
        <Output title='Total' amount={total} />
      </div>
      <ResetButton
        bill={bill}
        people={people}
        percentage={percentage}
        reset={reset}
      />
    </OutputWrapper>
  );
};

export default OutputArea;
