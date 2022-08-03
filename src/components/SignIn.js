import "../Header.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../authprovider/AuthProvider";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { handleAuthChange } = useCreateAuthDispatchContext();

  const Navigate = useNavigate();
  const handleOnClick = () => {
    if (userName !== "admin" && userPassword !== "admin123") {
      return;
    }
    handleAuthChange(true);
    Navigate("/cart");
  };
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={userPassword}
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />

      <button onClick={handleOnClick}>Enter</button>
    </div>
  );
}

export default SignIn;
