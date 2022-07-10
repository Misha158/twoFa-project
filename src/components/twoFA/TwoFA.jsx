import React, { useEffect, useState } from "react";
import axios from "axios";

export const TwoFA = () => {
  const [code, setCode] = useState("");
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:5000/get-twofa-qrcode");
    console.log(data);
    setCode(data);
  }, []);
  return (
    <div>
      <h1>TwoFa</h1>
      <img src={code} alt="" />
    </div>
  );
};
