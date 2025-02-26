import styled from "styled-components";
import { colors } from "../../styles/color";

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    ${colors.primary} 0%, 
    ${colors.secondary} 40%, 
    ${colors.darkGray} 100%
  );
  backdrop-filter: blur(15px);
  overflow-x: hidden;

  /* Para adicionar um efeito de animação no fundo */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      ${colors.primary} 0%, 
      ${colors.secondary} 40%, 
      ${colors.darkGray} 100%
    );
    opacity: 0.8;
    z-index: -1;
    animation: gradientMove 10s infinite alternate ease-in-out;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
