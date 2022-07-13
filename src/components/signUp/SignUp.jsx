import React from "react";
import { Button, Typography } from "antd";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Background, Form, MainWrapper, Wrapper } from "../login/styled";
import store from "../../store/store";
import { observer } from "mobx-react";
import { toJS } from "mobx";

export const SignUp = observer(() => {
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = async (values) => {
    localStorage.setItem("userAuthData", JSON.stringify(values));

    const { data } = await axios({
      url: "http://localhost:5000/api/register",
      method: "POST",
      data: {
        userName: "misha2",
        password: "123",
      },
    });

    store.setAuthData(data);

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
