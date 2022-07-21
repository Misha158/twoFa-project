import React from "react";
import {
  IconContainer,
  MenuItemLink,
  MenuItem as MenuItemStyled,
} from "./styled";
import { useLocation } from "react-router-dom";

export const MenuItem = ({ isOpen, page }) => {
  const location = useLocation();
  const checkIsActivePage = (urlPage) => urlPage === location.pathname;

  return (
    <MenuItemStyled isOpen={isOpen} isActive={checkIsActivePage(page.url)}>
      <IconContainer>{page.icon}</IconContainer>
      {isOpen && (
        <MenuItemLink to={page.url} $isActive={checkIsActivePage(page.url)}>
          {page.name}
        </MenuItemLink>
      )}
    </MenuItemStyled>
  );
};
