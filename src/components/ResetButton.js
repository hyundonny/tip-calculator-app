import styled from "styled-components";
import { BasicButton, ButtonClicked, ButtonDisabled } from "../utils/utils";

const Reset = styled(BasicButton)`
  text-transform: uppercase;

  ${(props) => (props.disabled ? ButtonDisabled : ButtonClicked)}
`;

const ResetButton = ({ bill, people, percentage, reset }) => {
  return (
    <Reset onClick={reset} disabled={!(bill && people && percentage)}>
      Reset
    </Reset>
  );
};

export default ResetButton;
