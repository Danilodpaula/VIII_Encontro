import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

type LinkItem = {
  label: string;
  url: string;
};

type MultiLinkIconProps = {
  icon: IconType;        // Qual ícone do react-icons
  links: LinkItem[];     // Lista de links para exibir no menu
};

const MultiLinkIcon: React.FC<MultiLinkIconProps> = ({ icon: Icon, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Abre/fecha o menu
  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Abre link em nova aba
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false); // fecha o menu após o clique
  };

  return (
    <S.MultiLinkContainer>
      {/* Ícone principal */}
      <S.ContactItem onClick={handleToggleMenu}>
        <S.Icon>
          <Icon />
        </S.Icon>
      </S.ContactItem>

      {/* Dropdown com as opções de links */}
      {isOpen && (
        <S.DropdownMenu>
          {links.map((item, index) => (
            <li key={index} onClick={(e) => handleLinkClick(e, item.url)}>
              {item.label}
            </li>
          ))}
        </S.DropdownMenu>
      )}
    </S.MultiLinkContainer>
  );
};

export default MultiLinkIcon;
