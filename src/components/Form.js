import { useState } from "react";
import styled from "styled-components";

import FormSection from "./FormSection";

const StyledForm = styled.form`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1.5rem;

  @media (min-width: 900px) {
    max-width: 750px;
    border-radius: 2rem;
  } ;
`;

const Form = () => {
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const onBillChange = (e) => {
    setBill(e.target.value);
  };

  const onPeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const onPercentageClick = (e) => {
    setPercentage(e.target.value);
  };

  return (
    <StyledForm>
      <FormSection>
        <label htmlFor="bill" className="label">
          Bill
        </label>
        <input
          type="text"
          id="bill"
          className="input"
          value={bill}
          placeholder="0"
          onChange={onBillChange}
        />
      </FormSection>
      <FormSection>
        <label htmlFor="percentage" className="label">
          Select Tip %
        </label>
      </FormSection>
      <FormSection>
        <label htmlFor="people" className="label">
          Number of People
        </label>
        <input
          type="text"
          id="people"
          className="input"
          value={people}
          placeholder="0"
          onChange={onPeopleChange}
        />
      </FormSection>
    </StyledForm>
  );
};

export default Form;
