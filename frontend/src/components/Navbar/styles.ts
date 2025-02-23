// import styled from "styled-components";
// import { colors } from "../../styles/color";

// export const NavbarContainer = styled.nav<{ isOverImage: boolean }>`
//   background-color: ${(props) => (props.isOverImage ? "transparent" : colors.primary)};
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 10px;
//   padding-right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   box-shadow: ${(props) => (props.isOverImage ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.2)")};
//   transition: background-color 0.2s;
//   position: fixed;
//   top: 0;
//   z-index: 3000;
//   font-size: clamp(1rem, 2vw, 1.3rem);
//   margin: 0;

//   @media (max-width: 768px) {
//     padding-left: 0;
//     padding-right: 0;
//   }
// `;

// export const NavList = styled.ul<{ isOverImage: boolean }>`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   list-style: none;
//   padding: 1.2rem;
//   overflow-x: auto; /* Adiciona rolagem horizontal quando necessário */
//   white-space: nowrap; /* Impede quebra de linha */
//   min-width: fit-content; /* Garante que os itens sempre fiquem visíveis */
//   padding-left: 1rem; /* Espaçamento para evitar cortes */
//   padding-right: 1rem; /* Espaçamento para evitar cortes */
//   max-width: 100vw;

//   /* Adiciona barra de rolagem horizontal apenas quando necessário */
//   &::-webkit-scrollbar {
//     height: 6px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: ${colors.gray};
//     border-radius: 10px;
//   }

//   li {
//     transition: transform 0.2s;
//   }

//   li:hover {
//     transform: translateY(-4px);
//   }

//   a {
//     color: ${(props) => (props.isOverImage ? colors.white : colors.white)};
//     text-decoration: none;
//     font-size: clamp(0.9rem, 2vw, 1.2rem); /* Responsividade da fonte */
//     font-weight: bold;
//     padding: 12px 16px;
//     background: ${(props) => (props.isOverImage ? "#2f6334" : "rgba(255, 255, 255, 0.2)")};
//     border-radius: 16px;
//     transition: 0.3s;
//   }

//   a:hover {
//     background: ${colors.secondary};
//     color: ${colors.white};
//   }

//   /* Navbar responsiva */
//   @media (max-width: 1024px) {
//     display: flex;
//     overflow-x: auto; /* Rolagem horizontal ativada */
//     white-space: nowrap; /* Mantém tudo em uma linha */
//     width: 100%;
//     min-width: 100vw;
//   }
// `;

import styled from "styled-components";
import { colors } from "../../styles/color";

export const NavbarContainer = styled.nav<{ isOverImage: boolean }>`
  background-color: ${(props) => (props.isOverImage ? "transparent" : colors.primary)};
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: ${(props) => (props.isOverImage ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.2)")};
  transition: background-color 0.2s;
  position: fixed;
  top: 0;
  z-index: 3000;
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin: 0;
  overflow-x: auto; /* Ativa o scroll horizontal */
  white-space: nowrap; /* Garante que os itens fiquem sempre na mesma linha */
`;

export const NavList = styled.ul<{ isOverImage: boolean }>`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 1rem;
  margin-bottom: 0;
  overflow-x: auto; /* Ativa a rolagem horizontal */
  scroll-behavior: smooth; /* Scroll suave */
  white-space: nowrap; /* Mantém tudo em uma linha */
  min-width: fit-content;
  width: 100%;

  li {
    transition: transform 0.2s;
  }

  li:hover {
    transform: translateY(-4px);
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    font-weight: bold;
    padding: 12px 16px;
    background: ${(props) => (props.isOverImage ? "#2f6334" : "rgba(255, 255, 255, 0.2)")};
    border-radius: 16px;
    transition: 0.3s;
  }

  a:hover {
    background: ${colors.secondary};
    color: ${colors.white};
  }
`;

