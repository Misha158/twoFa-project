import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { Background, MainWrapper, Wrapper } from "../login/styled";
import store from "../../store/store";
import { observer } from "mobx-react";
import { Form } from "./styled";
import { authService } from "../../sercives/authServices";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";

export const TwoFA = observer(() => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const onVerifiedTwoFA = async () => {
    if (store.authData.shouldValidateTwoFA) {
      console.log("test");
      const {
        data: { validated },
      } = await authService.twoFAValidate({
        token: input,
        userId: store.authData.id,
      });

      if (validated) {
        navigate("/dashboard");
      }
    }
    const { data } = await authService.twoFAVerify({
      token: input,
      userId: store.authData.id,
    });
    store.setIsVerifiedTwoFA({
      isVerifyTwoFA: data.verified,
      shouldVerifiedTwoFA: !data.verified,
    });

    if (data.verified) {
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

        <Form>
          <Input value={store.authData.id} placeholder="userID" />
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="code"
          />
          <Button onClick={onVerifiedTwoFA}>Verified twoFA</Button>
        </Form>
      </Wrapper>
      <Background />
    </MainWrapper>
  );
});
