import styled from "styled-components";
import { colors } from "../../styles/color";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${colors.lightGreen}; /* Fundo leve */
  color: ${colors.darkGray}; /* Cor principal do texto */
  border-radius: 12px;
  max-width: 900px;
  margin: auto;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Highlight = styled.div`
  background: ${colors.secondary};
  padding: 1.2rem;
  border-radius: 10px;
  color: ${colors.white};
  text-align: center;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  background-color: ${colors.lightGray}; /* Fundo leve para destaque */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: clamp(1.3rem, 3vw, 1.6rem);
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.darkGray};
  }
`;

export const BulletList = styled.ul`
  padding-left: 1.5rem; /* Adiciona espaço à esquerda */
  margin-left: 0; /* Garante que a lista não esteja deslocada demais */
  list-style-position: inside; /* Mantém os bullets dentro do padding */

  li {
    margin-bottom: 0.5rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: ${colors.secondary}; /* Verde médio */
    font-weight: bold;
    display: flex;
    align-items: center; /* Alinha ícones e texto */
    gap: 0.5rem; /* Espaço entre o ícone e o texto */
  }
`;
