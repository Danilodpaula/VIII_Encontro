import { PartnersContainer, SectionTitle, LogosGrid, LogoItem } from "./styles";

// Exemplo: 4 ícones de "Realização"
// ===========================================================================
// Imports dos arquivos SVG
// ===========================================================================
import Group6 from "../../assets/apoio/Group 6.svg";
import GroupApoio from "../../assets/apoio/Group.svg";
import Image7 from "../../assets/apoio/image 7.svg";
import Image8 from "../../assets/apoio/image 8.svg";
import LogoOriginalFundoClaro from "../../assets/apoio/logo-original-fundo-claro 1 (1) 1.svg";
import Rectangle1 from "../../assets/apoio/Rectangle-1.svg";
import Rectangle2 from "../../assets/apoio/Rectangle-2.svg";
import Rectangle3 from "../../assets/apoio/Rectangle-3.svg";
import Rectangle from "../../assets/apoio/Rectangle.svg";

// Realização
import ClipPathGroup1 from "../../assets/realização/Clip path group (1).svg";
import ClipPathGroup from "../../assets/realização/Clip path group.svg";
import Group5 from "../../assets/realização/Group 5.svg";
import Image5 from "../../assets/realização/image 5 (1) 1.svg";

export default function Partners() {
  // ===========================================================================
  // Arrays de logos com seus respectivos links
  // ===========================================================================

  // Logos de Realização (ex.: 4 itens)
  const realizacaoLogos = [
    {
      src: ClipPathGroup1,
      link: "https://exemplo.com/realizacao1",
    },
    {
      src: ClipPathGroup,
      link: "https://exemplo.com/realizacao2",
    },
    {
      src: Group5,
      link: "https://exemplo.com/realizacao3",
    },
    {
      src: Image5,
      link: "https://exemplo.com/realizacao4",
    },
  ];

  // Logos de Apoio (ex.: 9 itens)
  const apoioLogos = [
    {
      src: Group6,
      link: "https://exemplo.com/apoio1",
    },
    {
      src: GroupApoio,
      link: "https://exemplo.com/apoio2",
    },
    {
      src: Image7,
      link: "https://exemplo.com/apoio3",
    },
    {
      src: Image8,
      link: "https://exemplo.com/apoio4",
    },
    {
      src: LogoOriginalFundoClaro,
      link: "https://exemplo.com/apoio5",
    },
    {
      src: Rectangle1,
      link: "https://exemplo.com/apoio6",
    },
    {
      src: Rectangle2,
      link: "https://exemplo.com/apoio7",
    },
    {
      src: Rectangle3,
      link: "https://exemplo.com/apoio8",
    },
    {
      src: Rectangle,
      link: "https://exemplo.com/apoio9",
    },
  ];

  // Abre em nova aba
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PartnersContainer>
      {/* Seção de Realização */}
      <SectionTitle>Realização</SectionTitle>
      <LogosGrid columns={4}>
        {realizacaoLogos.map((item, index) => (
          <LogoItem key={index} onClick={() => handleRedirect(item.link)}>
            <img src={item.src} alt={`Realização ${index + 1}`} />
          </LogoItem>
        ))}
      </LogosGrid>

      {/* Seção de Apoio */}
      <SectionTitle>Apoio</SectionTitle>
      <LogosGrid columns={9}>
        {apoioLogos.map((item, index) => (
          <LogoItem key={index} onClick={() => handleRedirect(item.link)}>
            <img src={item.src} alt={`Apoio ${index + 1}`} />
          </LogoItem>
        ))}
      </LogosGrid>
    </PartnersContainer>
  );
}
