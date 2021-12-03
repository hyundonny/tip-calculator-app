import styled from 'styled-components';
import { BasicButton, ButtonClicked, ButtonNotClicked } from 'styles/buttons';

const StyledButton = styled(BasicButton)<{ clicked: boolean }>`
  ${(props) => (props.clicked ? ButtonClicked : ButtonNotClicked)}
`;

interface PercentageButtonProps {
  value: number | '';
  percentage: number | '';
  handleChange: (str: string) => void;
}

export default function PercentageButton({
  value,
  percentage,
  handleChange,
}: PercentageButtonProps): JSX.Element {
  return (
    <StyledButton
      value={value}
      type="button"
      onClick={(e) => handleChange(e.currentTarget.value)}
      clicked={value === percentage}
    >
      {`${value}%`}
    </StyledButton>
  );
}
