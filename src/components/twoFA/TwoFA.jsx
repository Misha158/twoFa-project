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
  const [validateCode, setValidateCode] = useState("");
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const onClick = async () => {
    const { data } = await authService.twoFAVerify({
      token: input,
      userId: store.authData.id,
    });
    store.setIsVerifyTwoFA(data.verified);

    if (data.verified) {
      navigate("/dashboard");
    }
  };

  const onChangeValidateCode = (event) => {
    setValidateCode(event.target.value);
  };

  const onSendValidateCode = async () => {
    const { data } = await authService.twoFAVerify({
      token: validateCode,
      userId: store.authData.id,
    });

    setState(data.validated);
  };

  useEffect(() => {
    if (!store.isVerifyTwoFA && !store.shouldVerifyTwoFA) {
      navigate("/registration");
    }
  }, []);

  console.log(toJS(store.isVerifyTwoFA));

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
          <Button onClick={onClick}>Send code</Button>
          {/*          <br />
          <hr style={{ marginTop: "50px" }} />
          <br />

          <Input
            placeholder="validate code"
            value={validateCode}
            onChange={onChangeValidateCode}
          />
          <Button onClick={onSendValidateCode}>Validate</Button>
          <div style={{ backgroundColor: state ? "green" : "red" }}>
            {state ? "success" : "Error"}
          </div>*/}
        </Form>
      </Wrapper>
      <Background />
    </MainWrapper>
  );
});
