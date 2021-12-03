import { useState } from 'react';
import styled from 'styled-components';

import InputArea from 'components/InputArea';
import OutputArea from 'components/OutputArea';

const StyledCalculator = styled.div`
  padding: 2.15rem 1.85rem;
  background-color: var(--white);
  max-width: 768px;
  display: grid;
  gap: 1rem;

  & > * {
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 2.25rem 1.5rem;
    border-radius: 1.25rem;
  }
`;

function isNumeric(str: string) {
  return /^\d+$/.test(str);
}

function Calculator(): JSX.Element {
  const [bill, setBill] = useState<number | ''>('');
  const [people, setPeople] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<number | ''>('');

  function handleInput(fn: React.Dispatch<React.SetStateAction<number | ''>>) {
    return (str: string) => {
      if (isNumeric(str)) {
        fn(parseInt(str));
      } else if (str === '') {
        fn(str);
      }
    };
  }

  const INPUT_HANDLERS = {
    handleBillChange: handleInput(setBill),
    handlePeopleChange: handleInput(setPeople),
    handlePercentageChange: handleInput(setPercentage),
  };

  const reset = () => {
    setBill('');
    setPeople('');
    setPercentage('');
  };

  return (
    <StyledCalculator>
      <InputArea
        bill={bill}
        people={people}
        percentage={percentage}
        handlers={INPUT_HANDLERS}
      />
      <OutputArea
        bill={bill}
        people={people}
        percentage={percentage}
        reset={reset}
      />
    </StyledCalculator>
  );
}

export default Calculator;
