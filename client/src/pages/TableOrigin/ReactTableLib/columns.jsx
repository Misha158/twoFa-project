export const columns = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: "Column 2",
    accessor: "col2",
    Cell: ({ cell: { value } }) => <h3>{value}</h3>,
  },
  {
    Header: "Column 3",
    accessor: "col3",
  },
  {
    Header: "Column 4",
    accessor: "col4",
  },
];
