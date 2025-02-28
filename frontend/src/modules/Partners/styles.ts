import styled from "styled-components";
import { colors } from "../../styles/color";

// Container geral, fundo preto
export const PartnersContainer = styled.section`
  background-color: #000; /* Fundo preto */
  padding: 2rem;
  color: #fff; 
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 1rem;
  text-align: center;
  color: ${colors.white};
`;

/**
 * Grid de logos, recebe o número de colunas como prop para telas grandes.
 * A responsividade ajusta automaticamente as colunas em breakpoints menores.
 */
export const LogosGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  /* Tablet médio (até 1024px) */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* Tablet pequeno (até 768px) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Mobile (até 480px) */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`;

// Cada item do grid (logo)
export const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 120px;
    max-height: 80px;
    transition: filter 0.3s ease, transform 0.3s ease;
    
    /* Diminui um pouco a imagem em mobile */
    @media (max-width: 480px) {
      max-width: 90px;
      max-height: 60px;
    }
  }

  /* Efeito de hover */
  &:hover img {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;
