import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  SectionTitle,
  SlideContainer,
  SlideContent,
  PlaceImage,
  LocationCard,
  MapButton,
  Controls,
  PlaceTitle,
  PlaceSubtitle,
  PlaceContent,
  PlaceHighligth,
  PlaceStatus,
} from "./styles";

import { FiMapPin, FiExternalLink } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { locations } from "./places-data";

export function Places() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % locations.length);

  return (
    <Container>
      <SectionTitle>
        <FiMapPin />
        <span>Locais do Evento</span>
      </SectionTitle>

      <SlideContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={locations[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* 
              Envolvemos a imagem + card + control em um container (SlideContent)
              para conseguirmos manipular melhor no mobile 
            */}
            <SlideContent>
              <PlaceImage
                src={locations[index].image}
                alt={locations[index].city}
              />

              <LocationCard>
                <PlaceContent>
                  <PlaceTitle>
                    {locations[index].icon}{" "}
                    <strong>{locations[index].city}</strong>
                  </PlaceTitle>

                  <PlaceSubtitle>
                    <strong>📍 Local:</strong> {locations[index].location}
                  </PlaceSubtitle>

                  <PlaceHighligth>
                    {locations[index].description}
                  </PlaceHighligth>

                  {locations[index].stream && (
                    <PlaceStatus>{locations[index].stream}</PlaceStatus>
                  )}

                  <MapButton
                    href={locations[index].mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMapPin /> Ver no mapa <FiExternalLink />
                  </MapButton>
                </PlaceContent>
              </LocationCard>

              <Controls onClick={nextSlide}>
                {/* Mantemos o ícone grandão no desktop, ajustado no styled para mobile */}
                <IoChevronForward size={89} />
              </Controls>
            </SlideContent>
          </motion.div>
        </AnimatePresence>
      </SlideContainer>
    </Container>
  );
}
