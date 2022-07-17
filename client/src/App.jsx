import React, { useEffect } from "react";
import store from "./store/store";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login, Registration, TwoFA } from "./components";

const Dashboard = () => <div>test</div>;

export const App = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (store.shouldVerifiedTwoFA) {
      navigate("/two-fa");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/two-fa" element={<TwoFA />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
});
