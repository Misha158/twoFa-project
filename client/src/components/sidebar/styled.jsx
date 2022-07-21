import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  background-color: black;
  width: ${({ isOpen }) => (isOpen ? "150px" : "80px")};
  transition: all 0.3s ease-in-out;
`;

export const IconContainer = styled.div`
  color: white;
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const MenuItemLink = styled(Link)`
  color: ${({ $isActive }) => ($isActive ? "#ff08a1" : "white")};
  transition: all 0.3s ease-in-out;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: ${({ isOpen }) => !isOpen && "center"};
  padding: 10px 15px;
  margin: 10px 0;
  background-color: ${({ isActive }) => isActive && "#6e6e6e"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  svg {
    color: ${({ isActive }) => isActive && "#ff08a1"};
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
