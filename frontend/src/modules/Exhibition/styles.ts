import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container principal */
export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Cria 2 colunas de tamanho igual */
  grid-template-rows: repeat(2, auto); /* Cria 2 linhas ajustáveis */
  gap: 2rem; /* Espaço entre os itens */
  justify-content: center;
  align-items: stretch;

  margin: 4rem auto;
  padding: 2rem;
  text-align: justify;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Em telas menores, fica 1 coluna */
    grid-template-rows: auto;
    max-width: 90%;
    padding: 1.5rem;
  }
`;


/* Título da Exposição */
export const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
`;

/* Introdução */
export const Introduction = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${colors.darkGray};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

interface ImageContainerProps {
  bgImage: string;
}

/* Seção de cada região */
export const Section = styled.div<ImageContainerProps>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: clamp(1rem, 2vw, 2rem);
  margin-bottom: 3rem;
  background: ${colors.lightGray};
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 4px;

  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  min-height: 300px;
  transition: min-height 0.7s ease-in-out;

  &:hover {
    min-height: 450px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

/* Container de Imagem */
export const ImageContainer = styled.div`
  flex: 1;
  max-width: clamp(250px, 30vw, 300px);
  height: clamp(180px, 25vw, 200px);
  overflow: hidden;
  border-radius: 4px;
`;

/* Imagem */
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

/* Texto da Seção */
export const TextContent = styled.div`
  justify-content: flex-end;
  width: clamp(50%, 60%, 70%);
  background: rgba(255, 255, 255, 0.7);
  height: fit-content;
  backdrop-filter: blur(5px);
  padding: clamp(1rem, 1.5vw, 1.5rem);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  color: #333;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.7s ease-in-out, visibility 0s linear;

  ${Section}:hover & {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0s linear 0.5s;
  }

  ${Section}:not(:hover) & {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear, opacity 0.5s ease-in-out 0.1s;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

/* Nome da Região */
export const Region = styled.h3`
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: bold;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

/* Título da Seção */
export const SectionTitle = styled.h4`
  font-size: clamp(1.1rem, 1.8vw, 1.2rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${colors.black};
`;

/* Conteúdo */
export const Content = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: ${colors.darkGray};
  line-height: 1.6;
`;

/* Conclusão */
export const Conclusion = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${colors.primary};
  font-weight: bold;
  text-align: center;
  /* margin-top: 2rem; */
  padding: 1rem;
  border-top: 2px solid ${colors.secondary};
`;
