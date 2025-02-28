import styled from "styled-components";
import { colors } from "../../styles/color";

// Footer principal
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: static;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  height: 60px;
`;

// Container interno do footer (organiza ícones e texto)
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

// Ícone que abre o modal no mobile.
// Em telas grandes, ficará hidden.
export const MobileIcon = styled.div`
  display: none; /* Oculto por padrão */

  svg {
    font-size: 1.8rem;
    cursor: pointer;
    color: ${colors.white};
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    /* Mostra no mobile */
    display: flex;
  }
`;

// Envolve os ícones individuais (ex: Facebook, Instagram etc.)
// Por padrão, aparece em desktop. Some no mobile.
export const IconsWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    /* Some em telas menores */
    display: none;
  }
`;

// Item que representa cada ícone (Facebook, Insta...)
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    color: ${colors.white};
    font-size: 1.8rem;
  }

  span {
    margin-left: 8px;
    color: ${colors.primary};
    font-weight: bold;
  }
`;

// Container do ícone
export const Icon = styled.div`
  font-size: 1.8rem;
`;

/* ========================= MODAL ========================= */

// Overlay que cobre todo o viewport (independente do scroll)
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;       /* Cola no topo */
  left: 0;      /* e no canto esquerdo */
  right: 0;     /* cobre a tela toda na horizontal */
  bottom: 0;    /* e até o rodapé */
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparente */
  z-index: 62000; /* acima do footer */
  
  display: flex;
  align-items: flex-end;  /* centraliza verticalmente */
  justify-content: center; /* centraliza horizontalmente */
`;

// Conteúdo do modal em si
export const ModalContent = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px; /* limite de largura */
  margin-bottom: 20rem;
  text-align: center;

  /* Caso queira limitar a altura e permitir rolagem interna: */
  /* max-height: 80vh;
     overflow-y: auto; */

  h2 {
    margin-bottom: 1rem;
    color: ${colors.primary};
  }
`;

// Container interno que agrupa os ícones no modal
export const ModalIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  ${ContactItem} {
    justify-content: center;

    svg {
      color: ${colors.primary};
    }

    &:hover svg {
      color: ${colors.secondary};
    }
  }
`;

// Botão de fechar
export const CloseButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${colors.secondary};
  }
`;
