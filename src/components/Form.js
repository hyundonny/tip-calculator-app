import styled from "styled-components";

import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import FormSection from "./FormSection";
import { Percentages } from "../styles/Percentages";

const StyledForm = styled.form`
  & > * + * {
    margin-top: 1.5rem;
  }

  @media (min-width: 900px) {
    max-width: 750px;
    border-radius: 2rem;
  }
`;

const Form = ({
  bill,
  people,
  percentage,
  onBillChange,
  onPeopleChange,
  onPercentageChange,
}) => {
  const buttons = [5, 10, 15, 25, 50].map((num) => {
    return (
      <Button
        key={num}
        value={num}
        percentage={percentage}
        onPercentageChange={onPercentageChange}
      />
    );
  });

  return (
    <StyledForm>
      <FormSection>
        <Label htmlFor="bill" type="bill" value={bill} />
        <Input id="bill" value={bill} placeholder="0" onChange={onBillChange} />
      </FormSection>
      <FormSection>
        <Label htmlFor="percentage" type="percentage" value={percentage} />
        <Percentages>
          {buttons}
          <Input
            id="percentage"
            value={percentage}
            placeholder="Custom"
            onChange={onPercentageChange}
          />
        </Percentages>
      </FormSection>
      <FormSection>
        <Label htmlFor="people" type="people" value={people} />
        <Input
          id="people"
          value={people}
          placeholder="0"
          onChange={onPeopleChange}
        />
      </FormSection>
    </StyledForm>
  );
};

export default Form;
