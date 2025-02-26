import styled from "styled-components";
import { colors } from "../../styles/color";

/* 
  Container principal da seção de GTs, 
  mantendo a identidade visual do site.
*/
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto; /* Centraliza na tela */
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Espaço extra no topo para não colidir com Navbar fixa */
  margin-top: 2rem; 
`;

/* Título geral da seção */
export const Title = styled.h2`
  text-align: center;
  color: ${colors.primary};
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: bold;
  margin-bottom: 2rem;
`;

/* 
  Container de cada item do "acordeão"
*/
export const AccordionItem = styled.div`
  border: 1.5px solid ${colors.primary};
  border-radius: 4px;
  overflow: hidden; /* importante para caso queira animação */
  background-color: #fefefe;

  /* Sombra suave ao passar o mouse */
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }
`;

/* 
  Cabeçalho do acordeão (onde usuário clica),
  contendo título do GT, coordenação e ícone.
*/
export const AccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem 1.2rem;
  background-color: ${colors.primary};
  color: ${colors.white};

  /* Escurece ligeiramente ao passar o mouse, mostrando clicável */
  &:hover {
    opacity: 0.9;
  }
`;

export const TitleAndCoordination = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

/* Título do GT */
export const GTTitle = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  flex: 1; /* toma o espaço para "empurrar" o ícone pra direita */
`;

export const Coordination = styled.span`
  font-size: clamp(0.9rem, 2vw, 1rem);
  opacity: 0.9;

  white-space: normal; // deixa o texto quebrar
  flex-shrink: 1; // ou remover completamente, se não houver problema
`;


/* Ícone (chevron) para indicar aberto/fechado */
export const Icon = styled.span`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 
  Conteúdo que aparece quando o item do acordeão está "aberto"
*/
export const AccordionContent = styled.div`
  padding: 1rem 1.2rem;
  background-color: ${colors.white};
  color: #333;

  p {
    margin: 0.5rem 0;
    line-height: 1.6;
    font-size: clamp(0.95rem, 2vw, 1.05rem);
  }
`;
