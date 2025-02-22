import * as S from "./styles";

function Navbar() {
  return (
    <S.NavbarContainer>
      <ul>
        <li><a href="#apresentacao">Apresentação</a></li>
        <li><a href="#locais">Locais</a></li>
        <li><a href="#submissao">Submissão</a></li>
        <li><a href="#gts">Grupos de Trabalho</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#exposicao">Exposição</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
    </S.NavbarContainer>
  );
}

export default Navbar;
