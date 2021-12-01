import styled from 'styled-components';

import Label from './Label';
import Input from './Input';
import PercentageButton from './PercentageButton';
import { ReactComponent as Dollar } from '../images/icon-dollar.svg';
import { ReactComponent as Person } from '../images/icon-person.svg';

const Section = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    & + & {
      margin-top: 2rem;
    }
  }
`;

const Percentages = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IconWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 1.25rem;
  position: absolute;

  display: grid;
  place-items: center;
`;

const InputArea = ({
  bill,
  people,
  percentage,
  onBillChange,
  onPeopleChange,
  onPercentageChange,
}) => {
  const buttons = ['5', '10', '15', '25', '50'].map((num) => {
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
    <form>
      <Section>
        <Label htmlFor='bill' value={bill}>
          Bill
        </Label>
        <Input id='bill' value={bill} placeholder='0' onChange={onBillChange}>
          <IconWrapper>
            <Dollar />
          </IconWrapper>
        </Input>
      </Section>

      <Section>
        <Label htmlFor='percentage' value={percentage}>
          Select Tip %
        </Label>
        <Percentages>
          {buttons}
          <Input
            id='percentage'
            value={percentage}
            placeholder='Custom'
            onChange={onPercentageChange}
          />
        </Percentages>
      </Section>

      <Section>
        <Label htmlFor='people' value={people}>
          Number of People
        </Label>
        <Input
          id='people'
          value={people}
          placeholder='0'
          onChange={onPeopleChange}
        >
          <IconWrapper>
            <Person />
          </IconWrapper>
        </Input>
      </Section>
    </form>
  );
};

export default InputArea;
