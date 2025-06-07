import React from "react";
import RegistrationForm from "../Forms/RegistrationForm";

const RegisterPage = () => {
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
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
