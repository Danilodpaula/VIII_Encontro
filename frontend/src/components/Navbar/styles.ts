import styled from "styled-components";
import { colors } from "../../styles/color";

export const NavbarContainer = styled.nav<{ isSticky: boolean }>`
  background-color: ${colors.primary};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  /* Se isSticky for true, fixa a navbar no topo */
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  top: ${(props) => (props.isSticky ? "0" : "auto")};
  z-index: 1000;
  font-size: clamp(1rem, 2vw, 1.3rem); /* Responsivo e ajustável */
`;

export const NavList = styled.ul`
  width: 70%;
  display: flex;
  align-self: center;
  justify-content: center;
  /* justify-content: space-between; */
  gap: 1.5rem;
  list-style: none;
  display: flex;

  margin: 0;
  padding: 0;
  padding: 1rem;

  li {
    transition: transform 0.2s;
  }

  li:hover {
    transform: scale(1.1);
  }

  a {
    color: ${colors.white};
    text-decoration: none;

    font-size: clamp(
      0.9rem,
      2vw,
      1.2rem
    ); /* Mantém legibilidade e adaptação fluida */

    font-weight: bold;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: background 0.3s ease-in-out, transform 0.2s;
  }

  a:hover {
    background: ${colors.secondary};
    color: ${colors.white};
  }

  /* Responsividade: se a tela for menor que 768px, transforma em menu vertical */
  @media (max-width: 768px) {
    flex-wrap: nowrap; /* Impede a quebra de linha */
    overflow-x: auto; /* Adiciona rolagem horizontal se necessário */
    white-space: nowrap; /* Garante que os itens fiquem sempre na mesma linha */
  }
`;
