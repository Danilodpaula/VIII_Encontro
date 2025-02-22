import { useState, useEffect } from "react";
import * as S from "./styles";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault(); // Impede o comportamento padrão de salto abrupto

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <S.NavbarContainer isSticky={isSticky}>
      <S.NavList>
        <li><a href="#apresentacao" onClick={(e) => handleNavClick(e, "apresentacao")}>Apresentação</a></li>
        <li><a href="#locais" onClick={(e) => handleNavClick(e, "locais")}>Locais</a></li>
        <li><a href="#submissao" onClick={(e) => handleNavClick(e, "submissao")}>Submissão</a></li>
        <li><a href="#gts" onClick={(e) => handleNavClick(e, "gts")}>Grupos de Trabalho</a></li>
        <li><a href="#galeria" onClick={(e) => handleNavClick(e, "galeria")}>Galeria</a></li>
        <li><a href="#exposicao" onClick={(e) => handleNavClick(e, "exposicao")}>Exposição</a></li>
        <li><a href="#contatos" onClick={(e) => handleNavClick(e, "contatos")}>Contatos</a></li>
      </S.NavList>
    </S.NavbarContainer>
  );
}

export default Navbar;
