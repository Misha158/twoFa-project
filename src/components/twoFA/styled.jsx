import styled from "styled-components";

export const Form = styled.div`
  max-width: 300px;

  input {
    padding: 7px 10px;
  }

  button {
    width: 100%;
  }

  & > :nth-child(1),
  > :nth-child(2),
  > :nth-child(3) {
    margin: 7px;
  }
`;
