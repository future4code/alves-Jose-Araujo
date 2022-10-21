import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100vh;

    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;

    background-color: #242424;
  }

  button {
    cursor: pointer;
  }
`;
