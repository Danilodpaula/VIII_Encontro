import { useState } from "react";
import * as S from "./styles";
import { sectionsData } from "./section-data";
import { AnimatedSection } from "../AnimatedSections";

const alwaysOpenSections = new Set(["apresentacao", "locais"]); // 🔥 IDs das seções que sempre ficarão abertas

function Sections() {
  const [activeSections, setActiveSections] = useState<Set<string>>(
    new Set(alwaysOpenSections) // 🔥 Define as seções fixas como abertas por padrão
  );

  const handleToggleSection = (sectionId: string) => {
    // Se a seção está no alwaysOpenSections, não permitir alteração
    if (alwaysOpenSections.has(sectionId)) return;

    setActiveSections((prev) => {
      const newActiveSections = new Set(prev);
      if (newActiveSections.has(sectionId)) {
        newActiveSections.delete(sectionId);
      } else {
        newActiveSections.add(sectionId);
      }
      return newActiveSections;
    });

    // Faz scroll suave até o elemento clicado
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <S.HomeContainer>
      {sectionsData.map(({ id, title, content, component: Component }) => (
        <S.Section
          key={id}
          id={id}
          onClick={() => handleToggleSection(id)}
          $isAlwaysOpen={alwaysOpenSections.has(id)} 
        >
          <S.SectionTitle>{title}</S.SectionTitle>
          {content != "" && <S.SectionContent>{content}</S.SectionContent>}

          <AnimatedSection isOpen={activeSections.has(id)}>
            <Component />
          </AnimatedSection>
        </S.Section>
      ))}
    </S.HomeContainer>
  );
}

export default Sections;
