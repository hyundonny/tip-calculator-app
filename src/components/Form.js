import { useState } from "react";
import styled from "styled-components";

import FormSection from "./FormSection";
import Label from "./Label";
import { Percentages, Button } from "../styles/Percentages";

const StyledForm = styled.form`
  & > * + * {
    margin-top: 1.5rem;
  }

  @media (min-width: 900px) {
    max-width: 750px;
    border-radius: 2rem;
  } ;
`;

const Form = ({
  bill,
  people,
  percentage,
  onBillChange,
  onPeopleChange,
  setPercentage,
  onPercentageChange,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPercentage(e.target.value);
  };
  return (
    <StyledForm>
      <FormSection>
        <Label htmlFor="bill" type="bill" value={bill} />
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
        <Label htmlFor="percentage" type="percentage" value={percentage} />
        <Percentages>
          <Button value="5" onClick={handleClick}>
            5%
          </Button>
          <Button value="10" onClick={handleClick}>
            10%
          </Button>
          <Button value="15" onClick={handleClick}>
            15%
          </Button>
          <Button value="25" onClick={handleClick}>
            25%
          </Button>
          <Button value="50" onClick={handleClick}>
            50%
          </Button>
          <input
            type="text"
            id="percentage"
            value={percentage}
            placeholder="Custom"
            onChange={onPercentageChange}
          />
        </Percentages>
      </FormSection>
      <FormSection>
        <Label htmlFor="people" type="people" value={people} />
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
