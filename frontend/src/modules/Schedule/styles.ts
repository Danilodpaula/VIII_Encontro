import styled from "styled-components";
import { colors } from "../../styles/color";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${colors.lightGreen}; /* Fundo suave */
  color: ${colors.darkGray}; /* Texto principal */
  border-radius: 12px;
  max-width: 100%;
  margin: auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: ${colors.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ScheduleWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Ativa o scroll horizontal */
  padding-bottom: 1rem; /* Evita cortes no final */
`;

export const ScheduleContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: nowrap; /* Mantém os cards na mesma linha */
  min-width: fit-content; /* Garante que os itens fiquem dentro do scroll */
  padding-left: 1rem; /* Evita corte do primeiro card */
  padding-right: 2rem; /* Evita corte do último card */

  @media (max-width: 768px) {
    flex-direction: row; /* Mantém os cards lado a lado */
  }
`;

export const DayCard = styled.div`
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  min-width: 320px; /* Garante que os cards tenham tamanho adequado */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    color: ${colors.primary};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: ${colors.darkGray};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    font-size: 1.2rem;
    color: ${colors.secondary};
  }

  strong {
    color: ${colors.primary};
  }
`;
