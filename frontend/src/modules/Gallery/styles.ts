import styled from "styled-components";
import { colors } from "../../styles/color";

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 4rem auto;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;

  .swiper {
    border-radius: 12px;
    overflow: hidden;
  }
`;

export const Caption = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: white;
  text-align: center;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 8px;
`;
