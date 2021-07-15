import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  position: relative;
  margin-bottom: 0.35rem;
  color: var(--dark-grayish-cyan1);

  &::after {
    right: 0;
    position: absolute;
    content: "Can't be zero";
    color: var(--orangish-red);
    display: ${(props) => props.value === "0" || "none"};
  }
`;

const labels = {
  bill: "Bill",
  percentage: "Select Tip %",
  people: "Number of People",
};

const Label = ({ type, value }) => {
  return <StyledLabel value={value}>{labels[type]}</StyledLabel>;
};

export default Label;
