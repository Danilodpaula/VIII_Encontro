import styled from "styled-components";
import { colors } from "../../styles/color";

export const HomeContainer = styled.div`
  margin: 20px;
  border-radius: 5px;
  padding-bottom: 80px;
  min-height: 100vh; /* Garante que o conteúdo pode expandir sem travar */
`;

export const Section = styled.section`
  background: ${colors.lightGreen};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 24px;
  color: #000;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: 0.5s;
    background: ${colors.secondary}; /* Muda cor no hover */
    color: ${colors.white};
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
`;

export const SectionContent = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
`;

/* Seção expandida para exibir o componente filho */
export const SectionExpanded = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;
