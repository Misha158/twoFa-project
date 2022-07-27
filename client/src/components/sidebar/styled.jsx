import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: black;
  min-width: ${({ isOpen }) => (isOpen ? "150px" : "80px")};
  width: ${({ isOpen }) => (isOpen ? "150px" : "80px")};
  transition: all 0.3s ease-in-out;
  min-height: 100vh;
`;

export const IconContainer = styled.div`
  color: white;
  margin-right: 10px;
  min-width: 20px;
  height: 20px;
`;

export const MenuItemLink = styled.div`
  color: ${({ $isActive }) => ($isActive ? "#ff08a1" : "white")};
  transition: all 0.3s ease-in-out;
`;

export const MenuItem = styled(Link)`
  display: flex;
  justify-content: ${({ $isOpen }) => !$isOpen && "center"};
  padding: 10px 15px;
  margin: 10px 0;
  background-color: ${({ $isActive }) => $isActive && "#6e6e6e"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  svg {
    color: ${({ $isActive }) => $isActive && "#ff08a1"};
    transition: all 0.3s ease-in-out;
  }

  :hover {
    background-color: #6e6e6e;

    ${MenuItemLink} {
      color: #ff08a1;
    }

    svg {
      color: #ff08a1;
    }
  }
`;

export const MenuItemContainer = styled.div`
  //position: fixed;
  ${MenuItem}:first-child {
    margin-top: 100px;
  }
`;

export const HeaderIcon = styled.div`
  color: white;
  width: 20px;
  height: 20px;
`;

export const FlexContainer = styled.div`
  //position: sticky;
  //top: 0;
  //z-index: 99999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
