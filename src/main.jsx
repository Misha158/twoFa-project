import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Registration, TwoFA } from "./components";
import { Container } from "./styled";

const Dashboard = () => <div>test</div>;

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/two-fa" element={<TwoFA />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
