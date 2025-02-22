import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Karla, sans-serif;
  }

  body {
    font-family: Karla, sans-serif;
    color: #333;
    background-size: cover;
    overflow-y: scroll; /* Garante que o scroll sempre apareça */
  }

  /* Scroll suave para âncoras */
  html {
    scroll-behavior: smooth;
  }

  /* Customização do Scroll para navegadores Webkit (Chrome, Edge, Safari) */
  ::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0; /* Cor do fundo da barra */
  }

  ::-webkit-scrollbar-thumb {
    background: #1E4726; /* Cor da "alça" do scroll */
    border-radius: 24px;
    transition: background 0.3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2F6334; /* Cor quando passar o mouse */
  }

  /* Para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #1E4726 #f0f0f0;
  }

    /* Melhorando acessibilidade e fluidez */
    @media (max-width: 1024px) {
    html {
      font-size: 15px; /* Reduz ligeiramente em tablets */
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px; /* Ajuste para mobile */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px; /* Melhora leitura em celulares menores */
    }
  }
`;
