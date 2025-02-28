/* =======================
   Header.tsx
   ======================= */
   import { useEffect, useState } from "react";
   import { motion } from "framer-motion";
   import * as S from "./styles";
   import cartaz1 from "../../assets/Group 1.png";
   import { AiOutlineExport } from "react-icons/ai";
   
   const Header = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
   
     // Abre o modal
     const handleOpenModal = () => {
       setIsModalOpen(true);
     };
   
     // Fecha o modal
     const handleCloseModal = () => {
       setIsModalOpen(false);
     };
   
     useEffect(() => {
       const handleResize = () => {
         // Ajustes responsivos, se necessário
       };
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
   
     // Quando o estado do modal muda, bloqueia/desbloqueia scroll do body
     useEffect(() => {
       if (isModalOpen) {
         document.body.style.overflow = "hidden"; // Bloqueia scroll
       } else {
         document.body.style.overflow = "auto"; // Restaura scroll
       }
     }, [isModalOpen]);
   
     return (
       <S.HeaderContainer>
         {/* Imagem de fundo */}
         <S.SlidingImagesContainer id="header-image">
           <S.SlidingImage src={cartaz1} />
         </S.SlidingImagesContainer>
   
         {/* Conteúdo sobreposto */}
         <S.Overlay>
           <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             style={{ display: "flex", justifyContent: "flex-end" }}
           >
             <S.HeaderContent>
               <motion.h1
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 1 }}
               >
                 8° Encontro de Perspectivas
               </motion.h1>
   
               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 1 }}
                 style={{ marginBottom: "2rem" }}
               >
                 Venha prestigiar o evento em três localidades:
               </motion.p>
   
               <motion.ul
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 1 }}
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   listStyle: "none",
                   justifyContent: "start",
                   gap: "1rem",
                 }}
               >
                 <li>📍 Local: Manaus-AM</li>
                 <li>📍 Local: Tefé-AM</li>
                 <li>📍 Local: Parintins-AM</li>
               </motion.ul>
   
               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 1 }}
                 style={{ marginTop: "2rem" }}
               >
                 Ou se preferir, participe conosco!
               </motion.p>
   
               <S.MapButton
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 1 }}
                 style={{ marginTop: "2rem" }}
                 onClick={handleOpenModal}
               >
                 Submeter trabalho <AiOutlineExport size={24} />
               </S.MapButton>
             </S.HeaderContent>
           </motion.div>
         </S.Overlay>
   
         {/* MODAL (renderiza somente se isModalOpen === true) */}
         {isModalOpen && (
           <S.ModalOverlay
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.3 }}
             //  onClick={handleCloseModal}
           >
             <S.ModalContent
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.3 }}
               onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar dentro
             >
               <S.ModalHeader>
                 <h2>Escolha o tipo de trabalho</h2>
                 <button onClick={handleCloseModal}>X</button>
               </S.ModalHeader>
   
               <S.ModalBody>
                 {/* Links estilizados como o botão principal */}{" "}
                 <S.ModalLink
                   href="https://docs.google.com/forms/d/e/1FAIpQLSelAlrrM7p4jHA8Ar7R6GtiGvWCwhvnHqgEyRhJUNu_XyfCzw/viewform?usp=header"
                   target="_blank"
                   rel="noreferrer"
                 >
                   {" "}
                   Inscrição como COMUNICADOR <AiOutlineExport size={20} />{" "}
                 </S.ModalLink>
                 <S.ModalLink
                   href="https://docs.google.com/forms/d/e/1FAIpQLSdqQzcldhesvr6zIC3AaAeXUdfrpPTX0zCQf8l92A1BhRn6gA/viewform?usp=header"
                   target="_blank"
                   rel="noreferrer"
                 >
                   Inscrição como OUVINTE <AiOutlineExport size={20} />
                 </S.ModalLink>
               </S.ModalBody>
             </S.ModalContent>
           </S.ModalOverlay>
         )}
       </S.HeaderContainer>
     );
   };
   
   export default Header;