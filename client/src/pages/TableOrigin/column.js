import moment from "moment";

export const columnHeaders = ["name", "surname", "age", "Часы"];
export const columnContents = [
  { name: "Misha", surname: "Sv", age: 25, time: moment().format("LLL") },
  { name: "Vasya", surname: "Pupkin", age: 45, time: moment().format("LLL") },
];
