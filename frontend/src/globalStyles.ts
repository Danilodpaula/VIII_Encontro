// src/globalStyles.ts
import { createGlobalStyle } from "styled-components";
// import bgImage from "./assets/cartaz_viii_encontro.jpg"; 
// coloque seu cartaz_viii_encontro.jpg na pasta src/assets ou /public

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    color: #333;
    
    background-size: cover;
  }

  /* Scroll suave para âncoras */
  html {
    scroll-behavior: smooth;
  }
`;
