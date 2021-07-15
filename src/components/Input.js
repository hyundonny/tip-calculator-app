import styled from "styled-components";
import { box } from "../utils/utils";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const icons = {
  bill: dollar,
  percentage: "",
  people: person,
};

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  ${box}

  width: 100%;
  text-align: right;
  color: var(--very-dark-cyan);
  border: 2px solid transparent;
  background-color: var(--light-grayish-cyan2);

  &:focus {
    outline: none;
    border: 2px solid var(--strong-cyan);
  }

  &::placeholder {
    color: var(--dark-grayish-cyan2);
  }
`;

const IconWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 1.25rem;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.img`
  &[src=""] {
    display: none;
  }
`;

const Input = ({ id, value, onChange, placeholder }) => {
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <IconWrapper>
        <StyledIcon src={icons[id]} alt="input icon" />
      </IconWrapper>
    </InputWrapper>
  );
};

export default Input;
