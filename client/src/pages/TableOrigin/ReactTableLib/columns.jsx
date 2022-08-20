import { Button } from "antd";

export const columns = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
  {
    Header: "Column 3",
    accessor: "col3",
  },
  {
    Header: "Action",
    accessor: "col4",
    Cell: () => <Button type="primary">Delete</Button>,
  },
];
