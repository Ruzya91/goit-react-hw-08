import React from "react";
import LoginForm from "../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        display: "flex",
      }}
    >
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
