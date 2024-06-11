import React from "react";
import useStore from "../../store/store";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  let user = useStore((state) => state.user);

  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{user.length}</sup>
      </NavLink>
    </div>
  );
}

export default Navbar;
