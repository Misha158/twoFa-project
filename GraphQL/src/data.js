const moment = require("moment");

const tableData = [
  { name: "Misha", surname: "Sv", age: 25, time: moment().format("LLL") },
  { name: "Vasya", surname: "Pupkin", age: 45, time: moment().format("LLL") },
];

module.exports = tableData;

const reactTableData = [
  {
    col1: "Hello",
    col2: "World",
    col3: 10,
  },
  {
    col1: "react-table",
    col2: "rocks",
    col3: 50,
  },
  {
    col1: "whatever",
    col2: "you want",
    col3: 2,
  },
];

module.exports = { reactTableData, tableData };
