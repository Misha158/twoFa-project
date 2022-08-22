import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { StyledInput, Styles } from "./styled";
import { TableHead } from "./TableHead";
import { getColumns } from "./columns";
import { TableBody } from "./TableBody";
import { GlobalFilter } from "./GlobalFilter";
import { AddNewRow } from "./components/AddNewRow/AddNewRow";
import { data as dataHardcore } from "./data";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLE_DATA, GET_TABLE_DATA_FILTERED } from "./query/tableQuery";
import { CREATE_ROW, DELETE_ROW } from "./mutation/tableMutation";

export const ReactTableLib = () => {
  const { data, loading, error, refetch } = useQuery(GET_TABLE_DATA);
  const [newRow] = useMutation(CREATE_ROW);
  const [deleteRow] = useMutation(DELETE_ROW);
  const [dataTable, setDataTable] = useState([]);

  const columns = React.useMemo(() => {
    return getColumns({
      onClick: async (value) => {
        console.log(value.row.original.id);
        await deleteRow({
          variables: {
            input: value.row.original.id,
          },
        });

        refetch();
      },
    });
  }, []);

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
