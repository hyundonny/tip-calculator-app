import styled from "styled-components";
import { BasicButton, ButtonClicked, ButtonNotClicked } from "../utils/utils";

const StyledButton = styled(BasicButton)`
  ${(props) => (props.clicked ? ButtonClicked : ButtonNotClicked)}
`;

const PercentageButton = ({ value, percentage, onPercentageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPercentageChange(e);
  };

  return (
    <StyledButton
      value={value}
      onClick={handleClick}
      percentage={percentage}
      clicked={value === percentage}
    >
      {`${value}%`}
    </StyledButton>
  );
};

export default PercentageButton;
