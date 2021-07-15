import styled from "styled-components";

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormSection = ({ children }) => {
  return <StyledFormSection>{children}</StyledFormSection>;
};

export default FormSection;
