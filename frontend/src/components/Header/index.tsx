import { useEffect } from "react";
import { motion } from "framer-motion";
import * as S from "./styles";
import cartaz1 from "../../assets/cartaz_viii_encontro.jpg";
import cartaz2 from "../../assets/leito_rio_seco.jpeg";
// import cartaz3 from "../../assets/cartaz3.jpg";

const images = [cartaz1, cartaz2, cartaz1, cartaz2]; // Repete para criar efeito contínuo

const Header = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.HeaderContainer>
      <S.SlidingImagesContainer>
        <motion.div
          id="header-image"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          style={{ display: "flex", width: "200%" }}
        >
          {images.map((img, index) => (
            <S.SlidingImage key={index} src={img} alt={`Slide ${index + 1}`} />
          ))}
        </motion.div>
      </S.SlidingImagesContainer>

      <S.Overlay>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <S.HeaderContent>
          <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{fontFamily: 'Inter'}}
            >
              8° Encontro de Perspectivas
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              Experienciar a Cidadania numa <span>'Terra em Transe'</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              Junte-se a nós para debater os desafios da cidadania na sociedade contemporânea. 
              </motion.p>

              <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              Um evento que reúne especialistas, acadêmicos e entusiastas para discutir perspectivas inovadoras.
              </motion.p>
            
          </S.HeaderContent>
        </motion.div>
      </S.Overlay>
    </S.HeaderContainer>
  );
};

export default Header;
