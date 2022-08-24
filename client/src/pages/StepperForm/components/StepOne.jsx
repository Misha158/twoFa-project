import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";

export const Container = styled.div`
  margin: 10px 0;
  border-radius: 10px;
`;

export const StepOne = ({ login, setLogin, password, setPassword }) => {
  return (
    <Container>
      <label>
        login
        <Input value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>

      <label>
        password
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
    </Container>
  );
};
