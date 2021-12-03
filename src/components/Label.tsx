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
    display: ${(props: { value: number | '' }) => props.value !== 0 && 'none'};
  }
`;

interface LabelProps {
  htmlFor: string;
  value: number | '';
  children: string;
}

export default function Label({
  htmlFor,
  value,
  children,
}: LabelProps): JSX.Element {
  return (
    <StyledLabel htmlFor={htmlFor} value={value}>
      {children}
    </StyledLabel>
  );
}
