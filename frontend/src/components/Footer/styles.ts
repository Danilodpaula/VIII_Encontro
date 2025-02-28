import styled from "styled-components";
import { colors } from "../../styles/color";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  align-items: center;

  background-color: ${colors.primary};
  color: ${colors.white};
  position: static;
  width: 100%;
  bottom: 0;
  z-index: 1000; /* Mantém acima de outros elementos */

  /* Evita sobreposição do conteúdo */
  height: 60px; /* Define uma altura fixa */
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: row;
width: 90%;
justify-content: space-between;
align-items: center;
`;


export const IconsWrapper = styled.div`
display: flex;
gap: 12px;
width: fit-content;
;
`;

/* Descrição */
export const Description = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${colors.darkGray}; /* Texto principal */
  margin-bottom: 2rem;
`;

/* Item da lista */
// export const ContactItem = styled.div`
//   display: flex;
//   align-items: center;
//   /* background: ${colors.lightGray}; */

//   border-radius: 4px;
//   cursor: pointer;
//   transition: background 0.3s ease-in-out, transform 0.2s;

//   svg {
//     color: white;
//   }

//   &:hover {
//     svg {
//       color: ${colors.accent}; /* Verde claro para destaque */
//     }
//     transform: translateY(-4px);
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
// `;

/* Ícones */
// export const Icon = styled.div`
//   font-size: 1.8rem;
//   color: ${colors.primary}; /* Verde escuro */
//   margin-right: 1rem;

//   @media (max-width: 600px) {
//     margin-bottom: 0.5rem;
//     margin-right: 0;
//   }
// `;

/* Informações de Contato */
export const ContactInfo = styled.div`
  font-size: 1rem;
  color: ${colors.darkGray}; /* Texto principal */

  a {
    text-decoration: none;
    color: ${colors.secondary}; /* Verde médio */
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${colors.primary}; /* Verde escuro ao passar o mouse */
    }
  }
`;


/** Container principal que envolve o ícone e o dropdown */
export const MultiLinkContainer = styled.div`
  position: relative; /* Importante para o dropdown ficar posicionado corretamente */
`;

/** Mantemos o ContactItem já existente ou adaptamos */
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;

  svg {
    color: ${colors.white};
  }

  &:hover {
    svg {
      color: ${colors.accent};
    }
    transform: translateY(-4px);
  }
`;

/** Ícone do react-icons */
export const Icon = styled.div`
  font-size: 1.8rem;
  margin-right: 1rem;
`;

/** Menu dropdown que será exibido quando "isOpen = true" */
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px; /* Ajuste conforme sua necessidade */
  left: 0;
  background-color: ${colors.white};
  list-style-type: none;
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  li {
    padding: 0.5rem 0;
    color: ${colors.primary};
    cursor: pointer;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;
