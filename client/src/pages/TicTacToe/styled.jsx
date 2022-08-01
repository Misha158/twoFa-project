import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;

  box-sizing: border-box;
`;

export const Squad = styled.button`
  width: 100px;
  height: 100px;
  outline: none;
  cursor: pointer;
  font-size: 60px;
  border: 1px solid black;

  :hover {
    background-color: aliceblue;
    transition: all 0.3s ease;
  }
`;
