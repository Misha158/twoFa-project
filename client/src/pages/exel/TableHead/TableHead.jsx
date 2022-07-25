import React from "react";
import { Row } from "../Row/Row";
import { AxisCell } from "../AxisCell/AxisCell";

const numberToChar = (num) => {
  const division = Math.floor(num / 26);
  const reminder = Math.floor(num % 26);

  const char = String.fromCharCode(reminder + 97).toUpperCase();
  // The idea of subtracting 1 is because the next numbers doesn't have zero in their system
  // But our xlsheet title alphabet mapping have zero (A=0)
  // So we need to subtract 1 to adjust this
  // In case of using base 10, number after 9 wouldn't be 10 but rather 00 :D
  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};

export const TableHead = ({ numberOfColumns }) => {
  return (
    <Row>
      {[...Array(numberOfColumns + 1)].map((column, columnIndex) =>
        columnIndex !== 0 ? (
          <AxisCell key={columnIndex}>{numberToChar(columnIndex - 1)}</AxisCell>
        ) : (
          <AxisCell key={columnIndex} />
        )
      )}
    </Row>
  );
};
