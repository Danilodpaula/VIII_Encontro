import styled from "styled-components";
import { colors } from "../../styles/color";
import graxura_media from "../../assets/engrave_large_1.svg"

// Breakpoint para mobile
const MOBILE_BREAK = "927px";

export const WrapperAll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: ${MOBILE_BREAK}) {
    margin-top: 5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 68%;

  @media (max-width: ${MOBILE_BREAK}) {
    max-width: 90%;
  }
`;

export const TitleHeader = styled.span`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: white;
  margin-bottom: -1.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: bold;
  color: white;
  max-width: 95%;
  justify-self: center;
  align-self: center;
  margin-bottom: 1.5rem;
`;

export const Introduction = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: white;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center;
`;

/** Container das Seções */
export const Container = styled.section`
  width: 90%;
  display: flex; /* Acordeão horizontal no desktop */
  gap: 1rem;
  overflow: hidden; /* Evita scroll horizontal */

  @media (max-width: ${MOBILE_BREAK}) {
    display: block; /* Empilhado no mobile */
    overflow: visible;
  }
`;

/** Cada Seção (imagem de fundo + efeito de “acordeão”) */
interface ISectionProps {
  bgImage: string;
  isHovered: boolean;
}
export const Section = styled.div<ISectionProps>`
  position: relative;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  height: 400px;

  border-radius: 12px;

  /* Acordeão horizontal no desktop */
  flex: ${(props) => (props.isHovered ? 4 : 1)};
  transition: flex 0.6s ease;

  /* No mobile, sem acordeão horizontal */
  @media (max-width: ${MOBILE_BREAK}) {
    width: 100%;
    margin-bottom: 3rem;
    flex: none;
    height: 300px;
  }
`;

/**
 * Contêiner do texto (Região, Título, Ícone + Conteúdo)
 * - No desktop, “fecha” com max-height menor (mas o cabeçalho ainda visível).
 * - No mobile, abre com o ícone (toggle).
 */
interface ITextContentProps {
  isOpenMobile: boolean; // mobile toggle
  isHovered: boolean; // desktop hover
}

export const TextContent = styled.div<ITextContentProps>`
  /* Fundo semitransparente */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 12px;

  width: 100%;
  color: #333;

  /* Sombra suave */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* Para a animação de "abrir/fechar" via max-height */
  overflow: hidden;
  transition: max-height 0.6s ease; /* Suavidade */

  /* 
   * Queremos que mesmo "fechado", 
   * região + título apareçam. Precisamos de 
   * no mínimo a altura do HeaderRow.
   * Ajuste esse valor se o header for maior. 
   */
  /* Fechado: exibe só ~4.5rem (header). Aberto: 9999px */
  @media (max-width: ${MOBILE_BREAK}) {
    max-height: ${({ isOpenMobile }) => (isOpenMobile ? "2000px" : "5rem")};
  }

  /* No desktop, fechada ou aberta dependendo do hover */
  @media (min-width: ${MOBILE_BREAK}) {
    max-height: ${({ isHovered }) => (isHovered ? "1500px" : "6rem")};
  }
`;

/** Cabeçalho (Região + Título + Ícone) */
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Padding para o topo/lados. 
     Vamos evitar padding-bottom para que o "4.5rem" 
     feche exatamente no final do Header.
  */
  padding: 1rem 1rem 1rem 1rem;
`;

/** Ícone para expandir/recolher no mobile */
interface IIconWrapperProps {
  isOpen: boolean;
}

export const IconWrapper = styled.div<IIconWrapperProps>`
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.8s ease;

  /* Rotaciona o ícone se a seção estiver aberta */
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};

  @media (min-width: ${MOBILE_BREAK}) {
    display: none;
  }
`;

/** Região */
export const Region = styled.h3`
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: bold;
  color: ${colors.secondary};
`;

/** Título */
export const SectionTitle = styled.h4`
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  font-weight: 600;
  color: ${colors.black};
  text-overflow: ellipsis;

  margin: 0;
`;

/** Conteúdo do texto */
export const Content = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: ${colors.darkGray};
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  padding: 1rem;
`;

/** Conclusão */
export const Conclusion = styled.p`
  background-color: white;
  width: 100%;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${colors.primary};
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-top: 2px solid ${colors.secondary};
`;

// Imagem de divisão
export const DividerImage = styled.img`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(1.2);
  flex-shrink: 0;
  /* opacity: 0.6; */
  content: url(${graxura_media});
  object-fit: cover;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;