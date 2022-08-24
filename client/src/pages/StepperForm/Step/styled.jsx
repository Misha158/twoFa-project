import styled from "styled-components";

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: darkgreen;
  border-radius: 50%;
`;

export const Line = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  flex: 1;
`;

export const WrapperStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5px;
`;
