import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container principal */
export const Container = styled.section`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: justify;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
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

/* Seção de cada região */
export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  background: ${colors.lightGray};
  padding: 1.5rem;
  border-radius: 8px;

  &:hover {
    transform: translateY(-4px);
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

/* Container de Imagem */
export const ImageContainer = styled.div`
  flex: 1;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

/* Imagem */
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

/* Texto da Seção */
export const TextContent = styled.div`
  flex: 2;
`;

/* Nome da Região */
export const Region = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

/* Título da Seção */
export const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${colors.black};
`;

/* Conteúdo */
export const Content = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
  line-height: 1.6;
`;

/* Conclusão */
export const Conclusion = styled.p`
  font-size: 1.1rem;
  color: ${colors.primary};
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 2px solid ${colors.secondary};
`;
