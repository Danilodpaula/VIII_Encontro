import styled from "styled-components";

export const CarrouselContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1); /* Fundo semi-transparente */
  backdrop-filter: blur(8px);
  padding: 20px 0;
`;

export const LogoContainer = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
`;
