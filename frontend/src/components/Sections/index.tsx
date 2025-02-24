import { useState } from "react";
import * as S from "./styles";
import { sectionsData } from "./section-data";
import { AnimatedSection } from "../AnimatedSections";

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

    // Faz scroll suave até o elemento clicado
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

          {/** 
           * Usamos um wrapper (S.AnimatedSection) que mede a altura do conteúdo
           * e anima a transição de forma suave e sem travas.
           */}
          <AnimatedSection isOpen=
          // {activeSections.has(id)}
          {true}
          >
            <Component />
          </AnimatedSection>
        </S.Section>
      ))}
    </S.HomeContainer>
  );
}

export default Sections;
