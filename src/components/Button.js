import styled from "styled-components";
import { box, inactiveButton, activeButton } from "../styles/utils";

const StyledButton = styled.button`
  ${box}

  border: none;
  display: block;
  text-align: center;

  ${(props) => (props.clicked ? activeButton : inactiveButton)}

  &:hover,
  &:active {
    ${activeButton}
  }
`;

const buttonContents = {
  5: "5%",
  10: "10%",
  15: "15%",
  25: "25%",
  50: "50%",
};

const Button = ({ value, percentage, onPercentageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked!");
    onPercentageChange(e);
  };

  return (
    <StyledButton
      type="button"
      value={value}
      onClick={handleClick}
      percentage={percentage}
      clicked={value === percentage}
    >
      {buttonContents[value]}
    </StyledButton>
  );
};

export default Button;
