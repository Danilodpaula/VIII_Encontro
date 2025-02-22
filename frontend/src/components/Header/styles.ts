import styled from "styled-components";
import { colors } from "../../styles/color";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: fit-content; /* Ocupa quase toda a tela */
  object-fit: fill; /* Garante que a imagem preencha o espaço sem distorcer */
  z-index: 2000;
`;

export const HeaderContent = styled.div`
  text-align: center;
  padding: 20px;
  background: ${colors.secondary}; /* Adiciona um fundo para separar do resto da página */
  color: ${colors.white};
  width: 100%;

  h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: bold;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    font-weight: 500;
    margin-top: 10px;
  }
`;
