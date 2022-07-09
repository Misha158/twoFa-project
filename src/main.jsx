import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp, TwoFA } from "./components";
import { Container } from "./styled";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/two-fa" element={<TwoFA />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
