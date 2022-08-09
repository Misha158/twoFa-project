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
  TicTacToe,
  SupportRequest,
  Test,
  TodoListDrag,
  TableOrigin,
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

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.exel} element={<Excel />} />
          <Route path={routes.virtualized} element={<Virtualized />} />
          <Route path={routes.ticTacToe} element={<TicTacToe />} />
          <Route path={routes.supportRequest} element={<SupportRequest />} />
          <Route path={routes.todolistDrag} element={<TodoListDrag />} />
          <Route path={routes.tableOrigin} element={<TableOrigin />} />
          <Route path={routes.test} element={<Test />} />
        </Route>
      </Routes>
    </>
  );
});
