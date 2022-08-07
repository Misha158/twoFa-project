import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styled";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
