import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  padding: 0.35rem 1rem;
  width: 100%;

  text-align: right;
  color: var(--very-dark-cyan);
  border: ${(props) =>
    props.value === '0'
      ? '2px solid var(--orangish-red);'
      : '2px solid transparent'};
  background-color: var(--light-grayish-cyan2);
  position: relative;

  &:focus {
    outline: none;
    border: ${(props) =>
      props.value === '0'
        ? '2px solid var(--orangish-red);'
        : '2px solid var(--strong-cyan)'};
  }

  &::placeholder {
    color: var(--dark-grayish-cyan2);
  }
`;

const Input = ({ value, onChange, placeholder, children }) => {
  return (
    <InputWrapper>
      <StyledInput
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children && children}
    </InputWrapper>
  );
};

export default Input;
