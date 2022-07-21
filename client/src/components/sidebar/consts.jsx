import { AiFillHome } from "react-icons/ai";
import React from "react";

export const defaultStyles = { width: "100%", height: "100%" };

export const pages = [
  {
    name: "dashboard",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/dashboard",
  },
  {
    name: "Table",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/table",
  },
  {
    name: "Settings",
    icon: <AiFillHome style={defaultStyles} />,
    url: "/settings",
  },
];
