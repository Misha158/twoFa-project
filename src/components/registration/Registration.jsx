import React from "react";
import { Button, Typography } from "antd";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Background, Form, MainWrapper, Wrapper } from "../login/styled";
import store from "../../store/store";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { authService } from "../../sercives/authServices";

export const Registration = observer(() => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = async ({ username, password }) => {
    localStorage.setItem(
      "userAuthData",
      JSON.stringify({ username, password })
    );

    const {
      data: { id, secret, url },
    } = await authService.registration({ username, password });
    store.setAuthData({ username, password, id, secret, url });

    navigate("/two-fa");
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Title>Registration</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
      <Background />
    </MainWrapper>
  );
});
