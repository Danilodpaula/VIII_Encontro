import styled from "styled-components";
import { colors } from "../../styles/color";

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: fit-content;
`;

export const SectionTitle = styled.div`
  /* DESKTOP ORIGINAL */
  width: 100%;
  font-size: 2.8rem;
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: 2rem;
  gap: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* SOMENTE AJUSTE NO MOBILE */
  @media (max-width: 768px) {
    font-size: 2rem; /* Diminui um pouco */
    margin-bottom: 1.5rem;
  }
`;

export const SlideContainer = styled.div`
  /* DESKTOP ORIGINAL */
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  padding: 1rem;

  /* No desktop, não vamos mexer na altura fixa, 
     mas preferimos  para evitar overflow, se possível */
  height: fit-content;
  /* Se quiser manter sem fixar a altura: 
     remover "height" e deixar se ajustar automaticamente */

  /* RESPONSIVO - MOBILE */
  @media (max-width: 768px) {
    /* Em telas menores, também podemos manter um display flex
       mas iremos empilhar verticalmente via SlideContent.  */
    padding: 1rem 0;
  }
`;

/* 
   Esse container envolve a imagem + card + arrow 
   É nele que vamos organizar o layout 
*/
export const SlideContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  /* DESKTOP: Mantemos o layout side-by-side
     MOBILE: Empilhamos tudo em coluna  */
  @media (max-width: 1500px) {
    flex-direction: column;
    gap: 1.5rem;
    /* Para garantir que não tenha rolagem horizontal */
    width: 100%;
  }
`;

export const PlaceImage = styled.img`
  /* DESKTOP ORIGINAL */
  width: 63%;
  max-height: 600px;
  object-fit: cover;

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%; /* ocupa toda a largura disponível */
    max-width: 400px; /* se quiser limitar um pouco a largura da imagem */
    max-height: none; /* remove limite de altura */
    margin-bottom: 0; /* sem margem extra, pois usamos gap */
  }
`;

export const LocationCard = styled.div`
  /* DESKTOP ORIGINAL */
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  height: 450px;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;

  /* MOBILE */
  @media (max-width: 768px) {
    margin-left: 0; /* remove a margem lateral no mobile */
    width: 100%; /* ocupa largura total */
    height: auto; /* deixa altura livre */
    align-items: center; /* centraliza texto se desejado */
  }
`;

export const PlaceContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%; /* para ocupar todo espaço no card */
    height: auto;
    align-items: center;
  }
`;

export const PlaceTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  color: #1e4726;
  font-size: 40px;
  font-weight: 700;

  /* MOBILE */
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PlaceSubtitle = styled.div`
  color: #444;
  font-size: 30px;
  font-weight: 400;

  /* MOBILE */
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PlaceHighligth = styled.div`
  color: #444;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PlaceStatus = styled.div`
  color: #444;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MapButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  /* DESKTOP ORIGINAL */
  width: 100%;
  padding: 24px 64px;
  background: ${colors.secondary};
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${colors.primary};
  }

  svg {
    font-size: 1rem;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    /* Mantendo o botão menor no mobile */
    width: auto;
    padding: 16px 32px;
  }
`;

export const Controls = styled.button`
  /* DESKTOP ORIGINAL */
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${colors.darkGray};

  &:hover {
    color: ${colors.primary};
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 0;
    /* Reduz um pouco o ícone no mobile */
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
