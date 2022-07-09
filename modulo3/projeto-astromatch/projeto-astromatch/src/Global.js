import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: "Roboto", sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    background: linear-gradient(to top, #273c75, #192a56);
  }
`;
