import styled from "styled-components";

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    border: none;
    font-weight: 700;
    text-align: right;
    font-size: 1.25rem;
    padding: 0.75rem 1.25rem;
    color: var(--very-dark-cyan);
    background-color: var(--light-grayish-cyan2);
  }

  input::placeholder {
    color: var(--dark-grayish-cyan2);
  }
`;

const FormSection = ({ children }) => {
  return <StyledFormSection>{children}</StyledFormSection>;
};

export default FormSection;
