import styled from "styled-components";
import { colors } from "../../styles/color";

export const Container = styled.div`
  padding: 2rem;
  
  color: ${colors.darkGray}; /* Texto principal */
  border-radius: 12px;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: ${colors.black};
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  text-align: left;

  h3 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    color: ${colors.primary};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: ${colors.darkGray};
    margin-bottom: 0.5rem;
  }
`;

/* Botão para abrir o mapa */
export const MapButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${colors.secondary};
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${colors.primary};
  }

  svg {
    font-size: 1rem;
  }
`;
