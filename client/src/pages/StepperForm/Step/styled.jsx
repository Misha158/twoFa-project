import styled from "styled-components";

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25px;
  height: 25px;
  background-color: ${({ isActive }) => (isActive ? "darkgreen" : "white")};
  border: 1px solid mediumblue;
  border-radius: 50%;
`;

export const Line = styled.div`
  width: 93%;
  background-color: black;
  height: 1px;
  position: absolute;
  top: 10px;
  right: 26px;
  z-index: -1;

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-width: 540px) {
    width: 85%;
  }

  @media (max-width: 340px) {
    width: 80%;
  }
`;

export const WrapperStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5px;
`;

export const CircleWrapper = styled.div`
  background-color: white;
  padding: 0 5px;

  @media (min-width: 500px) {
    :before {
      content: "";
      position: absolute;
      background-color: white;
      width: 30px;
      height: 15px;
      top: 0;
      left: -5px;
    }
  }
`;
