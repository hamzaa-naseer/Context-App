import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header.css";

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="list">
        <ul style={{ display: "flex" }}>
          <Link
            style={{
              color: pathname === "/" ? "red" : "white",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>

          <Link
            style={{
              color: pathname === "/cart" ? "red" : "white",
              textDecoration: "none",
            }}
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{
              color: pathname === "/signin" ? "red" : "white",
              textDecoration: "none",
            }}
            to="/signin"
          >
            Log In
          </Link>
          <Link
            style={{
              color: pathname === "/signout" ? "red" : "white",
              textDecoration: "none",
            }}
            to="/signout"
          >
            Log Out
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
