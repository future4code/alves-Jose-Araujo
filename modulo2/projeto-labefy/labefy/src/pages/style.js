import styled from "styled-components";

export const ContainerHome = styled.section`
    width: 50%;
    height: 100vh;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    justify-content: center;
    align-content: center;

    margin: 0 auto;
    gap: 20px;

    span {
        width: 120px;
        height: 120px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        background-color: #cdf27e;

        margin-bottom: 20px;
        transition: transform 0.2s;
    }

    .PlaylistBox {
        display: flex;
        justify-content: space-evenly;

        flex-direction: column;
        align-items: center;

        border-radius: 5px;
        padding: 50px;

        background: #242424;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        transition: opacity 0.2s;

        :hover {
            opacity: 0.5;
            cursor: pointer;
        }

        h4, p {
            color: white;
        }        
    }
`