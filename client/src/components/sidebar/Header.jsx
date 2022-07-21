import React from "react";
import { FlexContainer, HeaderIcon } from "./styled";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { defaultStyles } from "./consts";

export const Header = ({ isOpen, toggleMenu }) => {
  return (
    <FlexContainer>
      <header style={{ color: "white" }}>Logo</header>
      <HeaderIcon onClick={toggleMenu}>
        {isOpen ? (
          <AiFillCaretLeft style={defaultStyles} />
        ) : (
          <AiFillCaretRight style={defaultStyles} />
        )}
      </HeaderIcon>
    </FlexContainer>
  );
};
