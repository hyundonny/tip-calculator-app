import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  position: relative;
  margin-bottom: 0.35rem;
  color: var(--dark-grayish-cyan1);
  font-size: 0.9rem;
  margin-left: 0.25rem;

  &::after {
    right: 0;
    position: absolute;
    content: "Can't be zero";
    color: var(--orangish-red);
    display: ${(props) => props.value !== '0' && 'none'};
  }
`;

const Label = ({ value, children }) => {
  return <StyledLabel value={value}>{children}</StyledLabel>;
};

export default Label;
