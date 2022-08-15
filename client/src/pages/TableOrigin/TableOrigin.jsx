import React from "react";
import { Card, Layout } from "../../components";
import { columnHeaders, columnContents } from "./column";
import { ColumnCell, ColumnHeader } from "./styled";

export const TableOrigin = () => {
  return (
    <Layout>
      <Card>
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              {columnHeaders.map((headCol) => (
                <ColumnHeader key={headCol}>{headCol}</ColumnHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {columnContents.map((content) => (
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
