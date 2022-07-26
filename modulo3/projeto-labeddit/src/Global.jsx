import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: "IBM Plex Sans", sans-serif;

    width: 100%;
    height: 100vh;
  }
`;
