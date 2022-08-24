import React from "react";
import styled from "styled-components";
import { Button, Input } from "antd";

export const Container = styled.div`
  margin: 10px 0;
  border-radius: 10px;
`;

export const StepOne = () => {
  return (
    <Container>
      <label>
        login
        <Input />
      </label>

      <label>
        password
        <Input />
      </label>
    </Container>
  );
};
