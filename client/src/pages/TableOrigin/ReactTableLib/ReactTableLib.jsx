import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { StyledInput, Styles } from "./styled";
import { TableHead } from "./TableHead";
import { columns } from "./columns";
import { TableBody } from "./TableBody";
import { GlobalFilter } from "./GlobalFilter";
import { AddNewRow } from "./components/AddNewRow/AddNewRow";
import { data as dataHardcore } from "./data";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLE_DATA } from "./query/tableQuery";
import { CREATE_ROW } from "./mutation/tableMutation";

export const ReactTableLib = () => {
  const { data, loading, error, refetch } = useQuery(GET_TABLE_DATA);
  const [newRow] = useMutation(CREATE_ROW);
  const [inputValue, setInputValue] = useState("");
  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  useEffect(() => {
    if (!loading) {
      setDataTable(data.getReactTable);
    }
  }, [data]);

  const tableInstance = useTable(
    { columns, data: dataTable },
    useGlobalFilter,
    useSortBy
  );

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
      <AddNewRow newRow={newRow} refetch={refetch} />
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
