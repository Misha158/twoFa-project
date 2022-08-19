import React, { useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { StyledInput, Styles } from "./styled";
import { TableHead } from "./TableHead";
import { data } from "./data";
import { columns } from "./columns";
import { TableBody } from "./TableBody";
import { GlobalFilter } from "./GlobalFilter";
import { AddNewRow } from "./components/AddNewRow";

export const ReactTableLib = () => {
  const [inputValue, setInputValue] = useState("");

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Styles>
      {/*<StyledInput value={inputValue} onChange={onChangeInput} />*/}
      <AddNewRow />
      <GlobalFilter
        globalFilter={state.globalFilter}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <TableHead headerGroups={headerGroups} sort />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </table>
    </Styles>
  );
};
