import React from "react";
import { Navigate } from "react-router-dom";
import useCreateAuthStateContext from "../components/Home";

const SignInRoute = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SignInRoute;
