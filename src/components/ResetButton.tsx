import styled from 'styled-components';
import { BasicButton, ButtonClicked, ButtonDisabled } from 'styles/buttons';

const Reset = styled(BasicButton)`
  text-transform: uppercase;
  ${(props) => (props.disabled ? ButtonDisabled : ButtonClicked)}
`;

interface ResetButtonProps {
  active: boolean;
  reset: () => void;
}

export default function ResetButton({
  active,
  reset,
}: ResetButtonProps): JSX.Element {
  return (
    <Reset onClick={reset} disabled={!active}>
      Reset
    </Reset>
  );
}
