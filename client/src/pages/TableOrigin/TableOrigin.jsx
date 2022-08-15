import React, { useState, useRef } from "react";
import { Card, Collapsible, Layout } from "../../components";
import { columnHeaders, columnContents } from "./column";
import { ColumnCell, ColumnHeader } from "./styled";
import { useQuery } from "@apollo/client";
import { GET_TABLE } from "./query";

export const TableOrigin = () => {
  const { data: tableData, loading, error, refetch } = useQuery(GET_TABLE);

  return (
    <Layout>
      <Card>
        {/*<Collapsible />*/}
        <table style={{ width: "100%", border: "1px solid black" }}>
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
        </table>
      </Card>
    </Layout>
  );
};
