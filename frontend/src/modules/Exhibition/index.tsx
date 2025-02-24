import React from "react";
import * as S from "./styles";
import { EXHIBITION_CONTENT } from "./exhibition-data";

const Exhibition: React.FC = () => {
  return (
    <S.Container>
      <S.Title>{EXHIBITION_CONTENT.title}</S.Title>
      <S.Introduction>{EXHIBITION_CONTENT.introduction}</S.Introduction>

      {EXHIBITION_CONTENT.sections.map((section, index) => (
        <S.Section key={index} bgImage={section.image}>
          {/* Se a imagem existir, exibe ela */}
          {/* {section.image && (
            <S.ImageContainer >
              <S.Image src={section.image} alt={section.heading} />
            </S.ImageContainer>
          )} */}

          <S.TextContent>
            <S.Region>{section.region}</S.Region>
            <S.SectionTitle>{section.heading}</S.SectionTitle>
            <S.Content>{section.content}</S.Content>
          </S.TextContent>
        </S.Section>
      ))}

      <S.Conclusion>{EXHIBITION_CONTENT.conclusion}</S.Conclusion>
    </S.Container>
  );
};

export default Exhibition;
