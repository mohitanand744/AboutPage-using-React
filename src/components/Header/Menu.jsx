import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={style.navLinks}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "Active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "Active" : "")}
      >
        About Us
      </NavLink>
      <NavLink
        to={"/browser_coach"}
        className={({ isActive }) => (isActive ? "Active" : "")}
      >
        Browser Coach
      </NavLink>
      <NavLink
        to={"/stream"}
        className={({ isActive }) => (isActive ? "Active" : "")}
      >
        Activity Stream
      </NavLink>
      <NavLink
        to={"/become_a_coach"}
        className={({ isActive }) => (isActive ? "Active" : "")}
      >
        Become a Coach
      </NavLink>
    </div>
  );
};

export default Menu;
