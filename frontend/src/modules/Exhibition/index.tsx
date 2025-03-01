import React, { useState } from "react";
import * as S from "./styles";
import { EXHIBITION_CONTENT } from "./exhibition-data";
import { IoIosArrowUp } from "react-icons/io";

const Exhibition: React.FC = () => {
  // Index da seção em hover (desktop)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Seções abertas/fechadas no mobile
  const [openSections, setOpenSections] = useState<boolean[]>(
    EXHIBITION_CONTENT.sections.map(() => false)
  );

  const handleToggle = (index: number) => {
    setOpenSections((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <S.WrapperAll id="exposicao">
      <S.TitleWrapper>
        <S.TitleHeader>TEMA GERAL</S.TitleHeader>
        <S.Title>{EXHIBITION_CONTENT.title}</S.Title>
        <S.Introduction>{EXHIBITION_CONTENT.introduction}</S.Introduction>
      </S.TitleWrapper>

      {/* Ao sair do container, "reseta" o hover */}
      <S.Container onMouseLeave={() => setHoveredIndex(null)}>
        {EXHIBITION_CONTENT.sections.map((section, index) => (
          <S.Section
            key={index}
            bgImage={section.image}
            // Se a seção está em hover no desktop
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {/* Bloco que contém Região, Título, Ícone, e Conteúdo */}
            <S.TextContent
              // Seção aberta no mobile?
              isOpenMobile={openSections[index]}
              // Seção está em hover no desktop?
              isHovered={hoveredIndex === index}
            >
              <S.HeaderRow>
                <div>
                  <S.Region>{section.region}</S.Region>
                  <S.SectionTitle>{section.heading}</S.SectionTitle>
                </div>
                {/* Ícone para mobile */}
                <S.IconWrapper
                  onClick={() => handleToggle(index)}
                  isOpen={openSections[index]}
                >
                  <IoIosArrowUp />
                </S.IconWrapper>
              </S.HeaderRow>

              <S.Content>{section.content}</S.Content>
            </S.TextContent>
          </S.Section>
        ))}
      </S.Container>

      {/* <S.Conclusion>{EXHIBITION_CONTENT.conclusion}</S.Conclusion> */}
    </S.WrapperAll>
  );
};

export default Exhibition;
