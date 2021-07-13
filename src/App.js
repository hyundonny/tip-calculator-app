import styled from "styled-components";

import GlobalStyles from "./styles/globalStyles";
import logo from "./images/logo.svg";

import Calculator from "./components/Calculator";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 900px) {
    max-width: 750px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  img {
    display: block;
  }

  @media (min-width: 900px) {
    max-width: 750px;
    padding-top: 7.5rem;
    padding-bottom: 3.5rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Calculator />
      </Container>
    </>
  );
}

export default App;
