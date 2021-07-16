import { useState } from "react";
import styled from "styled-components";

import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import { BasicWrapper } from "../utils/utils";

const StyledCalculator = styled(BasicWrapper)`
  width: 330px;
  margin: 0 auto;
  background-color: var(--white);

  & > * + * {
    margin-top: 1.25rem;
  }

  @media (min-width: 750px) {
    width: 725px;
    flex-direction: row;
    justify-content: space-between;

    & > * + * {
      margin-top: 0;
    }
  }
`;

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState("");

  const onBillChange = (e) => {
    const bill = e.target.value >= 0 ? e.target.value : "";
    setBill(bill);
  };

  const onPeopleChange = (e) => {
    const people = e.target.value >= 0 ? e.target.value : "";
    setPeople(people);
  };

  const onPercentageChange = (e) => {
    const percentage = e.target.value >= 0 ? e.target.value : "";
    setPercentage(percentage);
  };

  const reset = () => {
    setBill("");
    setPeople("");
    setPercentage("");
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
