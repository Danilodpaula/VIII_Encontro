import { Container, SectionTitle, ScheduleWrapper, ScheduleContainer, DayCard, EventItem } from "./styles";
import { FiCalendar, FiClock } from "react-icons/fi"; // Ícones para cada item
import { FaRegCalendarAlt } from "react-icons/fa"; // Ícones para cada item


export function Schedule() {
  return (
    <Container>
      <SectionTitle>
        <FiCalendar /> Programação do Evento
      </SectionTitle>

      <ScheduleWrapper>
        <ScheduleContainer>
          {/* Dia 1 - 10 de Junho */}
          <DayCard >
            <h3><FaRegCalendarAlt /> 10 de Junho</h3>
            <EventItem>
              <FiClock /> <strong>08:30 - 12:00</strong> | Recepção e Credenciamento
            </EventItem>
            <EventItem>
              <FiClock /> <strong>09:00</strong> | Solenidade de Abertura
            </EventItem>
            <EventItem>
              <FiClock /> <strong>09:30</strong> | Mesa 1
            </EventItem>
          </DayCard>

          {/* Dia 2 - 11 de Junho */}
          <DayCard >
            <h3><FaRegCalendarAlt /> 11 de Junho</h3>
            <EventItem>
              <FiClock /> <strong>08:30 - 12:00</strong> | Grupos de Trabalho
            </EventItem>
            <EventItem>
              <FiClock /> <strong>13:30 - 16:30</strong> | "Portas Abertas: O Futuro na UEA"
            </EventItem>
          </DayCard>

          {/* Dia 3 - 12 de Junho */}
          <DayCard >
            <h3><FaRegCalendarAlt /> 12 de Junho</h3>
            <EventItem>
              <FiClock /> <strong>09:00</strong> | Fórum do Observatório da Cidadania
            </EventItem>
            <EventItem>
              <FiClock /> <strong>14:00</strong> | Cine Debate: "Terra em Transe"
            </EventItem>
          </DayCard>

          {/* Dia 4 - 13 de Junho */}
          <DayCard >
            <h3><FaRegCalendarAlt /> 13 de Junho</h3>
            <EventItem>
              <FiClock /> <strong>08:30 - 12:00</strong> | Atividade de Campo (Museu da Amazônia)
            </EventItem>
            <EventItem>
              <FiClock /> <strong>16:00</strong> | Conferência de Encerramento
            </EventItem>
          </DayCard>
        </ScheduleContainer>
      </ScheduleWrapper>
    </Container>
  );
}
