import styled from "styled-components";
import { colors } from "../../styles/color";

export const FooterContainer = styled.footer`
display: flex;
justify-content: center;
  text-align: center;
  align-items: center;
  padding: 15px;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: static;
  width: 100%;
  bottom: 0;
  z-index: 1000; /* Mantém acima de outros elementos */

  /* Evita sobreposição do conteúdo */
  height: 60px; /* Define uma altura fixa */
`;
