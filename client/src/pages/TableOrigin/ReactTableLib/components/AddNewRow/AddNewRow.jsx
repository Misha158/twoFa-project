import React, { useState } from "react";
import { Button, Input } from "antd";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../../GraphQL/mutations/user";

export const AddNewRow = ({ newRow, refetch }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onCreateNewRow = async () => {
    await newRow({
      variables: {
        input: {
          col1: inputValue,
          col2: inputValue,
          col3: 1,
        },
      },
    });

    refetch();
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
