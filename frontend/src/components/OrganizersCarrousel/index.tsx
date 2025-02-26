import { motion } from "framer-motion";
import { organizersData } from "./organizer-data";
import * as S from "./styles";

const OrganizersCarrousel = () => {
  const handleOpenLink = (event: React.MouseEvent, url: string) => {
    event.preventDefault(); // Impede qualquer comportamento padrão
    event.stopPropagation(); // Evita interferências de outros handlers

    window.open(url, "_blank", "noopener,noreferrer"); // Abre o link em nova aba
  };

  return (
    <S.CarrouselContainer>
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ display: "flex", width: "100%" }} // Garante loop contínuo
      >
        {[...organizersData, ...organizersData].map((organizer, index) => (
          <S.LogoContainer key={index}>
            <motion.div
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={(event) => handleOpenLink(event, organizer.link)}
            >
              <S.Logo src={organizer.logo} alt={organizer.name} />
            </motion.div>
          </S.LogoContainer>
        ))}
      </motion.div>
    </S.CarrouselContainer>
  );
};

export default OrganizersCarrousel;
