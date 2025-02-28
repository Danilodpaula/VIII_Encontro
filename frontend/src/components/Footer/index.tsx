import  { useState } from "react";
import { FiMail, FiMenu, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import * as S from "./styles";

export function Footer() {
  // Estado para controlar abertura/fechamento do modal no mobile
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre ou fecha o modal
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Redireciona para links externos
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <S.FooterContainer>
      <S.ContentWrapper>
        {/* 
          Ícone de menu que só aparece no mobile (ver em styles).
          Ao clicar, abre/fecha o modal.
        */}
        <S.MobileIcon onClick={handleModalToggle}>
          <FiMenu />
        </S.MobileIcon>

        {/* 
          Seção de ícones normal (exibida apenas em telas maiores).
          Estes ícones ficam escondidos no mobile. 
        */}
        <S.IconsWrapper>
          <S.ContactItem onClick={() => handleRedirect("mailto:encontrodeperspectivas@gmail.com")}>
            <S.Icon>
              <FiMail />
            </S.Icon>
          </S.ContactItem>

          <S.ContactItem onClick={() => handleRedirect("https://www.facebook.com/evento")}>
            <S.Icon>
              <FiFacebook />
            </S.Icon>
          </S.ContactItem>

          <S.ContactItem
            onClick={() =>
              handleRedirect("https://www.instagram.com/ppgichuea?igsh=NzIyeHJyMTd1Z2ph")
            }
          >
            <S.Icon>
              <FiInstagram />
            </S.Icon>
          </S.ContactItem>

          <S.ContactItem onClick={() => handleRedirect("https://www.youtube.com/@tvppgichuea")}>
            <S.Icon>
              <FiYoutube />
            </S.Icon>
          </S.ContactItem>
        </S.IconsWrapper>

        <p>© 2025 VIII Encontro de Perspectivas. Todos os direitos reservados.</p>
      </S.ContentWrapper>

      {/* Modal (será visível apenas quando isModalOpen = true) */}
      {isModalOpen && (
        <S.ModalOverlay onClick={handleModalToggle}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Conecte-se</h2>
            <S.ModalIconsWrapper>
              {/* Reutilizamos os ícones aqui dentro do modal */}
              <S.ContactItem onClick={() => handleRedirect("mailto:encontrodeperspectivas@gmail.com")}>
                <S.Icon>
                  <FiMail />
                </S.Icon>
                <span>E-mail</span>
              </S.ContactItem>

              <S.ContactItem onClick={() => handleRedirect("https://www.facebook.com/evento")}>
                <S.Icon>
                  <FiFacebook />
                </S.Icon>
                <span>Facebook</span>
              </S.ContactItem>

              <S.ContactItem
                onClick={() =>
                  handleRedirect("https://www.instagram.com/ppgichuea?igsh=NzIyeHJyMTd1Z2ph")
                }
              >
                <S.Icon>
                  <FiInstagram />
                </S.Icon>
                <span>Instagram</span>
              </S.ContactItem>

              <S.ContactItem onClick={() => handleRedirect("https://www.youtube.com/@tvppgichuea")}>
                <S.Icon>
                  <FiYoutube />
                </S.Icon>
                <span>YouTube</span>
              </S.ContactItem>
            </S.ModalIconsWrapper>

            <S.CloseButton onClick={handleModalToggle}>Fechar</S.CloseButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.FooterContainer>
  );
}
