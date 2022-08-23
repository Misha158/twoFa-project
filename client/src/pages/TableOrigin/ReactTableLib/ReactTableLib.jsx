import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { StyledInput, Styles } from "./styled";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { GlobalFilter } from "./GlobalFilter";
import { AddNewRow } from "./components/AddNewRow/AddNewRow";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ROW, DELETE_ROW } from "./mutation/tableMutation";

export const ReactTableLib = ({ data, loading, error, refetch, columns }) => {
  console.log("data", data);
  const [dataTable, setDataTable] = useState([]);
  const [newRow] = useMutation(CREATE_ROW);

  const tableInstance = useTable(
    {
      columns,
      data: dataTable || [],
      manualSortBy: true,
      manualGlobalFilter: true,
    },
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

  return (
    <Styles data-testid="table">
      <AddNewRow newRow={newRow} refetch={refetch} />
      <GlobalFilter
        globalFilter={state.globalFilter}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        setDataTable={setDataTable}
        data={data}
        loading={loading}
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
