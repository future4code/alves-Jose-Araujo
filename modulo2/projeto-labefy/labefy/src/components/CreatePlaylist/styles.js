import styled from "styled-components";


export const ContainerCreatePlaylist = styled.section`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .BoxCreatePlaylist {
        h1 {
            color: white;
            margin-bottom: 10px;
        }

        width: 35%;
        height: 40%;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background-color: #242424;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        input {
            width: 250px;
            padding: 10px;

            border: none;
            border-radius: 4px;

            margin-bottom: 10px;
            font-family: "Poppins", sans-serif;
        }

        button {
            border: none;
            padding: 10px;

            font-family: "Poppins", sans-serif;
            font-weight: 500;
            border-radius: 4px;
        }
    }
`;