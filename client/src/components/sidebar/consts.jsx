import {
  AiFillHome,
  AiOutlineTable,
  AiOutlineOrderedList,
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
];
