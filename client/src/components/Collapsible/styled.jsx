import styled from "styled-components";
import { Button as ButtonAnt } from "antd";

export const Parrent = styled.div`
  height: ${({ isOpen, parrentRef }) =>
    isOpen ? `${parrentRef?.current?.scrollHeight}px` : 0};
  text-align: center;
  transition: height 0.3s ease;
  overflow: hidden;
`;

export const Content = styled.div`
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled(ButtonAnt)`
  border-radius: 5px;
  background-color: blue;
  color: white;
`;
