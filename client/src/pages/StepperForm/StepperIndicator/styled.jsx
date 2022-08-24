import styled from "styled-components";
import { Circle, Line } from "../Step/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  // ${Line}:last-child {
  //   display: none;
  // }

  /*  ${Circle} {
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      width: 100%;
      height: 1px;
    }
  }*/
`;
