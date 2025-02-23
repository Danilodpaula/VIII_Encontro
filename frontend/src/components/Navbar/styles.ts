import styled, { css } from "styled-components";
import { colors } from "../../styles/color";

/* Container da Navbar */
export const NavbarContainer = styled.nav<{
  isOverImage: boolean;
  isMobile: boolean;
}>`
  background-color: ${(props) =>
    props.isOverImage ? "transparent" : colors.primary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: ${(props) =>
    props.isOverImage ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.2)"};
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0;
  z-index: 3000;
`;

/* Botão do Menu */
export const MenuButton = styled.button`
  z-index: 4000; /* Fica acima do NavList para ser sempre acessível */
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.1);
  }

  /* Some em telas grandes quando não estiver sobre a imagem */
  @media (min-width: 1025px) {
    display: none;
  }
`;

/* Lista de Links de Navegação */
export const NavList = styled.ul<{
  isOpen: boolean;
  isMobile: boolean;
  isOverImage: boolean;
}>`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  /* 
    Navbar normal em telas grandes quando fora da imagem:
    exibe os itens em linha, sem overlay 
  */
  ${({ isMobile, isOverImage }) =>
    !isMobile &&
    !isOverImage &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: static;
      background: none;
      width: auto;
      gap: 1.5rem;
      box-shadow: none;
    `}

  /*
    Menu Sanduíche para telas pequenas ou quando "isOverImage" é true:
    Fazemos o menu aparecer de forma fixa/deslizante na horizontal.
  */
  @media (max-width: 1024px), (max-width: 1600px) and (${({ isOverImage }) =>
    isOverImage && "true"}) {
    /* Para ocupar a altura total da tela (opcional) */
    position: fixed;
    top: 0;
    /* Decide se quer que entre da direita ou da esquerda */
    left: 0;
    right: 0;

    /* Altura e Largura */
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 6rem;
    padding-right: 5rem;
    /* Se quiser que ocupe mais espaço vertical, pode aumentar a height */

    /* Transição horizontal: 
       Se estiver fechado, translateX(100%) = fica "fora" da tela (à direita)
       Se quiser que saia pela esquerda, use -100% e left: 0
    */
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;

    /* 
       Coloca fundo para ficar visível. 
       "overflow-x: auto" para permitir rolagem horizontal caso haja muitos itens.
    */
    background: ${colors.primary};
    overflow-x: auto;
    overflow-y: hidden; /* Para não ter rolagem vertical, se quiser */

    /* 
       Quando está fechado, podemos desabilitar clique.
       isOpen => pointer-events: auto
    */
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

    /* Ajusta exibição dos itens na horizontal */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    /* 
      Opcional: se quiser reservar um espaço fixo 
      para o botão de fechar, adicione padding
    */
    /* padding: 0 3rem 0 1rem;  */
  }

  /* Animação de hover */
  li {
    transition: transform 0.2s;
  }

  li:hover {
    transform: translateY(-4px);
  }

  a {
    z-index: 5000;
    color: ${colors.white};
    text-decoration: none;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    font-weight: bold;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    transition: 0.3s;
    display: block;
    text-align: center;
    white-space: nowrap; /* Evita quebrar linha no item */

    @media (max-width: 1024px) {
      /* Aqui você decide se quer que cada link ocupe mais ou menos espaço */
      width: auto;
    }
  }

  a:hover {
    background: ${colors.secondary};
    color: ${colors.white};
  }
`;
