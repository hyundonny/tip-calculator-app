import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Results from "./Results";

const StyledCalculator = styled.div`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const Calculator = () => {
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const onBillChange = (e) => {
    setBill(e.target.value);
  };

  const onPeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const onPercentageChange = (e) => {
    setPercentage(e.target.value);
  };

  return (
    <StyledCalculator>
      <Form
        bill={bill}
        people={people}
        percentage={percentage}
        onBillChange={onBillChange}
        onPeopleChange={onPeopleChange}
        setPercentage={setPercentage}
        onPercentageChange={onPercentageChange}
      />
      <Results bill={bill} people={people} percentage={percentage} />
    </StyledCalculator>
  );
};

export default Calculator;