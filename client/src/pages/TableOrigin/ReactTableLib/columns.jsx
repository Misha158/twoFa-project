import { Button } from "antd";

export const getColumns = ({ onClick, onUpdateRow }) => [
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
    Cell: (value) => (
      <Button type="primary" onClick={() => onClick(value)}>
        Delete
      </Button>
    ),
  },
  {
    Header: "Update",
    accessor: "update",
    Cell: (value) => (
      <Button type="dashed " onClick={() => onUpdateRow(value)}>
        Update
      </Button>
    ),
  },
];
