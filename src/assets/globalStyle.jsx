import { createGlobalStyle } from "styled-components";
import Background from "../assets/images/background-large.jpg";

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
        background-image: url(${Background});
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
`;
