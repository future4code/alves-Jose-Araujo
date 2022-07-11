import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary-color: #1B1B1B;
    --bg-secondary-color: #212121;
    --btn-primary-color: #8c7ae6;
    --btn-secondary-color: #9c88ff;
    --txt-primary-color: #ECECEC;
  }

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  color: var(--txt-primary-color);
  background: linear-gradient(to top, var(--bg-primary-color), var(--bg-secondary-color));
}

button {
  cursor: pointer;
  color: var(--txt-primary-color);
  border: none;
}
`;
