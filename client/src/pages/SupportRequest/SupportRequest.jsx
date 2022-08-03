import React, { useState } from "react";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Card, Layout } from "../../components";

import styled from "styled-components";

export const PhoneInput = styled(PhoneInputComponent)`
  /*  .selected-flag {
    opacity: 0;
  }*/
`;

export const SupportRequest = () => {
  const [inputPhone, setInputPhone] = useState("");
  console.log(inputPhone);
  return (
    <Layout title="SupportRequest">
      <Card>
        <PhoneInput
          country={"us"}
          value={inputPhone}
          onChange={(phone, country, _, formattedValue) => {
            setInputPhone(phone);
            console.log(country);
            console.log(_);
            console.log(formattedValue);
          }}
          placeholder="type your phone"
        />
      </Card>
    </Layout>
  );
};
