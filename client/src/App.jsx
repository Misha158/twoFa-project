import React from "react";
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
import {
  Login,
  Registration,
  TwoFA,
  Dashboard,
  Excel,
  Virtualized,
} from "./pages";
import { routes } from "./consts/routes";

const ProtectedRoutes = () => {
  const isAuth = store.authData.isAuth;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export const App = observer(() => {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.registration} element={<Registration />} />
        <Route path="/two-fa" element={<TwoFA />} />

        <Route path="/" exact element={<ProtectedRoutes />}>
          <Route path="/" exact element={<Dashboard />} />
          <Route path={routes.dashboard} exact element={<Dashboard />} />
          <Route path={routes.exel} exact element={<Excel />} />
          <Route path={routes.virtualized} exact element={<Virtualized />} />
        </Route>
      </Routes>
    </>
  );
});
