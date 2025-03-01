import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as S from "./styles";
import cartaz1 from "../../assets/headerBanner.png";
import { AiOutlineExport } from "react-icons/ai";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fecha o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Ajustes responsivos, se necessário
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Quando o estado do modal muda, bloqueia/desbloqueia scroll do body
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Bloqueia scroll
    } else {
      document.body.style.overflow = "auto"; // Restaura scroll
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const section = document.getElementById("work-submit");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100); // Pequeno delay para garantir que o modal está visível no DOM
    }
  }, [isModalOpen]);
  

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <S.HeaderContainer id="header-image">
      {/* Imagem de fundo */}
      <S.SlidingImagesContainer
        id="inicio"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
      >
        <S.SlidingImage src={cartaz1} />

        {/* pro caso de ser mobile */}

        <S.MobileHeaderContent>
          <h1>8° Encontro de Perspectivas</h1>

          <p style={{ marginBottom: "2rem" }}>
            Venha prestigiar o evento em três localidades:
          </p>

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              gap: "1rem",
            }}
          >
            <li>📍 Local: Manaus-AM</li>
            <li>📍 Local: Tefé-AM</li>
            <li>📍 Local: Parintins-AM</li>
          </ul>

          <p style={{ marginTop: "2rem" }}>
            Ou se preferir, participe conosco!
          </p>

          <S.MapButton
            style={{ marginTop: "2rem" }}
            onClick={(e) => {
              handleNavClick(e, "work-submit");
              handleOpenModal();
            }}
          >
            Submeter trabalho <AiOutlineExport size={24} />
          </S.MapButton>
        </S.MobileHeaderContent>
        {/* </motion.div> */}
      </S.SlidingImagesContainer>

      {/* Conteúdo sobreposto */}
      <S.Overlay>
        <motion.div style={{ display: "flex", justifyContent: "flex-end" }}>
          <S.HeaderContent>
            <motion.h1>8° Encontro de Perspectivas</motion.h1>

            <motion.p style={{ marginBottom: "2rem" }}>
              Venha prestigiar o evento em três localidades:
            </motion.p>

            <motion.ul
              style={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                justifyContent: "start",
                gap: "1rem",
              }}
            >
              <li>📍 Local: Manaus-AM</li>
              <li>📍 Local: Tefé-AM</li>
              <li>📍 Local: Parintins-AM</li>
            </motion.ul>

            <motion.p style={{ marginTop: "2rem" }}>
              Ou se preferir, participe conosco!
            </motion.p>

            <S.MapButton
              style={{ marginTop: "2rem" }}
              onClick={handleOpenModal}
            >
              Submeter trabalho <AiOutlineExport size={24} />
            </S.MapButton>
          </S.HeaderContent>
        </motion.div>
      </S.Overlay>

      {/* MODAL (renderiza somente se isModalOpen === true) */}
      {isModalOpen && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContent
            id="work-submit"
            onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar dentro
          >
            <S.ModalHeader>
              <h2>Escolha o tipo de trabalho</h2>
              <button onClick={handleCloseModal}>X</button>
            </S.ModalHeader>

            <S.ModalBody>
              {/* Links estilizados como o botão principal */}{" "}
              <S.ModalLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSelAlrrM7p4jHA8Ar7R6GtiGvWCwhvnHqgEyRhJUNu_XyfCzw/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Inscrição como COMUNICADOR <AiOutlineExport size={20} />{" "}
              </S.ModalLink>
              <S.ModalLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqQzcldhesvr6zIC3AaAeXUdfrpPTX0zCQf8l92A1BhRn6gA/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
              >
                Inscrição como OUVINTE <AiOutlineExport size={20} />
              </S.ModalLink>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
