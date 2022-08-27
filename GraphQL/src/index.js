const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
let { tableData, reactTableData } = require("./data");
const users = [{ id: 1, username: "Vasya", age: 25 }];

const app = express();
app.use(cors());

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};
const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user.id == id);
  },
  getReactTableFiltering: ({ search }) => {
    return reactTableData.filter(
      (row) =>
        row.col1.toLowerCase().includes(search.toLowerCase()) ||
        row.col2.toLowerCase().includes(search.toLowerCase()) ||
        String(row.col3).toLowerCase().includes(search.toLowerCase())
    );
  },

  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },

  createRowInTable: ({ input }) => {
    const newRow = { ...input };
    reactTableData.push(newRow);
    return newRow;
  },

  deleteRowInTable: ({ input }) => {
    reactTableData = reactTableData.filter((row) => row.id !== input);
    return reactTableData.find((row) => row.id === input);
  },

  updateRowInTable: ({ input }) => {
    console.log("input", input);
    reactTableData = reactTableData.map((row) =>
      row.id === input.id ? { ...row, ...input } : row
    );
    console.log(reactTableData);

    return input;
  },

  getTable: () => {
    return tableData;
  },

  getReactTable: () => {
    return reactTableData;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("server started on port 5000"));
