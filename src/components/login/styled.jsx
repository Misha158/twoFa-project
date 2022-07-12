import styled from "styled-components";
import { Form as FormAnt } from "antd";
import bg from "./bg.jpg";

export const MainWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  min-width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 100%;
    min-width: 300px;
    background-image: url(${bg});
    background-size: cover;
    overflow: hidden;
  }
`;

export const Form = styled(FormAnt)`
  width: 100%;
  max-width: 300px;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;

  @media (max-width: 992px) {
    display: none;
  }
`;
