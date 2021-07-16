import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --strong-cyan: hsl(172, 67%, 45%);

    --very-dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan1: hsl(186, 14%, 43%);
    --dark-grayish-cyan2: hsl(184, 14%, 56%);
    --light-grayish-cyan1: hsl(185, 41%, 84%);
    --light-grayish-cyan2: hsl(189, 41%, 97%);
    
    --white: hsl(0, 0%, 100%);
    --orangish-red: hsl(16, 100%, 50%);;
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
    width: 100vw;
    height: 100vh;
    background-color: var(--light-grayish-cyan1);
  }

  body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
