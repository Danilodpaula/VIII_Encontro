import styled from "styled-components";
import { colors } from "../../styles/color";

/* Container principal */
export const Container = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

/* Título */
export const Title = styled.h2`
  text-align: center;
  color: ${colors.primary};  /* Verde Escuro */
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  margin-bottom: 1rem;
`;

/* Descrição */
export const Description = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${colors.darkGray}; /* Texto principal */
  margin-bottom: 2rem;
`;

/* Lista de Contatos */
export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

/* Item da lista */
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  background: ${colors.lightGray}; /* Fundo sutil */
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background: ${colors.accent}; /* Verde claro para destaque */
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

/* Ícones */
export const Icon = styled.div`
  font-size: 1.8rem;
  color: ${colors.primary}; /* Verde escuro */
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    margin-right: 0;
  }
`;

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
