import React, { useState } from "react";
import * as S from "./styles";
import { GT_DATA } from "./gt-data";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatedSection } from "../../components/AnimatedSections";

const Workgroups: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleToggle = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenIndexes((prevIndexes) => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  return (
    <S.Container>
      <S.Title>Grupos de Trabalho</S.Title>

      {GT_DATA.map((gt, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <S.AccordionItem key={gt.title}>
            <S.AccordionHeader onClick={(e) => handleToggle(index, e)}>
              <S.GTTitle>{gt.title}</S.GTTitle>
              <S.Coordination>{gt.coordination}</S.Coordination>
              <S.Icon>
                {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </S.Icon>
            </S.AccordionHeader>

            <AnimatedSection isOpen={isOpen}>
              <S.AccordionContent>
                {/* Divide a descrição em parágrafos e os exibe com espaçamento */}
                {gt.description.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </S.AccordionContent>
            </AnimatedSection>
          </S.AccordionItem>
        );
      })}
    </S.Container>
  );
};

export default Workgroups;
