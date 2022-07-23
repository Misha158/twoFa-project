import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Header } from "./Header";

export const Layout = ({ title, children }) => {
  return (
    <div style={{ display: "flex", backgroundColor: "antiquewhite" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ padding: 20 }}>
          <h1 style={{ fontWeight: 700 }}>{title}</h1>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
