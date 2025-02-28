// import { FiFacebook, FiInstagram, FiMail, FiYoutube } from "react-icons/fi";
// import * as S from "./styles";

// const handleRedirect = (
//   event: React.MouseEvent<HTMLLIElement>,
//   url: string
// ) => {
//   event.stopPropagation();
//   window.open(url, "_blank", "noopener,noreferrer");
// };

// function Footer() {
//   return (
//     <S.FooterContainer>
//       <S.ContentWrapper>
//         <S.IconsWrapper>
//           <S.ContactItem
//             onClick={(e) =>
//               handleRedirect(e, "mailto:encontrodeperspectivas@gmail.com")
//             }
//           >
//             <S.Icon>
//               <FiMail />
//             </S.Icon>
//           </S.ContactItem>

//           <S.ContactItem
//             onClick={(e) =>
//               handleRedirect(e, "https://www.facebook.com/evento")
//             }
//           >
//             <S.Icon>
//               <FiFacebook />
//             </S.Icon>
//           </S.ContactItem>

//           <S.ContactItem
//             onClick={(e) =>
//               handleRedirect(
//                 e,
//                 "https://www.instagram.com/ppgichuea?igsh=NzIyeHJyMTd1Z2ph"
//               )
//             }
//           >
//             <S.Icon>
//               <FiInstagram />
//             </S.Icon>
//           </S.ContactItem>

//           <S.ContactItem
//             onClick={(e) =>
//               handleRedirect(e, "https://www.youtube.com/@tvppgichuea")
//             }
//           >
//             <S.Icon>
//               <FiYoutube />
//             </S.Icon>
//           </S.ContactItem>
//         </S.IconsWrapper>

//         <p>
//           © 2025 VIII Encontro de Perspectivas. Todos os direitos reservados.
//         </p>
//       </S.ContentWrapper>
//     </S.FooterContainer>
//   );
// }

// export default Footer;


import { FiMail } from "react-icons/fi";
import MultiLinkIcon from "./MultiLinkIcon"; // caminho correto do seu componente
import * as S from "./styles";

export function Footer() {
  return (
    <S.FooterContainer>
      <S.ContentWrapper>
        <S.IconsWrapper>
          {/* Exemplo: Ícone com múltiplos endereços de e-mail */}
          <MultiLinkIcon
            icon={FiMail}
            links={[
              { label: "Email 1", url: "mailto:exemplo1@gmail.com" },
              { label: "Email 2", url: "mailto:exemplo2@gmail.com" },
            ]}
          />

          {/* Outros ícones... */}
        </S.IconsWrapper>

        <p>© 2025 VIII Encontro de Perspectivas. Todos os direitos reservados.</p>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
}
