import React from "react";
import { Table as AntTable } from "antd";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Sub Category",
    dataIndex: "subCategory",
    key: "subCategory",
  },
  {
    title: "Multiply Values",
    dataIndex: "multiplyValues",
    key: "multiplyValues",
  },
];

export const Table = () => {
  return <AntTable dataSource={[]} columns={columns} />;
};
