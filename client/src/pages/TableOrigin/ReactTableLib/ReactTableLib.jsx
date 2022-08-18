import React, { useState } from "react";
import { useTable } from "react-table";
import { StyledInput, Styles } from "./styled";
import { TableHead } from "./TableHead";
import { data } from "./data";
import { columns } from "./columns";
import { TableBody } from "./TableBody";

export const ReactTableLib = () => {
  const [inputValue, setInputValue] = useState("");

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Styles>
      <StyledInput value={inputValue} onChange={onChangeInput} />
      <table {...getTableProps()}>
        <TableHead headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </table>
    </Styles>
  );
};
