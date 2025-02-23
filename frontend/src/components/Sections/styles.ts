import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container geral */
export const HomeContainer = styled.div`
  margin: 20px;
  border-radius: 5px;
  padding-bottom: 80px;
  min-height: 90vh;
`;

/* Seção individual */
export const Section = styled.section`
  background: ${colors.lightGreen};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 24px;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); 
  }
`;

/* Título da seção */
export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
`;

/* Conteúdo fixo (texto introdutório) */
export const SectionContent = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
`;

/* 
  Contêiner que vai expandir/contrair de forma suave.
  A lógica de medir altura e animar está no componente React, mas
  precisamos de estilos básicos para o 'wrapper'.
*/
export const AnimatedContainer = styled.div<{ $isOpen: boolean; $height: number | 'auto' }>`
  overflow: hidden;
  transition: height 0.4s ease, opacity 0.4s ease;
  height: ${(props) => (props.$height === 'auto' ? 'auto' : `${props.$height}px`)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;

/* 
  Se preferir, você pode encapsular toda a lógica aqui dentro,
  mas normalmente criamos um componente que use a ref e o useEffect
  para controlar a altura suavemente, conforme mostrado abaixo.
*/
