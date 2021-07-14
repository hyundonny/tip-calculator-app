import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  position: relative;
  margin-bottom: 0.75rem;
  color: var(--dark-grayish-cyan1);

  &::after {
    content: "Can't be zero";
    position: absolute;
    right: 0;
    color: orange;
  }
`;

const labels = {
  bill: "Bill",
  percentage: "Select Tip %",
  people: "Number of People",
};

const Label = ({ type }) => {
  return <StyledLabel>{labels[type]}</StyledLabel>;
};

export default Label;
