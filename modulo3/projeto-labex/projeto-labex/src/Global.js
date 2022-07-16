import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --bg-primary-color: #1B1B1B;
  --bg-secondary-color: #212121;
  --btn-primary-color: #8c7ae6;
  --btn-secondary-color: #9c88ff;
  --txt-primary-color: #F3F4F5;
}

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  color: var(--txt-primary-color);
  background-color: var(--bg-primary-color);
}

button {
  color: var(--txt-primary-color);
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
}
`;
