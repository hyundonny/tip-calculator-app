import { useState } from "react";
import styled from "styled-components";

import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import { BasicWrapper } from "../utils/utils";

const StyledCalculator = styled(BasicWrapper)`
  background-color: var(--white);

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState("");

  const onBillChange = (e) => {
    setBill(parseInt(e.target.value) || "");
  };

  const onPeopleChange = (e) => {
    setPeople(parseInt(e.target.value) || "");
  };

  const onPercentageChange = (e) => {
    setPercentage(parseInt(e.target.value) || "");
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
