import { useState } from 'react';
import styled from 'styled-components';

import InputArea from './InputArea';
import OutputArea from './OutputArea';

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

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [percentage, setPercentage] = useState('');

  const onBillChange = (e) => {
    const bill = e.target.value >= 0 ? e.target.value : '';
    setBill(bill);
  };

  const onPeopleChange = (e) => {
    const people = e.target.value >= 0 ? e.target.value : '';
    setPeople(people);
  };

  const onPercentageChange = (e) => {
    const percentage = e.target.value >= 0 ? e.target.value : '';
    setPercentage(percentage);
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
        onBillChange={onBillChange}
        onPeopleChange={onPeopleChange}
        onPercentageChange={onPercentageChange}
      />
      <OutputArea
        bill={bill}
        people={people}
        percentage={percentage}
        reset={reset}
      />
    </StyledCalculator>
  );
};

export default Calculator;
