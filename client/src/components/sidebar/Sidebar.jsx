import React, { useState } from "react";
import { Container, MenuItemContainer } from "./styled";
import { MenuItem } from "./MenuItem";
import { Header } from "./Header";
import { pages } from "./consts";
import { Grid } from "antd";

export const Sidebar = () => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  if (!md) {
    return <></>;
  }

  return (
    <Container isOpen={isOpen}>
      <div style={{ position: "sticky", top: 0 }}>
        <Header toggleMenu={toggleMenu} isOpen={isOpen} />
        <MenuItemContainer>
          {pages.map((page) => (
            <MenuItem isOpen={isOpen} page={page} key={page.name} />
          ))}
        </MenuItemContainer>
      </div>
    </Container>
  );
};
