import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "antd/es/input/Input";
import { Button } from "antd";

export const TwoFA = () => {
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [input, setInput] = useState("");
  const [validateCode, setValidateCode] = useState("");
  const [state, setState] = useState(false);

  useEffect(async () => {
    const { data } = await axios.post("http://localhost:5000/api/register");
    console.log(data);
    setCode(data.url);
    setId(data.id);
  }, []);

  const onClick = async () => {
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/api/verify",
      data: {
        token: input,
        userId: id,
      },
    });

    console.log(data);
  };

  // const onValidate = async () => {
  //   const { data } = await axios({
  //     method: "POST",
  //     url: "http://localhost:5000/api/validate",
  //     data: {
  //       token: input,
  //       userId: id,
  //     },
  //   });
  // };

  const onChangeValidateCode = (event) => {
    setValidateCode(event.target.value);
  };

  const onSendValidateCode = async () => {
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/api/validate",
      data: {
        token: validateCode,
        userId: id,
      },
    });

    console.log(data);
    setState(data.validated);
  };

  return (
    <div>
      <h1>TwoFa</h1>
      <img src={code} alt="" />

      <Input value={id} placeholder="userID" />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="code"
      />
      <Button onClick={onClick}>Send code</Button>
      <br />
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
      </div>
    </div>
  );
};
