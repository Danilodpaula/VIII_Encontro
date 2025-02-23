import * as S from "./styles";
import cartaz from "../../assets/cartaz_viii_encontro.jpg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderImage id="header-image" src={cartaz} alt="Cartaz VIII Encontro de Perspectivas" />
      <S.HeaderContent>
        <h1>VIII Encontro de Perspectivas</h1>
        <h2>Experienciar a Cidadania numa 'Terra em Transe'</h2>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
