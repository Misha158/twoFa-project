import React, { useEffect, useState } from "react";
import { Button, Typography, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Background, Form, MainWrapper, Wrapper } from "./styled";

export const Login = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = ({ password, username }) => {
    const authLocal = JSON.parse(localStorage.getItem("userAuthData"));
    if (password !== authLocal.password || username !== authLocal.username) {
      alert("No right auth datas");
      return;
    }

    alert("Ok");
    navigate("/two-fa");
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Title>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
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
          <Link to="/sign-up">Go to registration</Link>
        </Form>
      </Wrapper>

      <Background />
    </MainWrapper>
  );
};
