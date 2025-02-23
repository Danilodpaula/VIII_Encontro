// import * as S from "./styles";

// function Navbar() {
//   const handleNavClick = (
//     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//     id: string
//   ) => {
//     event.preventDefault(); // Impede o comportamento padrão de salto abrupto

//     const section = document.getElementById(id);
//     if (section) {
//       const offset = 100; // Define a margem antes da seção
//       const sectionPosition =
//         section.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({ top: sectionPosition, behavior: "smooth" });
//     }
//   };

//   return (
//     <S.NavbarContainer>
//       <S.NavList>
//         <li>
//           <a
//             href="#apresentacao"
//             onClick={(e) => handleNavClick(e, "apresentacao")}
//           >
//             Apresentação
//           </a>
//         </li>
//         <li>
//           <a href="#locais" onClick={(e) => handleNavClick(e, "locais")}>
//             Locais
//           </a>
//         </li>
//         <li>
//           <a href="#submissao" onClick={(e) => handleNavClick(e, "submissao")}>
//             Submissão
//           </a>
//         </li>
//         <li>
//           <a href="#gts" onClick={(e) => handleNavClick(e, "gts")}>
//             Grupos de Trabalho
//           </a>
//         </li>
//         <li>
//           <a href="#galeria" onClick={(e) => handleNavClick(e, "galeria")}>
//             Galeria
//           </a>
//         </li>
//         <li>
//           <a href="#exposicao" onClick={(e) => handleNavClick(e, "exposicao")}>
//             Exposição
//           </a>
//         </li>
//         <li>
//           <a href="#contatos" onClick={(e) => handleNavClick(e, "contatos")}>
//             Contatos
//           </a>
//         </li>
//       </S.NavList>
//     </S.NavbarContainer>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import * as S from "./styles";

function Navbar() {
  const [isOverImage, setIsOverImage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta a altura da imagem para saber quando a Navbar passou dela
      const headerHeight = document.getElementById("header-image")?.offsetHeight || 0;
      setIsOverImage(window.scrollY < headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <S.NavbarContainer isOverImage={isOverImage}>
      <S.NavList isOverImage={isOverImage}>
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
