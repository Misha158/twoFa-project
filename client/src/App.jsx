import React, { useEffect } from "react";
import store from "./store/store";
import { observer } from "mobx-react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Login, Registration, TwoFA } from "./pages";
import { Sidebar } from "./components";

const Dashboard = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div>content</div>
  </div>
);

const ProtectedRoutes = () => {
  const isAuth = store.authData.isAuth;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export const App = observer(() => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/two-fa" element={<TwoFA />} />

        <Route path="/" exact element={<ProtectedRoutes />}>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/settings" exact element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
});
