import { useState, useEffect } from "react";
import * as S from "./styles";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOverImage, setIsOverImage] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Monitora o scroll para saber se a navbar ainda está sobre a imagem
    const handleScroll = () => {
      const headerHeight = document.getElementById("header-image")?.offsetHeight || 0;
      setIsOverImage(window.scrollY < headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    setMenuOpen(false); // Fecha o menu ao clicar

    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <S.NavbarContainer isOverImage={isOverImage}>
      {/* Botão de Menu sempre aparece */}
      <S.MenuButton
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir/Fechar Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </S.MenuButton>

      <S.NavList isOpen={menuOpen} isOverImage={isOverImage}>
        <li>
          <a href="#apresentacao" onClick={(e) => handleNavClick(e, "apresentacao")}>
            Apresentação
          </a>
        </li>
        {/* <li>
          <a href="#locais" onClick={(e) => handleNavClick(e, "locais")}>
            Locais
          </a>
        </li> */}
        {/* <li>
          <a href="#submissao" onClick={(e) => handleNavClick(e, "submissao")}>
            Submissão
          </a>
        </li> */}
        <li>
          <a href="#gts" onClick={(e) => handleNavClick(e, "gts")}>
            Grupos de Trabalho
          </a>
        </li>
        {/* <li>
          <a href="#galeria" onClick={(e) => handleNavClick(e, "galeria")}>
            Galeria
          </a>
        </li>
        <li>
          <a href="#exposicao" onClick={(e) => handleNavClick(e, "exposicao")}>
            Exposição
          </a>
        </li> */}
        <li>
          <a href="#contatos" onClick={(e) => handleNavClick(e, "contatos")}>
            Contatos
          </a>
        </li>
      </S.NavList>
    </S.NavbarContainer>
  );
}

export default Navbar;
