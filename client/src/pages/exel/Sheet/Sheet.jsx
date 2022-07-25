import React from "react";

import { TableHead } from "../TableHead/TableHead";
import { TableBody } from "../TableBody/TableBody";
import { Table, TableWrapper } from "./styled";
export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

export const Sheet = () => {
  const sheetSize = { width: 1500, height: 600 };

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);
  return (
    <TableWrapper>
      <Table>
        <tbody>
          <TableHead numberOfColumns={numberOfColumns} />
          <TableBody
            numberOfRows={numberOfRows}
            numberOfColumns={numberOfColumns}
          />
        </tbody>
      </Table>
    </TableWrapper>
  );
};
