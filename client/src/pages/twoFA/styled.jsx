import styled from "styled-components";
import { Form as AntForm } from "antd";

export const Form = styled(AntForm)`
  min-width: 300px;

  input {
    padding: 7px 10px;
    width: 100%;
  }

  button {
    width: 100%;
  }
`;
