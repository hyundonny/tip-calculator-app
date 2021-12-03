import styled from 'styled-components';

import Output from 'components/Output';
import ResetButton from 'components/ResetButton';

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

type OutputAreaProps = {
  bill: number | '';
  people: number | '';
  percentage: number | '';
  reset: () => void;
};

export default function OutputArea({
  bill,
  people,
  percentage,
  reset,
}: OutputAreaProps): JSX.Element {
  let tip = '',
    total = '';

  if (
    typeof bill === 'number' &&
    typeof people === 'number' &&
    typeof percentage === 'number'
  ) {
    if (bill > 0 && people > 0 && percentage > 0) {
      tip = ((bill / people) * (percentage / 100)).toFixed(2).toString();
      total = ((bill / people || 0) + Number(tip)).toFixed(2).toString();
    }
  } else {
    tip = '0.00';
    total = '0.00';
  }

  const resetButtonState = bill !== 0 || people !== 0 || percentage !== 0;

  return (
    <OutputWrapper>
      <div>
        <Output title="Tip Amount" amount={tip} />
        <Output title="Total" amount={total} />
      </div>
      <ResetButton active={resetButtonState} reset={reset} />
    </OutputWrapper>
  );
}
