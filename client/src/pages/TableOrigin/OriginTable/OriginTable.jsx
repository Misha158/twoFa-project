import React from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { GET_TABLE } from "./query";
import { ColumnCell, ColumnHeader } from "./styled";

export const columnHeaders = ["name", "surname", "age", "Часы"];
export const columnContents = [
  { name: "Misha", surname: "Sv", age: 25, time: moment().format("LLL") },
  { name: "Vasya", surname: "Pupkin", age: 45, time: moment().format("LLL") },
];

export const OriginTable = () => {
  const { data, loading, error, refetch } = useQuery(GET_TABLE);
  return (
    <table style={{ width: "100%", border: "1px solid black" }}>
      <thead>
        <tr>
          {columnHeaders.map((headCol) => (
            <ColumnHeader key={headCol}>{headCol}</ColumnHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.getTable.map((content) => (
          <tr key={content.name}>
            <ColumnCell>{content.name}</ColumnCell>
            <ColumnCell>{content.surname}</ColumnCell>
            <ColumnCell>{content.age}</ColumnCell>
            <ColumnCell>{content.time}</ColumnCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
