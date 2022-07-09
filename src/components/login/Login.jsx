import React from "react";
import { Button, Form, Typography } from "antd";
import Input from "antd/es/input/Input";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = ({ password, username }) => {
    // console.log("Success:", values);
    const authLocal = JSON.parse(localStorage.getItem("userAuthData"));
    if (password !== authLocal.password || username !== authLocal.username) {
      alert("No right auth datas");
      return;
    }

    alert("Ok");
    navigate("/two-fa");
  };

  return (
    <>
      <Title>Login</Title>
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
        <Link to="/sign-up">Go to registration</Link>
      </Form>
    </>
  );
};
