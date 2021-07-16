import styled from "styled-components";

import Label from "./Label";
import Input from "./Input";
import PercentageButton from "./PercentageButton";

const StyledForm = styled.form`
  & > * {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 900px) {
    width: calc(50% - 1rem);
    border-radius: 2rem;

    & > * {
      margin-bottom: 2rem;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const PercentageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;

  & > * {
    width: calc(50% - 0.65rem);
  }

  @media (min-width: 900px) {
    & > * {
      width: 30%;
    }
  }
`;

const InputArea = ({
  bill,
  people,
  percentage,
  onBillChange,
  onPeopleChange,
  onPercentageChange,
}) => {
  const buttons = ["5", "10", "15", "25", "50"].map((num) => {
    return (
      <PercentageButton
        key={num}
        value={num}
        percentage={percentage}
        onPercentageChange={onPercentageChange}
      />
    );
  });

  return (
    <StyledForm>
      <Section>
        <Label htmlFor="bill" type="bill" value={bill} />
        <Input id="bill" value={bill} placeholder="0" onChange={onBillChange} />
      </Section>
      <Section>
        <Label htmlFor="percentage" type="percentage" value={percentage} />
        <PercentageSection>
          {buttons}
          <Input
            id="percentage"
            value={percentage}
            placeholder="Custom"
            onChange={onPercentageChange}
          />
        </PercentageSection>
      </Section>
      <Section>
        <Label htmlFor="people" type="people" value={people} />
        <Input
          id="people"
          value={people}
          placeholder="0"
          onChange={onPeopleChange}
        />
      </Section>
    </StyledForm>
  );
};

export default InputArea;
