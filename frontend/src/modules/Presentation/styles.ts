import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
`;

export const WrapperAll = styled.div`
  width: 95%;
  max-width: 1200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const TitleContent = styled.div`
  color: #053619;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const SubTitleText = styled.div`
  color: #60625f;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 1234px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PresentationText = styled.div`
  color: #444;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  flex-basis: 50%;

  p {
    margin-bottom: 16px;
  }

  strong {
    font-weight: 600;
  }

  @media (max-width: 1234px) {
    max-width: 100%;
  }
`;

export const PresentationImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-basis: 50%;

  @media (max-width: 1024px) {
    max-width: 54vw;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
  }

  @media (max-width: 480px) {
    max-width: 90vw;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
