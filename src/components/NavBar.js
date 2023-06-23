import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apartments">List of Apartments</NavLink>
      <NavLink to="/apartments/:id">Apartment Details </NavLink>
      <NavLink to="/apartments/create">Create an Apartment </NavLink>
    </nav>
  );
}

export default NavBar;
