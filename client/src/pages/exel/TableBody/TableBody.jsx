import React from "react";
import { Row } from "../Row/Row";
import { AxisCell } from "../AxisCell/AxisCell";
import { Column } from "../Column/Column";
import { Cell } from "../Cell/Cell";

export const TableBody = ({ numberOfRows, numberOfColumns }) => {
  return (
    <>
      {[...Array(numberOfRows)].map((row, rowIndex) => (
        <Row key={rowIndex}>
          <AxisCell>{rowIndex + 1}</AxisCell>
          {[...Array(numberOfColumns)].map((column, columnIndex) => (
            <Column key={columnIndex}>
              <Cell cellId={`${rowIndex},${columnIndex}`} />
            </Column>
          ))}
        </Row>
      ))}
    </>
  );
};
