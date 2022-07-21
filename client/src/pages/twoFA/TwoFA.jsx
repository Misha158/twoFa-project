import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { Background, MainWrapper, Wrapper } from "../login/styled";
import store from "../../store/store";
import { observer } from "mobx-react";
import { Form } from "./styled";
import { authService } from "../../sercives/authServices";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";

export const TwoFA = observer(() => {
  const navigate = useNavigate();

  const onVerifiedTwoFA = async ({ token, userId }) => {
    console.log("onVerifiedTwoFA");

    const { data } = await authService.twoFAVerify({
      token,
      userId,
    });
    store.setIsVerifiedTwoFA({
      isVerifyTwoFA: data.verified,
      shouldVerifiedTwoFA: !data.verified,
    });

    if (data.verified) {
      store.setIsAuth(true);
      navigate("/dashboard");
    }
  };

  const onValidateTwoFA = async ({ token, userId }) => {
    console.log("onValidateTwoFA");
    const {
      data: { validated },
    } = await authService.twoFAValidate({
      token,
      userId,
    });

    if (validated) {
      store.setIsAuth(true);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (
      !store.authData.shouldVerifiedTwoFA &&
      !store.authData.shouldValidateTwoFA
    ) {
      navigate("/registration");
    }
  }, []);

  return (
    <MainWrapper>
      <Wrapper>
        <h1>TwoFa</h1>
        <img src={store.authData.url} alt="" />

        <Form
          layout="vertical"
          onFinish={
            store.authData.shouldValidateTwoFA
              ? onValidateTwoFA
              : onVerifiedTwoFA
          }
        >
          <Form.Item name="userId">
            <Input placeholder="userID" />
          </Form.Item>

          <Form.Item name="token">
            <Input placeholder="code" />
          </Form.Item>

          <Button htmlType="submit">
            {store.authData.shouldValidateTwoFA
              ? "Validate twoFA"
              : "Verified twoFA"}
          </Button>
        </Form>
      </Wrapper>
      <Background />
    </MainWrapper>
  );
});
