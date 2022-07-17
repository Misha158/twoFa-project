import React, { useEffect, useState } from "react";
import { Button, Typography, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Background, Form, MainWrapper, Wrapper } from "./styled";
import { authService } from "../../sercives/authServices";
import store from "../../store/store";
import { observer } from "mobx-react";

export const Login = observer(() => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onLogin = async ({ password, username }) => {
    try {
      await authService.login({ password, username });

      store.setShouldValidateTwoFA(true);

      alert("Ok");
      navigate("/two-fa");
    } catch (e) {
      alert("Bad credentials, try again!");
    }
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Title>Login</Title>
        <Form layout="vertical" onFinish={onLogin}>
          <Form.Item placeholder="Username" name="username">
            <Input />
          </Form.Item>

          <Form.Item placeholder="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Item>
          <Link to="/registration">Go to registration</Link>
        </Form>
      </Wrapper>

      <Background />
    </MainWrapper>
  );
});
