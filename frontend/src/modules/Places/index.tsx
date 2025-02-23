import {
  Container,
  SectionTitle,
  LocationList,
  LocationCard,
  MapButton,
} from "./styles";
import { FiMapPin, FiExternalLink } from "react-icons/fi"; // Ícones do Feather
import { FaUniversity, FaLandmark } from "react-icons/fa"; // Ícones do FontAwesome

export function Places() {
  return (
    <Container>
      <SectionTitle>
        <FiMapPin /> Locais do Evento
      </SectionTitle>

      <LocationList>
        {/* Manaus */}
        <LocationCard>
          <h3>
            <FaUniversity /> <strong>Manaus</strong>
          </h3>
          <p>
            <strong>📍 Local:</strong> Universidade X, Auditório A
          </p>
          <p>
            <strong>Abertura oficial</strong> com <strong>mesas temáticas e
            minicursos</strong>.
          </p>
          <p>
            🎥 <em>Transmissão online disponível</em>.
          </p>
          <MapButton
            href="https://www.google.com/maps?q=Universidade+X+Manaus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin /> Ver no mapa <FiExternalLink />
          </MapButton>
        </LocationCard>

        {/* Tefé */}
        <LocationCard>
          <h3>
            <FaLandmark /> <strong>Tefé</strong>
          </h3>
          <p>
            <strong>📍 Local:</strong> Centro de Convenções Y
          </p>
          <p>
            Atividades <strong>acadêmicas e científicas</strong>,
            <br />
            <br />
            Apresentação de <strong>trabalhos</strong> e <strong>debates interativos</strong>.
          </p>
          
          <MapButton
            href="https://www.google.com/maps?q=Centro+de+Convenções+Y+Tefé"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin /> Ver no mapa <FiExternalLink />
          </MapButton>
        </LocationCard>

        {/* Parintins */}
        <LocationCard>
          <h3>
            <FaLandmark /> <strong>Parintins</strong>
          </h3>
          <p>
            <strong>📍 Local:</strong> Instituto Cultural Z
          </p>
          <p>
            <strong>Grupos de trabalho</strong> e <strong>apresentações culturais</strong>
            <br />
            <br />
            no encerramento do evento.
          </p>
          <MapButton
            href="https://www.google.com/maps?q=Instituto+Cultural+Z+Parintins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin /> Ver no mapa <FiExternalLink />
          </MapButton>
        </LocationCard>
      </LocationList>
    </Container>
  );
}
