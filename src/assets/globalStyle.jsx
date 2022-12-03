import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-family: "Pangolin", cursive;
    }
    
    #root{
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        background: ${({ theme }) => theme.colors.blackGradient};
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
`;
