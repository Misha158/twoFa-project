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
import { GET_TABLE_DATA, GET_TABLE_DATA_FILTERED } from "./query/tableQuery";
import { CREATE_ROW } from "./mutation/tableMutation";

export const ReactTableLib = () => {
  const { data, loading, error, refetch } = useQuery(GET_TABLE_DATA);
  const [newRow] = useMutation(CREATE_ROW);
  const [dataTable, setDataTable] = useState([]);

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
    <Styles>
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
