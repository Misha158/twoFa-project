const moment = require("moment");

const tableData = [
  { name: "Misha", surname: "Sv", age: 25, time: moment().format("LLL") },
  { name: "Vasya", surname: "Pupkin", age: 45, time: moment().format("LLL") },
];

module.exports = tableData;
