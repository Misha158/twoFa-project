import {
  AiFillHome,
  AiOutlineTable,
  AiOutlineOrderedList,
  AiOutlineHolder,
  AiOutlineExpand,
} from "react-icons/ai";
import React from "react";
import { routes } from "../../consts/routes";

export const defaultStyles = { width: "100%", height: "100%" };

export const pages = [
  {
    name: "dashboard",
    icon: <AiFillHome style={defaultStyles} />,
    url: routes.dashboard,
  },
  {
    name: "Exel",
    icon: <AiOutlineTable style={defaultStyles} />,
    url: routes.exel,
  },
  {
    name: "Virtualized",
    icon: <AiOutlineOrderedList style={defaultStyles} />,
    url: routes.virtualized,
  },
  {
    name: "Tic tac toe",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.ticTacToe,
  },
  {
    name: "Todo list with drag n drop",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.todolistDrag,
  },
  {
    name: "Table origin",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.tableOrigin,
  },
  {
    name: "GraphQL",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.graphql,
  },
  {
    name: "Stepper Form",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.stepperForm,
  },
  {
    name: "Target table",
    icon: <AiOutlineExpand style={defaultStyles} />,
    url: routes.targetingTable,
  },
];
