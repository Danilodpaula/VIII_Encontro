import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container da Navbar */
export const NavbarContainer = styled.nav<{ isOverImage: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.isOverImage ? "transparent" : colors.primary};
  box-shadow: ${(props) =>
    props.isOverImage ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.2)"};

  transition: background-color 0.3s ease-in-out;
`;

/* Botão do Menu (fica sempre visível) */
export const MenuButton = styled.button`
  z-index: 4000;
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
`;

/* Lista de Links de Navegação (sempre estilo 'overlay') */
export const NavList = styled.ul<{ isOpen: boolean; isOverImage: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;

  /* Layout fixo cobrindo toda a largura (entra/saindo da direita da tela) */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3000;

  /* Espaçamento interno para não ficar colado nas laterais/topo */
  padding: 2rem;

  /* Fundo */
  background-color: ${colors.primary};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  /* Transição de entrada/saída do menu */
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  /* Controla se clique é permitido ou não ao fechar */
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  /* Alinhamento dos itens em linha (ou em coluna, se preferir) */
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 6rem;
  padding-right: 5rem;

  overflow-x: auto;
  overflow-y: hidden;

  justify-content: center;

  @media (max-width: 1234px) {
    justify-content: inherit;
  }

  li {
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    transition: 0.3s;
    display: block;
    text-align: center;
    white-space: nowrap; /* Evita quebrar linha no link */

    &:hover {
      background: ${colors.secondary};
      color: ${colors.white};
    }
  }
`;
