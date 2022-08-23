import React, { useState, useRef } from "react";
import { Card, Collapsible, Layout } from "../../components";
import { columnHeaders, columnContents } from "./column";
import { ColumnCell, ColumnHeader } from "./styled";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLE } from "./query";
import { ReactTableLib } from "./ReactTableLib/ReactTableLib";
import { GET_TABLE_DATA } from "./ReactTableLib/query/tableQuery";
import { DELETE_ROW } from "./ReactTableLib/mutation/tableMutation";
import { getColumns } from "./ReactTableLib/columns";

export const TableOrigin = () => {
  // const { data: tableData, loading, error, refetch } = useQuery(GET_TABLE);

  const { data, loading, error, refetch } = useQuery(GET_TABLE_DATA);

  const [deleteRow] = useMutation(DELETE_ROW);
  const columns = React.useMemo(() => {
    return getColumns({
      onClick: async (value) => {
        await deleteRow({
          variables: {
            input: value.row.original.id,
          },
        });

        await refetch();
      },
    });
  }, []);

  return (
    <Layout>
      <Card>
        {/*<Collapsible />*/}
        <ReactTableLib
          data={data}
          loading={loading}
          error={error}
          refetch={refetch}
          columns={columns}
        />
        {/* <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              {columnHeaders.map((headCol) => (
                <ColumnHeader key={headCol}>{headCol}</ColumnHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.getTable.map((content) => (
              <tr key={content.name}>
                <ColumnCell>{content.name}</ColumnCell>
                <ColumnCell>{content.surname}</ColumnCell>
                <ColumnCell>{content.age}</ColumnCell>
                <ColumnCell>{content.time}</ColumnCell>
              </tr>
            ))}
          </tbody>
        </table>*/}
      </Card>
    </Layout>
  );
};
