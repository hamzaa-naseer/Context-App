import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../authprovider/AuthProvider";

const SignOutRoute = () => {
  const { handleAuthChange } = useCreateAuthDispatchContext();

  handleAuthChange(false);
  return <Navigate to="/" />;
};

export default SignOutRoute;
