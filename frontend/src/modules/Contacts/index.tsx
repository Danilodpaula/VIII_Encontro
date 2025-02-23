import React from "react";
import * as S from "./styles";
import { FiMail, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const ContactSection: React.FC = () => {
  // Redireciona ao clicar no <li>
  const handleRedirect = (event: React.MouseEvent<HTMLLIElement>, url: string) => {
    event.stopPropagation(); // Evita fechamento do Accordion (se houver)
    window.open(url, "_blank", "noopener,noreferrer"); // Abre link em nova aba
  };

  return (
    <S.Container>
      <S.Title>Entre em contato conosco</S.Title>
      <S.Description>
        Acompanhe nossas redes sociais ou nos envie um e-mail.
      </S.Description>

      <S.ContactList>
        <S.ContactItem
          onClick={(e) => handleRedirect(e, "mailto:encontrodeperspectivas@gmail.com")}
        >
          <S.Icon>
            <FiMail />
          </S.Icon>
          <S.ContactInfo>
            <strong>E-mail:</strong>
            encontrodeperspectivas@gmail.com
          </S.ContactInfo>
        </S.ContactItem>

        <S.ContactItem
          onClick={(e) => handleRedirect(e, "https://www.facebook.com/evento")}
        >
          <S.Icon>
            <FiFacebook />
          </S.Icon>
          <S.ContactInfo>
            <strong>Facebook:</strong>
            facebook.com/evento
          </S.ContactInfo>
        </S.ContactItem>

        <S.ContactItem
          onClick={(e) => handleRedirect(e, "https://www.instagram.com/ppgichuea?igsh=NzIyeHJyMTd1Z2ph")}
        >
          <S.Icon>
            <FiInstagram />
          </S.Icon>
          <S.ContactInfo>
            <strong>Instagram:</strong>
            @ppgichuea
          </S.ContactInfo>
        </S.ContactItem>

        <S.ContactItem
          onClick={(e) => handleRedirect(e, "https://www.youtube.com/@tvppgichuea")}
        >
          <S.Icon>
            <FiYoutube />
          </S.Icon>
          <S.ContactInfo>
            <strong>YouTube:</strong>
            @tvppgichuea
          </S.ContactInfo>
        </S.ContactItem>
      </S.ContactList>
    </S.Container>
  );
};

export default ContactSection;
