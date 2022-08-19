import React, { useState } from "react";
import { Button, Input } from "antd";

export const AddNewRow = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onCreateNewRow = () => {
    alert("request to grahpql");
    return;
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Input
        value={inputValue}
        onChange={onChange}
        style={{ marginBottom: "5px", width: "200px", display: "block" }}
      />
      <Button onClick={onCreateNewRow}>Create new row</Button>
    </div>
  );
};
