/* =======================
   styles.ts
   ======================= */
   import styled from "styled-components";
   import cartazMobile from "../../assets/novo (1)_page-0001.jpg";
   import { colors } from "../../styles/color";
   import { motion } from "framer-motion";
   
   // Container principal do Header
   export const HeaderContainer = styled.header`
     position: relative;
     width: 100%;
     min-height: 100vh; 
     display: flex;
     align-items: center;
     justify-content: center;
     overflow: hidden;
   
     @media (max-width: 768px) {
       /* Ajuste se quiser 90vh ou 100vh no mobile */
       min-height: 100vh;
     }
   `;
   
   export const SlidingImagesContainer = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     overflow: hidden;
   `;
   
   // Imagem de fundo
   export const SlidingImage = styled.img`
     width: 100%;
     height: 100vh;
     object-fit: cover;
     filter: brightness(1.2);
     flex-shrink: 0;
     opacity: 0.6;
   
     @media (max-width: 768px) {
       content: url(${cartazMobile});
       object-fit: cover;
       width: 100vw;
       min-height: 100vh;
     }
   `;
   
   // Overlay (camada sobreposta para o texto)
   export const Overlay = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     padding: 2rem;
   `;
   
   // Conteúdo do header (bloco branco)
   export const HeaderContent = styled.div`
     max-width: 550px;
     background-color: white;
     padding: 3rem 2rem;
     border-radius: 8px;
     text-align: center;
     color: #293d27;
   
     h1 {
       font-size: 2.5rem;
       font-weight: 700;
       margin-bottom: 1rem;
     }
   
     /* Se usar h2, p, etc. */
     p, li {
       font-size: 1.1rem;
       line-height: 1.4;
       color: #60625f;
     }
   
     @media (max-width: 768px) {
       max-width: 90%;
       background-color: rgba(255, 255, 255, 0.8);
       backdrop-filter: blur(6px);
       padding: 2rem;
   
       h1 {
         font-size: 1.8rem;
         margin-bottom: 0.8rem;
       }
       p, li {
         font-size: 1rem;
       }
     }
   `;
   
   // Botão principal (MapButton)
   export const MapButton = styled(motion.a)`
     display: flex;
     align-items: center;
     justify-content: center;
     justify-self: center;
     gap: 0.5rem;
     cursor: pointer;
     width: 90%;
     padding: 24px 14px;
     background: ${colors.secondary};
     color: #fff;
     font-size: 20px;
     font-weight: 700;
     border-radius: 4px;
     margin-top: 1rem;
     text-decoration: none;
     transition: background 0.3s ease-in-out;
   
     &:hover {
       background: ${colors.primary};
     }
   
     /* Ajuste no ícone */
     svg {
       font-size: 0.5rem;
     }
   
     @media (max-width: 768px) {
       width: auto;
       padding: 16px 4px;
       font-size: 1rem;
     }
   `;
   
   /* ======================
      ESTILOS DO MODAL
      ====================== */
   
   // Fundo semitransparente
   export const ModalOverlay = styled(motion.div)`
     position: fixed; 
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     background: rgba(0,0,0,0.6); 
     display: flex;
     align-items: center;
     justify-content: center;
     z-index: 999;
   `;
   
   // Container do conteúdo do modal
   export const ModalContent = styled(motion.div)`
     background: #fff;
     width: 90%;
     max-width: 480px;
     border-radius: 8px;
     padding: 1.5rem;
     box-shadow: 0 5px 15px rgba(0,0,0,0.3);
     
     display: flex;
     flex-direction: column;
     gap: 1rem;
   `;
   
   // Cabeçalho do modal
   export const ModalHeader = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
   
     h2 {
       font-size: 1.5rem;
       color: #293d27;
     }
   
     button {
       background: transparent;
       border: none;
       font-size: 1.4rem;
       cursor: pointer;
       color: #666;
   
       &:hover {
         color: #000;
       }
     }
   `;
   
   // Corpo do modal (onde ficam os dois links)
   export const ModalBody = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
   `;
   
   // Link do modal (mesmo estilo do botão)
   export const ModalLink = styled(motion.a)`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 0.5rem;
     text-decoration: none;
     width: 100%;
     padding: 16px;
     background: ${colors.secondary};
     color: #fff;
     font-size: 1rem;
     font-weight: 700;
     text-align: center;
     border-radius: 4px;
     transition: background 0.3s ease-in-out;
   
     svg {
       font-size: 1rem;
     }
   
     &:hover {
       background: ${colors.primary};
     }
   
     @media (max-width: 768px) {
       font-size: 0.95rem;
       padding: 14px;
     }
   `;
   