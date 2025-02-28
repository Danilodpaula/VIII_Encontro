import styled from "styled-components";
import { colors } from "../../styles/color";

// Container principal, fundo escuro
export const ChamadaContainer = styled.section`
  background-color: #000; /* fundo preto */
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  width: 100%;
  min-height: 40vh; /* altura mínima, ajuste conforme necessidade */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Título principal
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${colors.white};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Texto descritivo
export const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.5;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Botão para baixar o PDF
export const DownloadButton = styled.a`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary}; 
  }

  @media (max-width: 480px) {
    width: 80%;
    display: inline-block;
    text-align: center;
  }
`;
