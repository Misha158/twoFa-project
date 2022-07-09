import React from "react";
import { Button, Form, Typography } from "antd";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("userAuthData", JSON.stringify(values));
    navigate("/");
  };

  return (
    <>
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
    </>
  );
};
