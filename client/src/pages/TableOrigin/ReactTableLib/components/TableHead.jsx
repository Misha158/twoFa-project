import React from "react";

export const TableHead = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              {column.isSorted ? (column.isSortedDesc ? "-" : "+") : ""}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
