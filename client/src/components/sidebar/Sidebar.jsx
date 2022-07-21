import React, { useState } from "react";
import {
  Container,
  IconContainer,
  MenuItem,
  MenuItemContainer,
  HeaderIcon,
  FlexContainer,
  MenuItemLink,
} from "./styled";
import { Link, useLocation } from "react-router-dom";
import { AiFillCaretRight, AiFillCaretLeft, AiFillHome } from "react-icons/ai";

const defaultStyles = { width: "100%", height: "100%" };

const pages = [
  {
    name: "dashboard",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/dashboard",
  },
  {
    name: "Table",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/table",
  },
  {
    name: "Settings",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/settings",
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const checkIsActivePage = (urlPage) => urlPage === location.pathname;

  return (
    <Container isOpen={isOpen}>
      <FlexContainer>
        <header style={{ color: "white" }}>Logo</header>
        <HeaderIcon onClick={toggleMenu}>
          {isOpen ? (
            <AiFillCaretRight style={defaultStyles} />
          ) : (
            <AiFillCaretLeft style={defaultStyles} />
          )}
        </HeaderIcon>
      </FlexContainer>
      <MenuItemContainer>
        {pages.map((page) => (
          <MenuItem
            isOpen={isOpen}
            key={page.name}
            isActive={checkIsActivePage(page.url)}
          >
            <IconContainer>{page.icon}</IconContainer>
            {isOpen && (
              <MenuItemLink
                to={page.url}
                isActive={checkIsActivePage(page.url)}
              >
                {page.name}
              </MenuItemLink>
            )}
          </MenuItem>
        ))}
      </MenuItemContainer>
    </Container>
  );
};
