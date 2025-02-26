import styled from "styled-components";
import { colors } from "../../styles/color";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const SlidingImagesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const SlidingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeaderContent = styled.div`
  text-align: center;
  color: ${colors.white};
  max-width: 90%;
  /* backdrop-filter: blur(8px); */
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 4px;


  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: bold;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 500;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
