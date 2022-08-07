import React, { useEffect, useState } from "react";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Card, Layout, MaterialTable } from "../../components";

import { Input } from "antd";
import { useDebounce } from "../../hooks/useDebounce";

const rawData = ["cat", "dog", "misha", "test"];

export const SupportRequest = () => {
  const [inputPhone, setInputPhone] = useState("");
  const [value, setValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    const filterData = rawData.filter((item) => item.includes(debounceValue));

    setFilteredValue(filterData);
    console.log(filteredValue);
  }, [debounceValue]);

  return (
    <Layout title="SupportRequest">
      <Card>
        <PhoneInputComponent
          country={"us"}
          value={inputPhone}
          onChange={(phone, country, _, formattedValue) => {
            setInputPhone(phone);
            /*            console.log(country);
            console.log(_);
            console.log(formattedValue);*/
          }}
          placeholder="type your phone"
        />
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Card>
    </Layout>
  );
};
