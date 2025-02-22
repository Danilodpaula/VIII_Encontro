import { useState } from "react";
import * as S from "./styles";
import { sectionsData } from "./section-data";

function Sections() {
  const [activeSections, setActiveSections] = useState<Set<string>>(new Set());

  const handleToggleSection = (sectionId: string) => {
    setActiveSections((prev) => {
      const newActiveSections = new Set(prev);
      if (newActiveSections.has(sectionId)) {
        newActiveSections.delete(sectionId);
      } else {
        newActiveSections.add(sectionId);
      }
      return newActiveSections;
    });

    // Seção clicada se torna visível apenas se não estiver na tela
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <S.HomeContainer>
      {sectionsData.map(({ id, title, content, component: Component }) => (
        <S.Section key={id} id={id} onClick={() => handleToggleSection(id)}>
          <S.SectionTitle>{title}</S.SectionTitle>
          <S.SectionContent>{content}</S.SectionContent>

          {/* Permite múltiplas seções abertas */}
          {activeSections.has(id) && <S.SectionExpanded><Component /></S.SectionExpanded>}
        </S.Section>
      ))}
    </S.HomeContainer>
  );
}

export default Sections;
