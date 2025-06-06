import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";

import RestrictedRoute from "./routes/RestrictedRoute";
import PrivateRoute from "./routes/PrivateRoute";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegisterPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
