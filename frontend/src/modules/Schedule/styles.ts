import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container principal */
export const Container = styled.section`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  text-align: left;
`;

/* Título principal "PROGRAMAÇÃO" */
export const MainTitle = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${colors.black};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

/* Nome da cidade (ex: MANAUS) */
export const CityTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${colors.secondary};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ScheduleWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
  white-space: nowrap; /* Evita quebra de linha */
`;


/* Container dos eventos */
export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column; /* Deixe os dias organizados horizontalmente */
  gap: 2rem;
  white-space: nowrap;
`;

/* Seção de um dia */
export const DaySection = styled.div`
  min-width: 300px; /* Define um tamanho mínimo para cada seção */
  border-left: 5px solid ${colors.primary};
  padding-left: 1rem;
  white-space: normal;
`;


/* Título do dia */
export const DayTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${colors.darkGray};
  }
`;

/* Item de evento */
export const EventItem = styled.div`
  margin-bottom: 1rem;
`;

/* Hora do evento */
export const EventTime = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

/* Título do evento */
export const EventTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.black};
`;

/* Descrição do evento */
export const EventDescription = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
  margin-top: 0.3rem;
`;

/* Lista de convidados */
export const SpeakerList = styled.ul`
  list-style: none;
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 1rem;
  color: ${colors.darkGray};

  li {
    margin-bottom: 0.3rem;
  }
`;

/* Destaque para informações adicionais */
export const EventHighlight = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.secondary};
  margin-top: 0.3rem;
`;

export const EventLocation = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
