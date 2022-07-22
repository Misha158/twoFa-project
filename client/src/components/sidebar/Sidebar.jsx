import React, { useState } from "react";
import { Container, MenuItemContainer } from "./styled";
import { MenuItem } from "./MenuItem";
import { Header } from "./Header";
import { pages } from "./consts";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container isOpen={isOpen}>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <MenuItemContainer>
        {pages.map((page) => (
          <MenuItem isOpen={isOpen} page={page} key={page.name} />
        ))}
      </MenuItemContainer>
    </Container>
  );
};
