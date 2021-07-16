import styled from "styled-components";
import logo from "../images/logo.svg";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;

  img {
    display: block;
  }

  @media (min-width: 900px) {
    max-width: 750px;
    padding-top: 8rem;
    padding-bottom: 5rem;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
