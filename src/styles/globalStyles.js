import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // primary
    --strong-cyan: hsl(172, 67%, 45%);

    //neutral
    --very-dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan1: hsl(186, 14%, 43%);
    --dark-grayish-cyan2: hsl(184, 14%, 56%);
    --light-grayish-cyan1: hsl(185, 41%, 84%);
    --light-grayish-cyan2: hsl(189, 41%, 97%);
    --white: hsl(0, 0%, 100%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  html {
    height: 100vh;
    width: 100vw;
    background-color: var(--light-grayish-cyan1);
  }

  body {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
