import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;

export const MainContainer = styled.main`
	width: 100%;
	height: 100vh;
`;
