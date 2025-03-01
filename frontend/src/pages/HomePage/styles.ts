import styled from "styled-components";
import { colors } from "../../styles/color";

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};

  backdrop-filter: blur(15px);
  overflow-x: hidden;
`;
