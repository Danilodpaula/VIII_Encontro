import styled from "styled-components";

export const HomeContainer = styled.div`
  /* margin: 20px; */
  border-radius: 5px;
  width: 90%;
  /* min-height: 90vh; */
`;

/* Seção individual com efeito de vidro */
export const Section = styled.section<{ $isAlwaysOpen?: boolean }>`
  background: rgba(255, 255, 255, 0.2); /* Fundo semitransparente */
  backdrop-filter: blur(10px); /* Efeito de vidro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  /* Se for uma seção SEMPRE aberta, desativa cursor e hover */
  ${({ $isAlwaysOpen }) =>
    $isAlwaysOpen
      ? `
    cursor: default;
  `
      : `
    cursor: pointer;
    &:hover {
      transform: translateY(-5px); 
    }
  `}
`;

/* Título da seção */
export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
`;

/* Conteúdo fixo (texto introdutório) */
export const SectionContent = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
`;

/* Contêiner que expande/contrai suavemente */
export const AnimatedContainer = styled.div<{ $isOpen: boolean; $height: number | "auto" }>`
  overflow: hidden;
  transition: height 0.4s ease, opacity 0.4s ease;
  height: ${(props) => (props.$height === "auto" ? "auto" : `${props.$height}px`)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;
